import logo from '../Assets/home.png'
import React from 'react';
import Leftheadonanypage from './leftHeader';
import { Link } from 'react-router-dom';

function Header() {

    function handleLoginClick() {
        window.location.href = "http://localhost:4000/login";
    }

    
    function handleSignupClick() {
        window.location.href = "http://localhost:4000/register";
    }

    return (<header className="App-header">
        <Leftheadonanypage />
        <div className="Right-header">
              <Link to={'/Signin'}>
              <button id="Login" className="headerButton">Log In</button>
              </Link>
              <Link to={'/Register'}>
              <button id="signup" className="headerButton" >Join Now</button>
              </Link>
        </div>
        </header>)
}

export default Header;
