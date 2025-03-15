import React from 'react';
import logo from '../Assets/home.png';
function Leftheadonanypage({onClick}){
    return (
        <div className="left-Header">
            <a className="path" id="Home" onClick={onClick}><b>Name</b></a>
            <a className="path" id="image"><img src={logo} alt="toMainMenu"></img></a>
            <a className="path" id="AboutMe">เกี่ยวกับเรา</a>
        </div>
    )
}

export default Leftheadonanypage;