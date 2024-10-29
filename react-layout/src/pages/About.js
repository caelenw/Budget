import React from 'react';
import "../css/About.css";

const About = () => {
    return (
        <section className="home-bb">
            <h2 id="dark">View Transactions by Filter</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            <select id="t-dropdown-menu">
                                <option value="default" disabled selected>Select Category of Transaction</option>
                                <option value="Food">Food</option>
                                <option value="Health">Health</option>
                                <option value="Savings">Savings</option>
                                <option value="Rent">Rent</option>
                                <option value="Pets">Pets</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Kids">Kids</option>
                                <option value="Debt">Debt</option>
                                <option value="Rent/House">Rent/House</option>
                                <option value="Car">Car</option>
                                <option value="Other">Other</option>
                            </select> 
                        </th>
                        <th>
                            <select id="t-dropdown-menu">
                                <option value="Status" disabled selected>Account Used In Transaction</option>
                                <option value="Checking">Checking</option>    
                                <option value="Credit">Credit</option>  
                                <option value="Savings">Savings</option>  
                                <option value="Other">Other</option>  
                            </select>
                        </th>
                        <th>
                            <select id="t-dropdown-menu">
                                <option value="Status" disabled selected>Status of Transaction</option>
                                <option value="Paid">Paid</option>    
                                <option value="Pending">Pending</option>  
                                <option value="Completed">Completed</option>  
                            </select>
                        </th>
                        <th>
                            <select id="t-dropdown-menu">
                                <option value="Price" disabled selected>Price of Transaction</option>
                                <option value="0-100">$0.00 - $100.00</option>    
                                <option value="100-250">$101.00 - $250.00</option>  
                                <option value="250-500">$251.00 - $500.00</option>  
                                <option value="500+">$501.00 +</option>  
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Transaction data can be dynamically generated here */}
                    <tr>
                        <td>Rent</td>
                        <td>Checking</td>
                        <td>Completed</td>
                        <td>-2,300</td>
                    </tr>
                    <tr>
                        <td>Light bill</td>
                        <td>Checking</td>
                        <td>Completed</td>
                        <td>-$89.29</td>
                    </tr>
                    <tr>
                        <td>Power</td>
                        <td>Credit Card</td>
                        <td>Unpaid</td>
                        <td>-$253.33</td>
                    </tr>
                    <tr>
                        <td>Gas</td>
                        <td>Credit Card</td>
                        <td>Unpaid</td>
                        <td>-$62.84</td>
                    </tr>
                    <tr>
                        <td>Groceries</td>
                        <td>Visa</td>
                        <td>Completed</td>
                        <td>-$165.44</td>
                    </tr>
                    <tr>
                        <td>Movies</td>
                        <td>Master Card</td>
                        <td>Unpaid</td>
                        <td>-$32.95</td>
                    </tr>
                    <tr>
                        <td>Investment</td>
                        <td>Savings</td>
                        <td>Completed</td>
                        <td>-$231.24</td>
                    </tr>
                    <tr>
                        <td>Pay-Stub</td>
                        <td>Checking Account</td>
                        <td>Unpaid</td>
                        <td>+$2,359.22</td>
                    </tr>
                    <tr>
                        <td>Venmo</td>
                        <td>Checking Account</td>
                        <td>Completed</td>
                        <td>+$88.50</td>
                    </tr>
                    <tr>
                        <td>Netflix/Hulu</td>
                        <td>Savings</td>
                        <td>Completed</td>
                        <td>-$10.99</td>
                    </tr>
                    <tr>
                        <td>Shopping</td>
                        <td>Checking Account</td>
                        <td>Paid</td>
                        <td>-$438.23</td>
                    </tr>
                    <tr>
                        <td>Target</td>
                        <td>Checking Account</td>
                        <td>Unpaid</td>
                        <td>-$103.22</td>
                    </tr>
                    <tr>
                        <td>Lulu</td>
                        <td>Credit Card</td>
                        <td>Paid</td>
                        <td>-$10.99</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default About;
