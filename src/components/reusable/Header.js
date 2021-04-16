import React from "react";
import { Link } from "react-router-dom";

const Header = ({ linkSize }) => {
  return (
    <header>
      <div className="portfolioLinks">
        <Link
          to="/"
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Home
        </Link>
        <Link
          to={"/projects"}
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Projects
        </Link>
        <Link
          to="/experience"
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
          Experience
        </Link>
        <Link
          to="/contact"
          id="Links"
          style={{
            fontSize: linkSize,
          }}
        >
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
