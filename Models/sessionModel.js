const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  sessionID: {
    type: String,
  },
  status: {
    type: String,
    default: 'Failed',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
