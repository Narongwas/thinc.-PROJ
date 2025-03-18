const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://I_lia_51_group:cpbigsausagesize51@cluster0.4giur.mongodb.net/User_Post?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

const commentSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    name: String,
    content: String,
    vote: Number,
    date: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Comment', commentSchema);