const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://I_lia_51_group:cpbigsausagesize51@cluster0.4giur.mongodb.net/User_Post?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

const postSchema = new mongoose.Schema({
  name: String,
  content: String,
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  vote: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Post', postSchema);