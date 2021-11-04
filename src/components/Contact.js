import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
<div className="col-sm-12 container contact-section">
      <div className="row">
        <h1 className="sectionHeader"> Contact Me!</h1>
      </div>
      <div className="row">

    <form onSubmit={handleSubmit}>
    <div id="formWrap">
      <div id="nameWrap">
        <input type="text" id="name" placeholder="Name" required />
      </div>
      <div id="emailWrap">
        <input type="email" id="email" placeholder="Email" required />
      </div>
      <div id="messageWrap">
        <textarea id="message" placeholder="Message" required />
      </div>
      <button type="submit">{status}</button>
      </div>
    </form>

    </div>
    </div>
  );
};

export default Contact;

