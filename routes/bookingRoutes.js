const express = require('express');
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const {
  validateBookingCreate,
  validateBookingUpdate,
  validateMongoId,
  validatePagination,
} = require('../middleware/validation');

const router = express.Router();

// GET all bookings with pagination validation
router.get('/', validatePagination, getAllBookings);

// GET single booking with ID validation
router.get('/:id', validateMongoId, getBookingById);

// POST create booking with validation
router.post('/', validateBookingCreate, createBooking);

// PUT update booking with ID and validation
router.put('/:id', validateMongoId, validateBookingUpdate, updateBooking);

// DELETE booking with ID validation
router.delete('/:id', validateMongoId, deleteBooking);

module.exports = router;
