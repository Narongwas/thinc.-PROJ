import React, { useState } from 'react';
import api from './axiosConfig.js';
import Header from './header.js';
import './Posting.js';

const CreatePost = () => {
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
        api.post('/posts', { title, body })
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
        <div className="App">
            <Header />
            <form onSubmit={handleSubmit} className="create-post-form">
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter post title"
                        className="input-box small-textbox"
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={handleBodyChange}
                        placeholder="Enter post body"
                        className="input-box large-textbox"
                    />
                </div>
            </form>
            <button type="submit" className="submit-btn">Post</button>
        </div>
    );
};

export default CreatePost;