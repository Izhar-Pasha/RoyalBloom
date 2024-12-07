import React, { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    phone: "",
    Date: "",
    msg: "",
  });

  // Update state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Construct mailto link dynamically
  const handleSubmit = (e) => {
    e.preventDefault();

    const { Name, Email, phone, Date, msg } = formData;

    const subject = `Inquiry from ${Name}`;
    const body = `
      Name: ${Name}
      Email: ${Email}
      Phone: ${phone}
      Preferred Date: ${Date}
      Message: ${msg}
    `;

    const mailtoLink = `mailto:mdizharpasha07@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Reset the form fields
    setFormData({
      Name: "",
      Email: "",
      phone: "",
      Date: "",
      msg: "",
    });
  };

  return (
    <div id="contact">
      <div id="container">
        <h1>LET'S PLAN YOUR DREAM EVENT TOGETHER!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Enter Your Full Name"
            required
            value={formData.Name}
            onChange={handleChange}
          />

          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter Your Email"
            required
            value={formData.Email}
            onChange={handleChange}
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="date"
            name="Date"
            id="Date"
            value={formData.Date}
            onChange={handleChange}
          />

          <textarea
            name="msg"
            id="msg"
            placeholder="Enter Your Message"
            value={formData.msg}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
