import './Register.css';
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

console.log("API Object:", api);
function RegisterPage() {
    return (
        <div className="registerpage">
            <Box />
        </div>
    );
}

function Box() {
    const [email_per, setEmail] = useState('');
    const [password_per, setPassword] = useState('');
    const [username_per, setUsername] = useState('');
    const [confirm_password_per, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password_per !== confirm_password_per) {
            alert("Passwords do not match!");
            return;
        }
        api.post('/register', { email: email_per, password: password_per, username: username_per }) 
            .then(response => {
                const userId = response.data._id;
                localStorage.setItem('userId', userId);
                setEmail('');
                setPassword('');
                setUsername('');
                setConfirmPassword('');
                navigate('/Home'); 
            })
            .catch(error => {
                alert("Error during registration!");
            });
    };  

    return (
        <form className="form-signup" onSubmit={handleSubmit}>
            <p className="wec">Welcome!</p>
            <h1 className="h3 mb-3 fw-normal">Sign up to</h1>
            <p>Lorem Ipsum is simply</p>
            <div className="form-floating">
                <label htmlFor="floatingInput">Email address</label>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email_per}
                    onChange={handleEmailChange}
                />
            </div>

            <div className="form-floating">
                <label htmlFor="floatingUsername">Username (Display)</label>
                <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    value={username_per}
                    onChange={handleUsernameChange}
                />
            </div>
            
            <div className="form-floating">
                <label htmlFor="floatingPassword">Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password_per}
                    onChange={handlePasswordChange}
                />
            </div>

            <div className="form-floating">
                <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    value={confirm_password_per}
                    onChange={handleConfirmPasswordChange}
                />
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Register
            </button>
            <p className="mt-5 mb-3 text-muted">
                Already have an Account? 
                <Link to="/Signin">
                    <b>Sign in</b>
                </Link>
            </p>
        </form>
    );
}

export default RegisterPage;