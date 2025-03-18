import logo from '../Assets/home.png'
import React from 'react';
import Leftheadonanypage from './leftHeader';

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
              <button id="Login" className="headerButton" onClick={handleLoginClick}>Log In</button>
              <button id="signup" className="headerButton" onClick={handleSignupClick}>Join Now</button>
        </div>
        </header>)
}

export default Header;
