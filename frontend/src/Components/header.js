import logo from '../Assets/home.png'
import React from 'react';

function Header() {

    
    function handleLoginClick() {
        window.location.href = "http://localhost:4000/login";
    }

    
    function handleSignupClick() {
        window.location.href = "http://localhost:4000/register";
    }

    return (
        <header className="App-header">
            <div className="left-Header">
                <a className="path" id="Home"><b>Name</b></a>
                <a className="path" onClick={() => window.location.href = "index.html"} id="image"><img src={logo} alt="toMainMenu" /></a>
                <a className="path" id="AboutMe">เกี่ยวกับเรา</a>
            </div>
            <div className="Right-header">
                <button id="Login" className="headerButton" onClick={handleLoginClick}>Log In</button>
                <button id="signup" className="headerButton" onClick={handleSignupClick}>Join Now</button>
            </div>
        </header>
    )
}

export default Header;
