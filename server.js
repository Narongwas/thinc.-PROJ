const express = require('express');
const Post = require('./src/Databases/post_db');
const cors = require('cors'); 

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/posts', (req, res) => {
    const {name, content} = req.body;
    const newPost = new Post({
        name,
        content,
        vote: 0,
        date: Date.now()
    });

    newPost.save()
        .then(post => res.status(200).json(post))
        .catch(error => res.status(500).json({ message: "Error saving post", error }));
});

app.get('/api/posts', (req, res) => {
    Post.find()
        .then(posts => res.status(200).json(posts)) 
        .catch(error => res.status(500).json({ message: "Error fetching posts", error }));
});

app.get('/api/posts/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => res.status(200).json(post))
        .catch(error => res.status(500).json({ message: "Error fetching post", error }));
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});