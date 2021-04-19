import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeButton } from ".";
import AppContext from "../core/context/appContext";

const Header = () => {
  const state = useContext(AppContext);
  const { loggedIn, onLogout } = state;

  return (
    <header>
      <div className="portfolioLinks">
        <Link to="/" id="Links">
          Home
        </Link>
        <Link to={"/projects"} id="Links">
          Projects
        </Link>
        <Link to="/experience" id="Links">
          Experience
        </Link>
        <Link to="/contact" id="Links">
          Contact
        </Link>
      </div>
      <div className="socialLinks">
        {loggedIn === true ? (
          <>
            <Link className="themeButton" to="/dashboard">
              Dashboard
            </Link>
            <button onClick={() => onLogout()} className="themeButton">
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="themeButton"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        )}
        <ThemeButton />
        <a
          href="https://github.com/AhmedAlihashi"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github-square" id="Icon"></i>
        </a>
        <a
          href="https://twitter.com/axmedCodes"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter-square" id="Icon"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
