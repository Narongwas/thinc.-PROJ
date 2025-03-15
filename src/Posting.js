import React, { useState } from 'react';
import api from './axiosConfig.js'; // Axios setup
import Header from './header.js';
import './Posting.js';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
}