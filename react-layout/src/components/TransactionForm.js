import axios from "axios";
import React, { useState } from "react";

const TransactionForm = () => {
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

  const [transaction, setTransaction] = useState({
    logo: "default",
    item: "", 
    Price: "",
    Account: "default",
    Date: "",
    Categorie: "default",
    Status: "default",
    Comment: "", 
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

  const formattedTransaction = {
    ...transaction,
    Comment: Array.isArray(transaction.Comment)
      ? transaction.Comment.join(", ") 
      : transaction.Comment,
  };

  try {
    await axios.post("https://budget-backend-yh3v.onrender.com/api/spending/", formattedTransaction);
    setSubmissionStatus("Transaction Was Added Successfully!");
    setTransaction({
      logo: "default",
      item: "",
      Price: "",
      Account: "default",
      Date: "",
      Categorie: "default",
      Status: "default",
      Comment: "",
    });
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    setSubmissionStatus("Error adding the transaction.");
  }
};

  return (
    <form onSubmit={handleSubmit} id="upload-bottom">
      <h2>Please Enter The Transaction Below:</h2>
      <div id="item">
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item" 
          value={transaction.item}
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
        <select id="Account" value={transaction.Account} onChange={handleChange}>
          <option value="default" disabled>
            Select Account
          </option>
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
      </div>
      <div id="status">
        <label htmlFor="Status">Status:</label>
        <select id="Status" value={transaction.Status} onChange={handleChange}>
          <option value="default" disabled>
            Select Status
          </option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div id="comments">
        <label htmlFor="Comment">Comment:</label>
        <textarea
          id="Comment" 
          value={transaction.Comment}
          onChange={handleChange}
        />
      </div>
      <button id="upload" type="submit">Upload </button>
      {submissionStatus && <p id="uploads">{submissionStatus}</p>}
    </form>
  );
};
export default TransactionForm;
