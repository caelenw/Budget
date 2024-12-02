import React, { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import '../css/Transactions.css';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        const url = "http://localhost:3003/api/spending/";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    const onDelete = async (transaction) => {
        const url = `http://localhost:3003/api/spending/${transaction._id}`;
        try {
            const response = await fetch(url, { method: 'DELETE' });
            if (response.ok) {
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
        </div>
    );
};

export default Transaction;
