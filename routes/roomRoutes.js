const express = require('express');
const {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController');
const {
  validateRoomCreate,
  validateRoomUpdate,
  validateMongoId,
  validatePagination,
} = require('../middleware/validation');

const router = express.Router();

// GET all rooms with pagination validation
router.get('/', validatePagination, getAllRooms);

// GET single room with ID validation
router.get('/:id', validateMongoId, getRoomById);

// POST create room with validation
router.post('/', validateRoomCreate, createRoom);

// PUT update room with ID and validation
router.put('/:id', validateMongoId, validateRoomUpdate, updateRoom);

// DELETE room with ID validation
router.delete('/:id', validateMongoId, deleteRoom);

module.exports = router;
