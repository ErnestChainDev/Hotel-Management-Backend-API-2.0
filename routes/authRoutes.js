const express = require('express');
const {
  register,
  login,
  getMe,
  getAllUsers,
} = require('../controllers/authController');
const { protect, authorize } = require('../middleware/authMiddleware');
const { validateRegister, validateLogin } = require('../middleware/authValidation');

const router = express.Router();

// Public routes
router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

// Protected routes
router.get('/me', protect, getMe);

// Admin only routes
router.get('/users', protect, authorize('admin'), getAllUsers);

module.exports = router;
