const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    guestId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guest',
      required: [true, 'Guest ID is required'],
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'Room ID is required'],
    },
    checkIn: {
      type: Date,
      required: [true, 'Check-in date is required'],
    },
    checkOut: {
      type: Date,
      required: [true, 'Check-out date is required'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'checked-in', 'completed', 'cancelled'],
      default: 'pending',
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price cannot be negative'],
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

// Validate checkOut is after checkIn
bookingSchema.pre('save', function (next) {
  if (this.checkOut <= this.checkIn) {
    next(new Error('Check-out date must be after check-in date'));
  } else {
    next();
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
