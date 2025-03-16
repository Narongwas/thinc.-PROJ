import './Home.css';
import React, { useEffect, useState } from 'react';
import api from '../Assets/axiosConfig.js';
import Header from '../Components/header_if_sign.js';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/posts')
            .then(response => {
                setPosts(response.data); 
            })
            .catch(error => {
                alert("Error fetching posts");
            });
    }, []); 

    return (
        <div>
            <Header />
            <h2>Home</h2>
            <div className="posts-container">
                {posts.map(post => (
                    <div className="post" key={post._id}>
                        <div className="post-name">
                            <h3>{post.name}</h3>
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;