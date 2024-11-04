import React from 'react';
import '../css/Admin.css'; // Ensure to include the .css extension
const UserInfo = () => {
    return (
        <div id="userInfo" className="section">
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" /><br /><br />

            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname" /><br /><br />

            <label htmlFor="pwd">Password:</label>
            <input type="password" id="pwd" name="pwd" /><br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" /><br /><br />

            <label htmlFor="phone">Phone number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </div>
    );
};

export default UserInfo;
