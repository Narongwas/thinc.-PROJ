import React, { useState } from 'react';
import Leftheadonanypage from './leftHeader';
import icon from '../Assets/icon.png';
import './header_if_sign.css';

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    function toggleDropdown() {
        setDropdownVisible(!dropdownVisible);
    }

    function handleProfileClick() {
        // Handle profile click
        console.log('Profile clicked');
        window.location.href = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/profile`
    }

    function handleLogoutClick() {
        // Handle logout click
        console.log('Logout clicked');
        window.location.href = "http://localhost:4000/logout"
    }

    return (
        <header className="App-header">
            <Leftheadonanypage />
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