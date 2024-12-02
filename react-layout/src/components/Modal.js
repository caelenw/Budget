import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/Modal.css';

const Modal = ({ transaction, onClose, onSave, setTransactions }) => {  
  const [editedTransaction, setEditedTransaction] = useState(transaction);
  const [statusMessage, setStatusMessage] = useState(''); 

  
  useEffect(() => {
    setEditedTransaction(transaction);
    setStatusMessage(''); 
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommentsChange = (e) => {
    const value = e.target.value.split(',').map((comment) => comment.trim());
    setEditedTransaction((prev) => ({
      ...prev,
      Comments: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://budget-backend-yh3v.onrender.com/api/spending/${editedTransaction._id}`,
        editedTransaction
      );

      if (response.status === 200) {
        setStatusMessage('Transaction updated successfully!');
        onSave(response.data); 
        setTimeout(onClose, 1500); 
      } else {
        setStatusMessage('Unexpected server response. Please try again.');
      }
    } catch (error) {
      console.error('Error updating transaction:', error);
      setStatusMessage('Error updating transaction. Please try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          ×
        </span>
        <h2>Edit Transaction</h2>

        <label>
          Item:
          <input
            type="text"
            name="Item"
            value={editedTransaction.Item}
            onChange={handleChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="Price"
            value={editedTransaction.Price}
            onChange={handleChange}
          />
        </label>

        <label>
          Account:
          <input
            type="text"
            name="Account"
            value={editedTransaction.Account}
            onChange={handleChange}
          />
        </label>

        <label>
          Date:
          <input
            type="datetime-local"
            name="Date"
            value={editedTransaction.Date}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="Categorie"
            value={editedTransaction.Categorie}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="Status"
            value={editedTransaction.Status}
            onChange={handleChange}
          />
        </label>
        <label>
          Comments:
          <input
            type="text"
            name="Comments"
            value={editedTransaction.Comments.join(', ')}
            onChange={handleCommentsChange}
          />
        </label>
        <div className="modal-actions">
          <button onClick={handleSave}>Save Update</button>
          <button onClick={onClose}>Cancel</button>
          
        </div>
        {statusMessage && (
          <div
            className="status-message"
          >
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
