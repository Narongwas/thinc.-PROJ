import './PostPage.css'
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import Header from '../Components/header_if_sign.js';
import { useNavigate } from "react-router-dom";


function PostPage() {
    function onClick() {
        window.location.href = "index.html";
    }
    return (
        <div>
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
        api.post('/posts', { name: title, content: body }) 
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
                    <div className="input-group">
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
                            placeholder="Enter your thought"
                            value={body}
                            onChange={handleBodyChange}
                            aria-label="Thought"
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