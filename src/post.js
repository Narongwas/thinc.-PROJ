const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String,
    vote: String,
    date: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

  });

module.exports = mongoose.model('Post', postSchema);