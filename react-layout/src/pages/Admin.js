import React from 'react';
import "../css/Admin.css";
import mImg from '../images/savings-1.png';

const Admin = () => {
  return (
    <div>
      <div id="userInfo">
        <div id="name" className="section">
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
        <div id="img-admin" className="section">
          <img src={mImg} alt="Savings" />
        </div>
        <div id="admin-acct" className="section">
          <table id="admin-table" border="3">
            <thead>
              <tr>
                <td>Account #</td>
                <td>Routing #</td>
                <td>Type</td>
                <td>Bank</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9562458745125456</td>
                <td>845624532</td>
                <td>Checking</td>
                <td>Wells Fargo</td>
              </tr>
              <tr>
                <td>45151234654581347</td>
                <td>515615131</td>
                <td>Credit</td>
                <td>BB&T</td>
              </tr>
              <tr>
                <td>65411324894665421</td>
                <td>516516518</td>
                <td>Credit</td>
                <td>American Express</td>
              </tr>
              <tr>
                <td>51655642318948946</td>
                <td>588852147</td>
                <td>Checking</td>
                <td>Capital One</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
