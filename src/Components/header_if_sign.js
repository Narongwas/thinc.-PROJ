import React, { useState } from 'react';
import Leftheadonanypage from './leftHeader';
import logo from '../Assets/home.png';
import icon from '../Assets/icon.png';
import './header_if_sign.css';

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    function onClick() {
        window.location.href = "index.html";
    }

    function toggleDropdown() {
        setDropdownVisible(!dropdownVisible);
    }

    function handleProfileClick() {
        // Handle profile click
        console.log('Profile clicked');
    }

    function handleLogoutClick() {
        // Handle logout click
        console.log('Logout clicked');
        window.location.href = "http://localhost:4000/logout"
    }

    return (
        <header className="App-header">
            <Leftheadonanypage onClick={onClick} />
            <div className="Right-header">
                <img src={icon} alt="profile" onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
                {dropdownVisible && (
                    <div className="dropdown-menu">
                        <div onClick={handleProfileClick}>Profile</div>
                        <div onClick={handleLogoutClick}>Logout</div>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;