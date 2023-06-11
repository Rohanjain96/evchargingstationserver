const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    stationAddress:{
        type:"String",
        required:true
    },
    stationName:{
        type:"String",
        required:true
    },
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
    timeSlot: [{
        starting_time: {type:String},
        ending_time: {type:String}
    }],
    paymentMode: {
        type:"String",
        required: true
    },
    date: Date
}, {timestamps: true});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;