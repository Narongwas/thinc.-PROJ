import './Register.css'
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import { useNavigate } from "react-router-dom";


function RegisterPage() {
    return (
        <div classname="registerpage">
            <Box />
        </div>
    );
}

function Box(){
    const [email_per, setEmail] = useState('');
    const [password_per, setPassword] = useState('');
    const [username_per, setUsername] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/register', { email: email_per, password: password_per, username: username_per }) 
            .then(response => {
                setEmail('');
                setPassword('');
                setUsername('');
                navigate('/Home'); 
            })
            .catch(error => {
                alert("Error!");
            });
    };    

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Sign In</h1>

            <div className="form-floating mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email_per}
                    onChange={handleEmailChange}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            
            <div className="form-floating mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password_per}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    type="username"
                    name="username"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    value={username_per}
                    onChange={handleUsernameChange}
                />
                <label htmlFor="floatingPassword">Username(Display)</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
            </button>
        </form>
    );
}

export default RegisterPage;