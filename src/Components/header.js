import logo from '../Assets/home.png'
import React from 'react';

function Header() {
    return (<header className="App-header">
        <Leftheadonanypage />
        <div className="Right-header">
              <button id="Login" className="headerButton" >Log In</button>
              <button id="signup" className="headerButton">Join Now</button>
        </div>
        </header>)
}

export default Header;
