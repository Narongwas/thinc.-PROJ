import './Home.css';
import React, { useEffect, useState } from 'react';
import api from '../Assets/axiosConfig.js';
import Header from '../Components/header_if_sign.js';
import { useNavigate } from "react-router-dom";
import plusicon from '../Assets/plus-icon-black-2.png';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        api.get('/posts')
            .then(response => {
                setPosts(response.data); 
            })
            .catch(error => {
                alert("Error fetching posts");
            });
    }, []); 

    const handlePostClick = (postId) => {
        navigate(`/Comment/${postId}`);
    };

    const deletePost = (postId) => {
        setPosts(posts.filter(post => post._id !== postId))
    };


    return (
        <div>
            <Header />
            <h2>Home</h2>
            <div className="posts-container">
                {posts.map(post => (
                    <div className="post" key={post._id} >
                        <div className="post-name">
                            <h3>{post.title}</h3>
                        </div>
                        <div className="deletepost">
                            <button className="delete-btn" onClick={() => deletePost(post._id)}>X</button>
                        </div>
                        <section className="post-name-and-content" key={post._id} onClick={() => handlePostClick(post._id)} style={{ cursor: 'pointer' }}>
                            <div className="post-name" >
                                <h3>{post.name}</h3>
                            </div>
                            <div className="post-content">
                                <p>{post.content}</p>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
            <footer className="">
                <Link to={'/post'}>
                <button className="topost-btn">
                    <img src={plusicon} alt="plusicon" className="topost-icon"/>
                </button>
                </Link>
            </footer>
        </div>
    );
}

export default Home;