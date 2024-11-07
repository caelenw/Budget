import React, { useState } from "react";
import "../css/contactForm.css";
const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (json) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      return response;
    } catch (error) {
      console.log(error);
      setStatusMessage("Sorry, your email couldn't be sent");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    const json = JSON.stringify(formObject);

    setStatusMessage("Sending...");

    const response = await sendEmail(json);

    if (response && response.status === 200) {
      setStatusMessage("Email successfully sent");
    } else {
      setStatusMessage("Sorry, your email wasn't sent");
    }
  };

  return (
    <section className="info-section">
      <div className="contactForm">
      <form id="contact-form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
          <input
            type="hidden"
            name="access_key"
            value="0574eceb-b718-4128-9789-6cd747c843d6"
          />

          <p>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="first and last"
              name="name"
              required
            />
          </p>

          <p>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required />
          </p>

          <p>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </p>

          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input
            type="hidden"
            name="subject"
            value="Contact from BudgetWithin Website"
          />
          <input type="hidden" name="from_name" value="My Website" />

          <p>
            <button type="submit">Submit Form</button>
          </p>
        </form>

        <p id="result">{statusMessage}</p>
         </div>
    </section>
  );
};

export default ContactForm;
