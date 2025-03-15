const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    content: String,
    vote: Number,
    date: { type: Date, default: Date.now },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

  });

module.exports = mongoose.model('Post', postSchema);