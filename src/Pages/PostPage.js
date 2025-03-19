import './PostPage.css'
import React, { useState } from 'react';
import api from '../axiosConfig.js';
import Header from '../Components/header_if_sign.js';
import { useNavigate } from "react-router-dom";


function PostPage() {
    return (
        <div class="postpage">
            <Header />
            <Box />
        </div>
    );
}

function Box(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate(); 

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        api.post('/posts', { user: userId, title: title, content: body }) 
            .then(response => {
                setTitle('');
                setBody('');
                navigate('/Home'); 
            })
            .catch(error => {
                alert("Error!");
            });
    };    

    return (
        <div className="full-screen-page">
            <div className="box">
                <div className="form-section">
                    <p className="display-name">Your display name</p>
                    <div>
                        <input
                            type="text"
                            className="name-input"
                            placeholder="Alias"
                            value={title}
                            onChange={handleTitleChange}
                            aria-label="Username"
                        />
                    </div>

                    <p className="thought">Your Thought</p>
                    <div className="input-group">
                        <textarea
                            className="thought-input"
                            placeholder="Enter your thought (max 200 characters)"
                            value={body}
                            onChange={handleBodyChange}
                            aria-label="Thought"
                            maxLength={200}
                        />
                    </div>

                    <div className="submit-btn-container">
                        <button className="btn" onClick={handleSubmit}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;