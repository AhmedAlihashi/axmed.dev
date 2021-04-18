import React from "react";
import resumeData from "../core/resumeData";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="experienceTitle">Contact Details</h1>

      <p style={{ fontSize: 20 }}>
        <span>{resumeData.email}</span>
        <br></br>
        <span>{resumeData.address}</span>
      </p>
    </div>
  );
};

export default Contact;
