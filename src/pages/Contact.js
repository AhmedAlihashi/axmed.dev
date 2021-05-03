import React, { useState } from "react";
import { addDashboardEntry } from "../core/api/dashboard";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addDashboardEntry(
      contactForm.name,
      contactForm.email,
      contactForm.message
    ).then(() =>
      setContactForm((prevState) => {
        return {
          ...prevState,
          name: "",
          email: "",
          message: "",
        };
      })
    );
  };


  return (
    <div className="contact">
      <h1 className="experienceTitle">Contact Details</h1>

        <form action="submit" className="contactForm">
          <div className='nameEmail' >
            <label>
              Name
              <input
                type="text"
                id="name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm((prevState) => {
                    return {
                      ...prevState,
                      name: e.target.value,
                    };
                  })
                }
              />
            </label>
            <label>
              Email
              <input
                type="text"
                id="email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm((prevState) => {
                    return {
                      ...prevState,
                      email: e.target.value,
                    };
                  })
                }
              />
            </label>
          </div>

            <textarea
              type="text"
              placeholder="Message"
              id="message"
              value={contactForm.message}
              onChange={(e) =>
                setContactForm((prevState) => {
                  return {
                    ...prevState,
                    message: e.target.value,
                  };
                })
              }
            />

          <button type="submit" className="inputButton" onClick={handleSubmit}>
            Submit
          </button>
        </form>
    </div>
  );
};

export default Contact;
