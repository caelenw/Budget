import React from 'react';
import "../css/Upload.css";
const Upload = () => {
    return (
        <div id="upload-bottom">
            <h2>Please Enter The Transaction Below:</h2>
            <div id="cat">
                <select id="categories">
                    <option value="default" disabled selected>Select Category of Transaction</option>
                    <option value="Food">Food</option>
                    <option value="Health">Health</option>
                    <option value="Savings">Savings</option>
                    <option value="Rent">Rent</option>
                    <option value="Pets">Pets</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Kids">Kids</option>
                    <option value="Debt">Debt</option>
                    <option value="Rent/House">Rent/house</option>
                    <option value="Savings">Savings</option>
                    <option value="Car">Car</option>
                    <option value="Other">Other</option>
                </select> 
            </div>
            <div id="typeOfTrans">
                <select id="deposit">
                    <option value="default" disabled selected>Type of Transaction</option>
                    <option value="Deposit">Deposit</option>    
                    <option value="Withdrawal">Withdrawal</option>    
                </select>
            </div>
            <div id="status">
                <select id="statusP">
                    <option value="Status" disabled selected>Status of Transaction</option>
                    <option value="Paid">Paid</option>    
                    <option value="Pending">Pending</option>  
                    <option value="Completed">Completed</option>  
                </select>
            </div> 
            <div id="account">
                <select id="acct">
                    <option value="Status" disabled selected>Account Used In Transaction</option>
                    <option value="Checking">Checking</option>    
                    <option value="Credit">Credit</option>  
                    <option value="Savings">Savings</option>  
                    <option value="Other">Other</option>  
                </select>
            </div>     
            <div id ="date">
                <label htmlFor="transDate">Transaction Date:</label>
                <input type="datetime-local" id="transDate" />
            </div>
            <div id="price">
                <label htmlFor="price">Price of Transaction:</label>
                <input type="number" id="price" />
            </div>
            <div id="comments">
                <label htmlFor="comment-txt">Comments:</label>
                <textarea id="comment-txt"></textarea>
            </div>
            <div id="receipt">
                <label htmlFor="receipts">Receipt:</label>
                <input type="file" id="receipts" />
            </div>
            <div id="upload-btn">
                <button id="upload-button">Upload Transaction</button>
            </div>
        </div>
    );
};

export default Upload;
