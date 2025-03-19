const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://I_lia_51_group:cpbigsausagesize51@cluster0.4giur.mongodb.net/User_Post?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    karma: { type: Number, default: 0 },
    coin: { type: Number, default: 0 },
    post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }
  });

module.exports = mongoose.model('User', userSchema);