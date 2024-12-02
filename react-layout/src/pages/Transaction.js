import React, { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import '../css/Transactions.css';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const url = "https://budget-backend-yh3v.onrender.com/api/spending/";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const [successMessage, setSuccessMessage] = useState('');

    const onDelete = async (transaction) => {
        const url = `https://budget-backend-yh3v.onrender.com/api/spending/${transaction._id}`;
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (response.status === 200) {
                setSuccessMessage('Transaction deleted successfully!');
                setTransactions((prevTransactions) =>
                    prevTransactions.filter((t) => t._id !== transaction._id)
                );
            } else {
                console.error('Failed to delete transaction');
            }
        } catch (error) {
            console.error('Error deleting the transaction:', error);
        }
    };


    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div id="transaction-page">
            <h2>Transactions</h2>
            <TransactionTable
                transactions={transactions}
                setTransactions={setTransactions}
                onDelete={onDelete}
            />
            <div>
            {successMessage && <p>{successMessage}</p>} 
   
        </div>
        </div>
        
    );
};

export default Transaction;
