const mongoose = require('mongoose');
mongoose.connect(`${import.meta.env.MONGODB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

const commentSchema = new mongoose.Schema({
    content: String,
    vote: Number,
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    date: { type: Date, default: Date.now }
  });

module.exports = mongoose.model('Comment', commentSchema);