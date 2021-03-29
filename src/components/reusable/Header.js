import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import resumeData from "../../resumeData";
import Me from "../../images/pic2.jpg";
import { Media } from "../../core/media";

const Header = ({ linkSize }) => {
  return (
    <>
      <Media at="mobile">
        <header
          style={{
            display: "flex",
            flexDirection: "row",
            height: "95%",
            justifyContent: "space-between",
            margin: 10,
            borderRadius: 15,
            border: "5px solid black",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#325A5D",
            width: "95vw",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "120px",
                height: "140px",
                borderRadius: 15,
                border: "5px solid black",
              }}
              src={Me}
              alt="Ahmed Ali"
            />

            <h1 id="Name" style={{ marginTop: 0, fontSize: 20 }}>
              {resumeData.name}
            </h1>
          </div> */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              color: "black",
              flexWrap: "wrap",
            }}
          >
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
              to={`/projects/${resumeData.portfolio[0].name}`}
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
          <div>
            <a
              href="https://github.com/AhmedAlihashi"
              target="_blank"
              rel="noreferrer"
              id="githubLink"
            >
              <Icon
                name="github square"
                size="big"
                style={{ color: "#FFECD1" }}

                //
              />
            </a>
          </div>
        </header>
      </Media>
      <Media greaterThan="mobile">
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            height: "94vh",
            justifyContent: "space-between",
            margin: 10,
            borderRadius: 15,
            border: "5px solid black",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#325A5D",
            // borderRadius: 13,
          }}
        >
          {/* <img
            style={{
              position: "relative",
              width: "120px",
              height: "140px",
              borderRadius: 15,
              border: "5px solid black",
            }}
            src={Me}
            alt="Ahmed Ali"
          />

          <div>
            <h1 id="Name">{resumeData.name}</h1>
          </div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "black",
            }}
          >
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
              to={`/projects/${resumeData.portfolio[0].name}`}
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
          <div>
            <a
              href="https://github.com/AhmedAlihashi"
              target="_blank"
              rel="noreferrer"
              id="githubLink"
            >
              <Icon
                name="github square"
                size="big"
                style={{ color: "#FFECD1" }}
                //
              />
            </a>
          </div>
        </header>
      </Media>
    </>
  );
};

export default Header;
