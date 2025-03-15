const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: String,
    content: String,
    vote: Number,
    date: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Comment', commentSchema);