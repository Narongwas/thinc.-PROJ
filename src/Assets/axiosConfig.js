import axios from 'axios';
console.log("Backend Base URL:", process.env.REACT_APP_BACKEND_BASEURL);

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASEURL,
});

export default api;