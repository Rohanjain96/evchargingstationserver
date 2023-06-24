const express = require("express");
const router = express.Router();
const { protect } = require('../Middleware/Autheticate');
const {
    bookSlot,
    fetchAllUserBooking,
    fetchAllSlotsBookings
} = require('../controllers/booking');

// router.post('/bookSlot', protect, bookSlot);
router.post('/bookSlot',protect, bookSlot);

router.post('/fetchAllSlots', protect, fetchAllSlotsBookings);

router.post('/fetchAllUserBooking', protect, fetchAllUserBooking);

module.exports = router;