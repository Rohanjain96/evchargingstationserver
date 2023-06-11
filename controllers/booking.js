const Booking = require('../models/booking.js')

const bookSlot = async (req, res) => {
    try {
        let { stationId, timeSlot, date,paymentMode, stationAddress, stationName } = req.body;
        const userId = String(req.user._id)

        body = {
            stationId,
            timeSlot: timeSlot,
            date,
            userId,
            paymentMode,
            stationAddress, 
            stationName
        }

        if(!stationId || !timeSlot || !date || !paymentMode || !stationAddress ||!stationName) {
            return res.status(403).json({
                result: false,
                msg: "Incomplete information is given"
            });
        } 
        const booking = await Booking.create(body);
        return res.status(200).json({
            result: true,
            msg: "Slot Booked successfully",
            details: booking
        });
        
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in booking timeslot'});
    }
}

const fetchAllSlots = async (req, res) => {
    try {
        const {stationId, date} = req.body;
        if(!stationId || !date){
            return res.status(403).json({
                result: true,
                msg: "Error: invalid station id"
            });
        }

        const bookings = await Booking.find({stationId: stationId, date: date})

        return res.status(200).json({
            result: true,
            msg: "All Bookings fetched successfully",
            bookings: bookings
        });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in booking timeslot'});
    }
}

const fetchAllUserBooking = async (req, res) => {
    try {

        const bookings = await Booking.find({userId:req.user._id})

        return res.status(200).json({
            result: true,
            msg: "All Bookings fetched successfully",
            bookings: bookings
        });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in booking timeslot'});
    }
}



module.exports = {
    bookSlot,
    fetchAllSlots,
    fetchAllUserBooking
}