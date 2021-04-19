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

  // useEffect(() => {
  //   if (loggedIn === true) {
  //     history.push("/dashboard");
  //   }
  // }, [history, loggedIn]);

  return (
    <div className="contact">
      <h1 className="experienceTitle">Contact Details</h1>

      <div>
        <form action="submit" className="contactForm">
          <div>
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

          <div>
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
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
