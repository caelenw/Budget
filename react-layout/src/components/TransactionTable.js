import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/Transactions.css';
import Modal from './Modal';

const TransactionTable = ({ transactions, setTransactions, onDelete }) => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Open the modal and set the transaction to be edited
    const handleEditClick = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };

    // Close the modal
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveTransaction = (updatedTransaction) => {
        // Update the transaction in the parent state
        setTransactions((prevTransactions) =>
            prevTransactions.map((transaction) =>
                transaction._id === updatedTransaction._id
                    ? updatedTransaction
                    : transaction
            )
        );
    };
    
    return (
        <div>
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
                        <th>Actions</th>
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
                            <td>
                                <button onClick={() => handleEditClick(transaction)}>
                                    <FaEdit />
                                </button>
                                <button onClick={() => onDelete(transaction)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <Modal
                    transaction={selectedTransaction}
                    onClose={handleModalClose}
                    onSave={handleSaveTransaction}
                />
            )}
        </div>
    );
};

export default TransactionTable;