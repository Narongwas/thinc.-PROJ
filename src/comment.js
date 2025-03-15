const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String,
    vote: String,
    date: String
  });

module.exports = mongoose.model('Comment', commentSchema);