import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import aboutIcon from "../images/aboutUs.png";
import adminIcon from "../images/admin.png";
import homeIcon from "../images/home.png";
import transactionIcon from "../images/trans.png";
import uploadIcon from "../images/upload.png";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id="main-nav">
            <div className="hamburger" onClick={toggleMenu}>
                <div className="hamburger-icon"></div>
                <div className="hamburger-icon"></div>
                <div className="hamburger-icon"></div>
            </div>

            <ul id="nav-items" className={`columns ${isMenuOpen ? 'show' : 'hidden-small'}`}>
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
    );
};

export default Nav;
