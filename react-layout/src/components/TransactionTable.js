import React from 'react';
import '../css/Transactions.css';
const TransactionTable = ({ transactions }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Account</th>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.Item}</td>
                        <td>{transaction.Price}</td>
                        <td>{transaction.Account}</td>
                        <td>{transaction.Date}</td>
                        <td>{transaction.Categorie}</td>
                        <td>{transaction.Status}</td>
                        <td>{transaction.Comments.join(', ')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
