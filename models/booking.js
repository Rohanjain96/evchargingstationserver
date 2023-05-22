const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    stationId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Station'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    timeSlot: {
        type: String,
        required: true
    },
    date: Date
}, {timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;