import logo from '../Assets/home.png'
import React  from 'react';
import icon from '../Assets/icon.png';
import Leftheadonanypage  from './leftHeader';
import { Link } from 'react-router-dom';

function Header(){

    return (<header className="App-header">
        <Leftheadonanypage/>
        <div className="Right-header">
            <Link to = "/Profile">
            <img src={icon} alt="profile"></img><br />
            </Link>
        </div>
        </header>)
}


export default Header;