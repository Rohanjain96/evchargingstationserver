const express = require("express");
const router = express.Router();
const { protect } = require('../Middleware/Autheticate');
const {
    bookSlot,
    fetchAllSlots,
    fetchAllUserBooking
} = require('../controllers/booking');

// router.post('/bookSlot', protect, bookSlot);
router.post('/bookSlot',protect, bookSlot);

router.post('/fetchAllSlots', protect, fetchAllSlots);

router.post('/fetchAllUserBooking', protect, fetchAllUserBooking);

module.exports = router;