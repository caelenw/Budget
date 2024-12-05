import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import '../css/Modal.css';

const Modal = ({ transaction, onClose, onSave }) => {
  const [editSpending, setEditedTransaction] = useState(transaction || {});
  const [statusMessage, setStatusMessage] = useState('');

  const categoryToLogo = {
    Food: "food",
    Health: "health",
    Savings: "savings",
    Rent: "rent",
    Pets: "pets",
    Insurance: "insurance",
    Kids: "kids",
    Debt: "debt",
    Car: "car",
    Other: "other",
  };

  useEffect(() => {
    setEditedTransaction(transaction || {});
    setStatusMessage('');
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Categorie') {
      setEditedTransaction((prev) => ({
        ...prev,
        [name]: value,
        logo: categoryToLogo[value] || 'default',
      }));
    } else {
      setEditedTransaction((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCommentsChange = (e) => {
    const value = e.target.value.split(',').map((comment) => comment.trim());
    setEditedTransaction((prev) => ({
      ...prev,
      Comment: value, 
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://budget-backend-yh3v.onrender.com/api/spending/${editSpending._id}`,
        editSpending
      );

      if (response.status === 200) {
        setStatusMessage('Transaction updated successfully!');
        onSave(response.data);
        setTimeout(onClose, 1000);
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
            name="item"
            value={editSpending.item || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="Price"
            value={editSpending.Price || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Account:
          <select
            name="Account"
            value={editSpending.Account || 'default'}
            onChange={handleChange}
          >
            <option value="default" disabled>
              Select Account
            </option>
            <option value="Checking">Checking</option>
            <option value="Credit">Credit</option>
            <option value="Savings">Savings</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date:
          <input
            type="datetime-local"
            name="Date"
            value={editSpending.Date || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <select
            name="Categorie"
            value={editSpending.Categorie || 'default'}
            onChange={handleChange}
          >
            <option value="default" disabled>
              Select Category
            </option>
            <option value="Food">Food</option>
            <option value="Health">Health</option>
            <option value="Savings">Savings</option>
            <option value="Rent">Rent</option>
            <option value="Pets">Pets</option>
            <option value="Insurance">Insurance</option>
            <option value="Kids">Kids</option>
            <option value="Debt">Debt</option>
            <option value="Car">Car</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Status:
          <select
            name="Status"
            value={editSpending.Status || 'default'}
            onChange={handleChange}
          >
            <option value="default" disabled>
              Select Status
            </option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>
          Comments:
          <input
            type="text"
            name="Comment"
            value={editSpending.Comment || ''}
            onChange={handleCommentsChange}
          />
        </label>
        <div className="modal-actions">
          <button id='save' onClick={handleSave}><FaRegSave />
          </button>
          <button id='exit' onClick={onClose}><MdOutlineCancel />
          </button>
        </div>
        {statusMessage && (
          <div className="status-message">
            {statusMessage}
          </div>
        )}
      </div>
    </div>
  );
};
export default Modal;
