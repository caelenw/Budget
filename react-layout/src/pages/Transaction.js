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
  

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div id="transaction-page">
            <h2>Transactions</h2>
            <TransactionTable transactions={transactions} />
        </div>
    );
};

export default Transaction;
