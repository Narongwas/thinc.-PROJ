import './PostPage.css'
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import Header from '../Components/header_if_sign.js';


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
                alert("Submitted!")
                setTitle('');
                setBody('');
            })
            .catch(error => {
                alert("Error!")
            });
    };

    return (
        <div>
            <div className="box">
                <br />
                <p className="display-name">Your display name</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"></span>
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
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"></span>
                    <textarea
                        type="text"
                        className="thought-input"
                        placeholder="Enter your thought"
                        value={body} 
                        onChange={handleBodyChange}
                        aria-label="Thought"
                    />
                </div>
            </div>
            <br />
            <button className="btn" onClick={handleSubmit}>Post</button>
        </div>
    );
}

export default PostPage;