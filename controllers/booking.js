const express = require('express');
const { generateauthtoken } = require("../config/generateAuthtoken.js");
const Booking = require('../models/booking.js')

const bookSlot = async (req, res) => {
    try {
        console.log('body: ', req.body);
        let { stationId, userId, timeSlot, date } = req.body;
        date = new Date(date);
        console.log('date: ', date);
        if(!stationId || !userId || !timeSlot || !date) {
            return res.status(403).json({
                result: false,
                msg: "Incomplete information is given"
            });
        } 
        const booking = await Booking.create(req.body);
        console.log('booking: ', booking);
        return res.status(200).json({
            result: true,
            msg: "Slot Booked successfully",
            slot: booking
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

        const allstots = await Booking.find({stationId: stationId, date: date})

        return res.status(200).json({
            result: true,
            msg: "All Slots fetched successfully",
            slots: allstots
        });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({msg: 'Error in booking timeslot'});
    }
}



module.exports = {
    bookSlot,
    fetchAllSlots
}