import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is imported
import "../css/Header.css";
import aboutIcon from "../images/aboutUs.png";
import adminIcon from "../images/admin.png";
import logo from '../images/budget-within-high-resolution-logo-transparent.png';
import homeIcon from "../images/home.png";
import transactionIcon from "../images/trans.png";
import uploadIcon from "../images/upload.png";
// Use the imported image in your component
<img src={logo} alt="Budget Within Logo" />

const Header = () => {
    const handleLoginClick = () => {
        const modal = document.getElementById('login-modal');
        modal.classList.toggle('hidden'); // Toggle modal visibility
    };

    const handleCloseModal = () => {
        const modal = document.getElementById('login-modal');
        modal.classList.add('hidden'); // Hide modal
    };

    return (
        <header>
        <div class="main">
        <div id="h-ul">
                <div id="h-logout">
                    <button className="nav-user" onClick={handleLoginClick}>
                        <img src="images/login.png" alt="Login" />
                        <label>Login</label>
                    </button>
                    <div id="login-modal" className="modal hidden">
                        <div className="modal-content">
                            <span className="close-button" id="close-modal" onClick={handleCloseModal}>&times;</span>
                            <form id="login-form">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" /><br />
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" /><br />
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="h-title">
            <img src={logo} alt="Budget Within Logo" />
          
            </div>

            <nav id="main-nav">
               
                <ul id="nav-items" className="columns hidden-small">
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt="Home" />
                            <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/upload">
                            <img src={uploadIcon} alt="Upload" />
                            <span className="nav-text">Upload</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/transaction">
                            <img src={transactionIcon} alt="Transaction" />
                            <span className="nav-text">Transaction</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <img src={aboutIcon} alt="About" />
                            <span className="nav-text">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin">
                            <img src={adminIcon} alt="Admin" />
                            <span className="nav-text">Admin</span>
                        </Link>
                    </li>
                </ul>
            </nav>

            
        </div>

           
        </header>
    );
};

export default Header;
