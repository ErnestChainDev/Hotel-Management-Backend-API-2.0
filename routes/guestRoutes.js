const express = require('express');
const {
  getAllGuests,
  getGuestById,
  createGuest,
  updateGuest,
  deleteGuest,
  getGuestBookings,
} = require('../controllers/guestController');
const {
  validateGuestCreate,
  validateGuestUpdate,
  validateMongoId,
  validatePagination,
} = require('../middleware/validation');

const router = express.Router();

// GET all guests with pagination validation
router.get('/', validatePagination, getAllGuests);

// GET single guest with ID validation
router.get('/:id', validateMongoId, getGuestById);

// POST create guest with validation
router.post('/', validateGuestCreate, createGuest);

// PUT update guest with ID and validation
router.put('/:id', validateMongoId, validateGuestUpdate, updateGuest);

// DELETE guest with ID validation
router.delete('/:id', validateMongoId, deleteGuest);

// GET guest's bookings
router.get('/:id/bookings', validateMongoId, getGuestBookings);

module.exports = router;
