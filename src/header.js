import logo from './home.png'
import React  from 'react';

function Header(){

    function onClick(){
        window.location.href = "index.html";
    }
    return (<header className="App-header">
        <div className="left-Header">
              <a className="path" id="Home"><b>Name</b></a>
              <a className="path" onClick={onClick} id="image"><img src={logo} alt="toMainMenu"></img></a>
              <a className="path" id="AboutMe">เกี่ยวกับเรา</a>
          </div>
        <div className="Right-header">
              <button id="Login" className="headerButton">Log In</button>
              <button id="signup" className="headerButton">Join Now</button>
        </div>
        </header>)
}


export default Header;