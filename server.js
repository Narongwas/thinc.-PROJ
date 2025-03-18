const express = require('express');
const Post = require('./src/Databases/post_db');
const Comment = require('./src/Databases/comment_db');
const User = require('./src/Databases/users_db');
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

app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('comments');
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        console.log("Post data being sent:", post);
        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post:", error);
        res.status(500).json({ message: "Error fetching post", error });
    }
});

app.post('/api/posts/:id/comments', (req, res) => {
    const { name, content } = req.body;
    const newComment = new Comment({
        post: req.params.id,
        name,
        content,
        date: Date.now()
    });

    newComment.save()
        .then(comment => {
            Post.findById(req.params.id)
                .then(post => {
                    post.comments.push(comment._id); 
                    post.save()
                        .then(() => res.status(200).json(comment))
                        .catch(error => res.status(500).json({ message: "Error updating post with comment", error }));
                })
                .catch(error => res.status(500).json({ message: "Error fetching post to link comment", error }));
        })
        .catch(error => res.status(500).json({ message: "Error saving comment", error }));
});

app.delete('/api/posts/:postId/comments/:commentId', async (req, res) => {
    const { postId, commentId } = req.params;
    try {
        const post = await Post.findById(postId);
        post.comments = post.comments.filter(comment => comment._id.toString() !== commentId);
        await post.save();
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting comment", error: err });
    }
});

app.post('/api/register', async (req, res) => {
    const { email, password, username } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newUser = new User({ email, password, username, karma: 0, coin: 0 });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});