const Booking = require('../models/booking.js')

const bookSlot = async (req, res) => {
    try {
        let { stationId, timeSlots, date, stationAddress, stationName } = req.body;
        const userId = String(req.user._id)
        
        if(!stationId || !timeSlots || !date || !stationAddress ||!stationName) {
            return res.status(403).json({
                result: false,
                msg: "Incomplete information is given"
            });
        } 

        let body = {
            stationId,
            timeSlot: timeSlots,
            date,
            userId,
            stationAddress, 
            stationName
        }

        const booking = await Booking.create(body);
        return res.status(201).json({
            result: true,
            msg: "Slot Booked successfully",
            details: booking
        });
        
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in booking timeslot'});
    }
}

const fetchAllSlotsBookings = async (req, res) => {
    try {
        const {stationId} = req.body;

        if(!stationId){
            return res.status(403).json({
                result: false,
                msg: "Error: invalid station id"
            });
        }

        let bookings = []
        for(let i =0; i< 3;i++){
            const curr = new Date(new Date().getTime() + i * 86400000)
            const date= curr.getDate() + " " + curr.toLocaleString('default', { month: 'long', year: "numeric" })
            bookings.push(...await Booking.find({stationId: stationId, date: date}))
        }

        return res.status(200).json({
            result: true,
            msg: "All Bookings fetched successfully",
            bookings: bookings
        });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in fetching all slots'});
    }
}

const fetchAllUserBooking = async (req, res) => {
    try {

        const bookings = await Booking.find({userId:req.user._id}).sort({createdAt:-1})

        return res.status(200).json({
            result: true,
            msg: "All Bookings fetched successfully",
            bookings: bookings
        });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in fetching all bookings'});
    }
}

module.exports = {
    bookSlot,
    fetchAllSlotsBookings,
    fetchAllUserBooking
}