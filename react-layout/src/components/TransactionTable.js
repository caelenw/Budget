import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../css/Transactions.css';
import Modal from './Modal';
const TransactionTable = ({ transactions, setTransactions, onDelete }) => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log('Transactions:', transactions); 

    
    const handleEditClick = (transaction) => {
        setSelectedTransaction(transaction);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveTransaction = (updatedTransaction) => {
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
                            <td>{transaction.item || 'N/A'}</td>
                            <td>{transaction.Price || 'N/A'}</td>
                            <td>{transaction.Account || 'N/A'}</td>
                            <td>{transaction.Date || 'N/A'}</td>
                            <td>{transaction.Categorie || 'N/A'}</td>
                            <td>{transaction.Status || 'N/A'}</td>
                            <td>{transaction.Comment || 'N/A'}</td>

                            <td>
                                <button className='modal-action' id='saves' onClick={() => handleEditClick(transaction)}>
                                    <FaEdit />
                                </button>
                                <button id='exits' className='modal-action' onClick={() => onDelete(transaction)}>
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
