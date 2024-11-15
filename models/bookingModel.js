const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
