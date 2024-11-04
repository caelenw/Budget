import React, { useState } from 'react';
import "../css/Header.css";
import LoginModal from './LoginModel';
import LogoAndLogout from './logo';
import Nav from './Nav';

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false); 

    const handleLoginClick = () => {
        setModalOpen(true); 
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    
    return (
        <header>
            <div className="main">
                <LogoAndLogout onLoginClick={handleLoginClick} />
                <Nav />
                <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </header>
    );
};

export default Header;
