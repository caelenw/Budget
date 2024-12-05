import React, { useState } from "react";
import "../css/Dialog.css";

const EditSpending = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    price: props.price,
    category: props.category,
    date: props.date,
    prev_img: props.main_image,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
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
    const response = await fetch(`http://localhost:3003/api/spending/${props._id}`, {
      method: "PUT",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Transaction has been updated successfully");
      event.target.reset();
      props.updateSpending(await response.json());
      props.closeDialog();
    } else {
      setResult("Transaction could not be updated, please try again");
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
            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `http://localhost:3003/api/spending/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </p>
            </section>

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