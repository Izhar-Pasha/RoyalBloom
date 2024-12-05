import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div id="container">
        <h1>LET'S PLAN YOUR DREAM WEDDING TOGETHER!</h1>
        <form action="">
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder="Enter Your Full Name"
            required
          />

          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required
            pattern="[0-9]{10}"
          />

          <input type="date" name="Date" id="Date" placeholder="hello" />

          <textarea
            name="msg"
            id="msg"
            placeholder="Enter Your Message"
          ></textarea>

          <button>
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
