import React from "react";
import resumeData from "../resumeData";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Details</h2>
      <p style={{ fontSize: 20 }}>
        <span>{resumeData.email}</span>
        <br></br>
        <span>{resumeData.address}</span>
      </p>
    </div>
  );
};

export default Contact;
