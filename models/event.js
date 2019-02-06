const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  prog: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  game: {
    type: Array,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
