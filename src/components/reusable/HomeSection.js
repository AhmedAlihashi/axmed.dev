import React from "react";
// import Me from "../../images/profilepic.jpg";
import resumeData from "../../resumeData";

const HomeSection = ({
  mobile,
  flexDirection,
  bodyTextSize,
  skillTitleSize,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "space-between",
        alignItems: "flex-start",
        height: "100%",
        margin: mobile ? -10 : null,
      }}
    >
      {/* <div style={{ marginRight: 20 }}>
        <img
          style={{
            position: "relative",
            width: mobile ? "50%" : "170px",
            height: mobile ? "50%" : "170px",
            borderRadius: "20%",
            boxShadow:
              "-3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945)",
          }}
          src={Me}
          alt="Ahmed Ali"
        />
      </div> */}

      <div>
        <div>
          <h1 style={{ fontSize: 50 }}>About Me</h1>
          <p
            style={{
              fontSize: bodyTextSize,
              marginRight: bodyTextSize === 17 ? 15 : 0,
            }}
          >
            {resumeData.aboutme}
          </p>
        </div>

        <div>
          <h1 style={{ fontSize: 50 }}>Skill set</h1>

          <div>
            <div style={{ marginTop: 10 }}>
              <h2 style={{ fontSize: skillTitleSize }}>Core</h2>
              <img
                title="Git"
                alt="git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
              <img
                title="Github"
                alt="github"
                src="https://img.icons8.com/fluent/96/000000/github.png"
              />
              <img
                title="Html5"
                alt="html5"
                src="https://img.icons8.com/color/96/000000/html-5.png"
              />
              <img
                title="Css3"
                alt="css3"
                src="https://img.icons8.com/color/96/000000/css3.png"
              />
              <img
                title="Javascript"
                alt="javascript"
                src="https://img.icons8.com/color/96/000000/javascript.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Git, Github, Html, Css & JavaScript
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: skillTitleSize }}>Primary focuses</h2>
              <img
                title="React"
                alt="react"
                src="https://img.icons8.com/plasticine/100/000000/react.png"
              />
              <img
                title="React native"
                alt="react native"
                src="https://img.icons8.com/cute-clipart/100/000000/react-native.png"
              />
              <img
                title="Electron"
                alt="electron"
                style={{ height: 80, margin: 10 }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
              />
              <img
                title="Redux"
                alt="redux"
                src="https://img.icons8.com/color/96/000000/redux.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                React, React Native, Electron & redux
              </p>
            </div>

            <div style={{ marginTop: 10 }}>
              <h2 style={{ fontSize: skillTitleSize }}>
                Backend & Database tech
              </h2>

              <img
                title="Node.js"
                alt="Node JS"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
              <img
                title="MongoDB"
                alt="mongoDB"
                src="https://img.icons8.com/color/96/000000/mongodb.png"
              />
              <img
                title="Firebase"
                alt="firebase"
                src="https://img.icons8.com/color/96/000000/firebase.png"
              />
              <img
                title="Express"
                alt="express"
                style={{ height: 80, margin: 5 }}
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Node.js, MongoDB, Google Firebase, Express
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: skillTitleSize }}>
                Familiar workflow tech
              </h2>
              <img
                title="Jira"
                alt="jira"
                src="https://img.icons8.com/color/96/000000/jira.png"
              />
              <img
                title="Trello"
                alt="trello"
                src="https://img.icons8.com/color/96/000000/trello.png"
              />
              <img
                title="Source tree"
                alt="source tree"
                src="https://img.icons8.com/windows/96/000000/sourcetree.png"
              />
              <img
                title="Slack"
                alt="slack"
                src="https://img.icons8.com/officel/80/000000/slack.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Jira, Trello, Sourcetree, Slack
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: skillTitleSize }}>
                Familiar design & Prototyping software{" "}
              </h2>
              <img
                title="XD"
                alt="adobe xd"
                src="https://img.icons8.com/color/96/000000/adobe-xd.png"
              />
              <img
                title="illustrator"
                alt="adobe illustrator"
                src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"
              />
              <img
                title="invision"
                alt="invision"
                src="https://img.icons8.com/windows/96/000000/invision.png"
              />
              <p style={{ font: "inherit", fontSize: 12 }}>
                Adobe Xd, Illustrator, Invision
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
