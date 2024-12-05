import React, { useEffect, useState } from "react";
import "../css/Dialog.css";

const EditSpending = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    price: props.price,
    category: props.category,
    date: props.date,
    comment: props.comment,
  
  });
  const [result, setResult] = useState("");

  useEffect(() => {
    setInputs({
      _id: props._id,
      name: props.name,
      price: props.price,
      category: props.category,
      date: props.date,
      comment: props.comment,
    });
  }, [props]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);  
    const response = await fetch(`https://budget-backend-yh3v.onrender.com/api/spending/${props._id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Spending plan successfully updated.");
      event.target.reset();
      props.updateSpending(await response.json());  
      props.closeDialog(); 
    } else {
      setResult("Error editing your spending plan. We're sorry.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-spending-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name">Item Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={inputs.price || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={inputs.category || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <label htmlFor="date">Date:</label>
              <input
                type="datetime-local"
                id="date"
                name="date"
                value={inputs.date || ""}
                onChange={handleChange}
                required
              />
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditSpending;
