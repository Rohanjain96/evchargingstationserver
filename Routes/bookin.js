const express = require("express");
const router = express.Router();
const { protect } = require('../Middleware/Autheticate');
const {
    bookSlot,
    fetchAllSlots
} = require('../controllers/booking');

// router.post('/bookSlot', protect, bookSlot);
router.post('/bookSlot', bookSlot);

router.post('/fetchAllSlots', protect, fetchAllSlots);


module.exports = router;