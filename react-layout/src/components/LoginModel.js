import React from 'react';
import '../css/model.css';
const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div id="login-modal" className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <form id="login-form">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" /><br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
