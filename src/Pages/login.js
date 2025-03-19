import './signin.css';
import React, { useState } from 'react';
import api from '../axiosConfig.js';
import { Link, useNavigate } from "react-router-dom";

function Signinpage() {
    return (
        <div className="signinpage">
            <Box />
        </div>
    )
}

function Box() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/login', { email, password });
            if (response.status === 200) {
                navigate('/Home');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert(`Login failed. Either it's not implemented or your login credentials just sucks.`);
        }
    };

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <p className="wec">Welcome !</p>
            <h1 className="h3mb-3fw-normal">Sign in to</h1>
            <p>Lorem Ipsum is simply </p>

            <div className="form-floating">
                <p>Email</p>
                <input
                    type="email"
                    name="email"
                    title="Email address"
                    id="floatingInput"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-floating">
                <p>Password</p>
                <input
                    type="password"
                    name="password"
                    id="floatingPassword"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="checkboxmb-3">
                <div><input type="checkbox" value="remember-me" /> Remember me</div>
                <a href="/forgot-password">Forgot Password ?</a>
            </div>
            <button className="w-100btnbtn-lgbtn-primary" type="submit">Log in</button>
            <p className="mt-5mb-3text-muted">Don't have an account? 
                <Link to={'/Register'}><b>Register</b></Link>
            </p>
        </form>
    );
}

export default Signinpage;