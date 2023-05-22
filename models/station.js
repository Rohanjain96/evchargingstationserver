const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    chargePerUnit: Number,
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    date: String
}, {timestamps: true});

const Station = mongoose.model('Station', stationSchema);

module.exports = Station;