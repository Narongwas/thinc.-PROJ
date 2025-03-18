import './Register.css'
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
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
        <form className='form-signup' onSubmit={handleSubmit}>
            <p class="wec">Welcome !</p>
            <h1 className="h3mb-3fw-normal">Sign up to</h1>
            <p>Lorem Ipsum is simply </p>
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
                <label htmlFor="floatingPassword">Username(Display)</label>
                <input
                    type="username"
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
                <label htmlFor="floatingPassword">Confirm Password</label>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Password"
                    value={confirm_password_per}
                    onChange={handleConfirmPasswordChange}
                />
            </div>


            <button className="w-100btnbtn-lgbtn-primary" type="submit">
                Register
            </button>
            <p class="mt-5mb-3text-muted">Already have an Account? 
                <a href="/user/register">
                <Link to={'/Signin'}>
                    <b>Sign in</b>
                </Link>
                </a>
            </p>
        </form>
    );
}

export default RegisterPage;