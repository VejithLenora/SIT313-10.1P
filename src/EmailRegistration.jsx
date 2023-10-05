import React, { useState } from "react";
import "./App.css";
import axios from "axios"; // Import Axios

function EmailRegistration() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/submit-email", {
        email : email,
        status: "subscribed"
      });

      if (response.status === 200) {
        console.log("Email sent successfully.");
      } else {
        console.error("Email sending failed.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email-registration-form">
      <div className="email-registration-container">
        <div className="email-registration-content">
          <p className="email-registration-text">
            SIGN UP FOR OUR DAILY INSIDER
          </p>
          <input
            type="email"
            id="email-input-id"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
}

export default EmailRegistration;


/*import React from "react";
import "./App.css";

function EmailRegistration() {
  return (
    <form method="post" className="email-registration-form">
      <div className="email-registration-container">
        <div className="email-registration-content">
          <p className="email-registration-text">SIGN UP FOR OUR DAILY INSIDER</p>
          <input type="email" id="email-input-id" name="email" className="form-control" />
          <button type="submit" className="btn btn-lg btn-primary">Subscribe</button>
        </div>
      </div>
    </form>
  );
}

export default EmailRegistration;*/



