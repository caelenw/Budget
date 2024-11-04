import React from 'react';

const TransactionTable = ({ transactions }) => {
    return (
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
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.category}</td>
                        <td>{transaction.account}</td>
                        <td>{transaction.status}</td>
                        <td>{transaction.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
