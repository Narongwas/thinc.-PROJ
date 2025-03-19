import React from 'react';
import logo from '../Assets/home.png';
import { Link } from 'react-router-dom';
function Leftheadonanypage(){
    return (
        <div className="left-Header">
            <a className="path" id="Home"><b>Name</b></a>
            <Link to="/">
            <a className="path" id="image"><img src={logo} alt="toMainMenu"></img></a>
            </Link>
            <a className="path" id="AboutMe">เกี่ยวกับเรา</a>
        </div>
    )
}

export default Leftheadonanypage;