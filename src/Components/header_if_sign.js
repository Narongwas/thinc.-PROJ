import logo from '../Assets/home.png'
import React  from 'react';
import icon from '../Assets/icon.png';
import Leftheadonanypage  from './leftHeader';

function Header(){

    function onClick(){
        window.location.href = "index.html";
    }
    return (<header className="App-header">
        <Leftheadonanypage onClick={onClick}/>
        <div className="Right-header">
            <img src={icon} alt="profile"></img><br />
        </div>
        </header>)
}


export default Header;