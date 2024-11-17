import axios from "axios";
import React, { useState } from "react";

const TransactionForm = () => {
  const categoryToLogo = {
    Food: "food.png",
    Health: "health.png",
    Savings: "savings.png",
    Rent: "rent.png",
    Pets: "pets.png",
    Insurance: "insurance.png",
    Kids: "kids.png",
    Debt: "debt.png",
    Car: "car.png",
    Other: "other.png",
  };

  const [transaction, setTransaction] = useState({
    logo: "default", 
    Item: "",
    Price: "",
    Account: "default",
    Date: "",
    Categorie: "default",
    Status: "default",
    Comments: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "Categorie") {
      setTransaction({
        ...transaction,
        [id]: value,
        logo: categoryToLogo[value] || "default", 
      });
    } else {
      setTransaction({
        ...transaction,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!transaction.Item || !transaction.Price || !transaction.Date) {
      setSubmissionStatus("Item, Price, and Date are required!");
      return;
    }

    const formData = new FormData();
    for (let key in transaction) {
      if (key === "Comments" && transaction[key]) {
        formData.append(key, JSON.stringify([transaction[key]]));
      } else {
        formData.append(key, transaction[key]);
      }
    }

    try {
      await axios.post("http://localhost:3002/api/spending", formData);
      setSubmissionStatus("Transaction Was Added Successfully!");
      setTransaction({
        logo: "default",
        Item: "",
        Price: "",
        Account: "default",
        Date: "",
        Categorie: "default",
        Status: "default",
        Comments: "",
      });
    } catch (error) {
      setSubmissionStatus("Error adding the transaction.");
    }
  };

  return (
    <div id="upload-bottom">
      <h2>Please Enter The Transaction Below:</h2>

      <div id="item">
        <label htmlFor="Item">Item:</label>
        <input
          type="text"
          id="Item"
          value={transaction.Item}
          onChange={handleChange}
        />
      </div>

      <div id="price">
        <label htmlFor="Price">Price:</label>
        <input
          type="number"
          id="Price"
          value={transaction.Price}
          onChange={handleChange}
        />
      </div>

      <div id="account">
        <label htmlFor="Account">Account:</label>
        <select
          id="Account"
          value={transaction.Account}
          onChange={handleChange}
        >
          <option value="default" disabled>Select Account</option>
          <option value="Checking">Checking</option>
          <option value="Credit">Credit</option>
          <option value="Savings">Savings</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div id="date">
        <label htmlFor="Date">Date:</label>
        <input
          type="datetime-local"
          id="Date"
          value={transaction.Date}
          onChange={handleChange}
        />
      </div>

      <div id="category">
        <label htmlFor="Categorie">Category:</label>
        <select
          id="Categorie"
          value={transaction.Categorie}
          onChange={handleChange}
        >
          <option value="default" disabled>Select Category</option>
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
      </div>

      <div id="status">
        <label htmlFor="Status">Status:</label>
        <select
          id="Status"
          value={transaction.Status}
          onChange={handleChange}
        >
          <option value="default" disabled>Select Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div id="comments">
        <label htmlFor="Comments">Comments:</label>
        <textarea
          id="Comments"
          value={transaction.Comments}
          onChange={handleChange}
        />
      </div>

      {transaction.logo !== "default" && (
        <div id="logo-display">
          <img
            src={`/images/${transaction.logo}`}
            alt={transaction.Categorie}
            width="100" 
          />
          <p>{transaction.Categorie} logo</p>
        </div>
      )}

      <div id="upload-btn">
        <button onClick={handleSubmit} id="upload-button">
          Upload Transaction
        </button>
      </div>

      {submissionStatus && (
        <div id="submission-status">
          {submissionStatus}
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
