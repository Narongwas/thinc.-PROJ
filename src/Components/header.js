import Leftheadonanypage from './leftHeader';
import React  from 'react';

function Header(){

    function onClick(){
        window.location.href = "index.html";
    }
    return (<header className="App-header">
        <Leftheadonanypage onClick={onClick}/>
        <div className="Right-header">
              <button id="Login" className="headerButton">Log In</button>
              <button id="signup" className="headerButton">Join Now</button>
        </div>
        </header>)
}


export default Header;