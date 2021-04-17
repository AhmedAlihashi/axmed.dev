import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        <a
          href="https://github.com/AhmedAlihashi"
          target="_blank"
          rel="noreferrer"
          id="githubLink"
        >
          <i class="fab fa-github-square" id="Icon"></i>
        </a>
        <a
          href="https://twitter.com/axmedCodes"
          target="_blank"
          rel="noreferrer"
          id="githubLink"
        >
          <i class="fab fa-twitter-square" id="Icon"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
