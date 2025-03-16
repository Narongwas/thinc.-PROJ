const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://I_lia_51_group:cpbigsausagesize51@cluster0.4giur.mongodb.net/User_Post');

const commentSchema = new mongoose.Schema({
    name: String,
    content: String,
    vote: Number,
    date: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Comment', commentSchema);