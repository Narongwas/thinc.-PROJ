const express = require('express');
const mongoose = require('mongoose');
const Post = require('./post_db');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/myapp');

app.post('/api/posts', (req, res) => {
    const {name, body} = req.body;
    const newPost = new Post({
        name,
        body,
        vote: 0,
        date: Date.now()
    });

    newPost.save()
        .then(post => res.status(200).json(post))
        .catch(error => res.status(500).json({ message: "Error saving post", error }));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});