import React, { useEffect, useState } from "react";

const ThemeButton = () => {
  const [darkMode, setdarkMode] = useState(
    JSON.parse(localStorage.getItem("DARK_MODE"))
  );
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("DARK_MODE")) === true) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    setdarkMode(!darkMode);

    localStorage.setItem("DARK_MODE", !darkMode);
  };

  return (
    <button onClick={() => toggleTheme()} className="themeButton">
      {darkMode ? (
        <i className="fas fa-cloud-moon"></i>
      ) : (
        <i className="fas fa-cloud-sun"></i>
      )}
    </button>
  );
};

export default ThemeButton;
