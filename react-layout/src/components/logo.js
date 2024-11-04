import React from 'react';
import '../css/login.css';
import logo from '../images/budget-within-high-resolution-logo-transparent.png';
import login from '../images/images1/login.png';
const LogoAndLogout = ({ onLoginClick }) => {
    return (
        <div className="logo-and-logout">
            <div id="h-ul">
                <div id="h-logout">
                    <button className="nav-user" onClick={onLoginClick}>
                    <img src={login} alt='logo' />
                    <label>Login</label>
                    </button>
                </div>
            </div>
            <div id="h-title">
                <img src={logo} alt="Budget Within Logo" />
            </div>
        </div>
    );
};

export default LogoAndLogout;

