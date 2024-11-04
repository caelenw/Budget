import React from 'react';
import TransactionTable from '../components/TransactionTable';
import "../css/Transactions.css";

const Transactions = () => {
    const transactionData = [
        { category: "Rent", account: "Checking", status: "Completed", price: "-2,300" },
        { category: "Light bill", account: "Checking", status: "Completed", price: "-$89.29" },
        { category: "Power", account: "Credit Card", status: "Unpaid", price: "-$253.33" },
        { category: "Gas", account: "Credit Card", status: "Unpaid", price: "-$62.84" },
        { category: "Groceries", account: "Visa", status: "Completed", price: "-$165.44" },
        { category: "Movies", account: "Master Card", status: "Unpaid", price: "-$32.95" },
        { category: "Investment", account: "Savings", status: "Completed", price: "-$231.24" },
        { category: "Pay-Stub", account: "Checking Account", status: "Unpaid", price: "+$2,359.22" },
        { category: "Venmo", account: "Checking Account", status: "Completed", price: "+$88.50" },
        { category: "Netflix/Hulu", account: "Savings", status: "Completed", price: "-$10.99" },
        { category: "Shopping", account: "Checking Account", status: "Paid", price: "-$438.23" },
        { category: "Target", account: "Checking Account", status: "Unpaid", price: "-$103.22" },
        { category: "Lulu", account: "Credit Card", status: "Paid", price: "-$10.99" },
    ];

    return (
        <section className="home-bb" id="hbb">
            <h2 id="dark">View Transactions by Filter</h2>
            <h3 id="veiw">View Transactions by Filter</h3>
            <TransactionTable transactions={transactionData} />
        </section>
    );
};

export default Transactions;
