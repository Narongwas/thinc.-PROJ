import './signin.css';
import React, { useState } from 'react';
import api from '../Assets/axiosConfig.js';
import { Link, useNavigate } from "react-router-dom";

function Signinpage() {
    return (
        <div className="signinpage">
            <Box />
        </div>
    )
}

function Box() {
    return(
            <form class="form-signin" action="/user/login" method="POST">
                <p class="wec">Welcome !</p>
                <h1 class="h3mb-3fw-normal">Sign in to</h1>
                <p>Lorem Ipsum is simply </p>

                <div class="form-floating">
                <p>Email</p>
                <input type="email" name="email" title="Email address"  id="floatingInput"  placeholder="Enter your email"/>
                </div>
                <div class="form-floating">
                <p>Password</p>
                <input type="password" name="password"  id="floatingPassword" placeholder="Enter your Password"/>
                </div>

                <div class="checkboxmb-3">
                <div><input type="checkbox" value="remember-me"/> Remember me</div>
                <a>Forgot Password ?</a>
                </div>
                <button class="w-100btnbtn-lgbtn-primary" type="submit">Log in</button>
                <p class="mt-5mb-3text-muted">Don't have an account? 
                    <a href="/user/register">
                        <Link to={'/Register'}><b>Register</b></Link>
                    </a>
                </p>
            </form>
    )
}

export default Signinpage;