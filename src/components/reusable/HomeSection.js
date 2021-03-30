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
          <h1
            style={{
              color: "white",
              fontSize: "80px",
              textShadow:
                "0px 0px 0 rgb(242,242,242),0px 1px 0 rgb(228,228,228),0px 2px 0 rgb(215,215,215),0px 3px 0 rgb(201,201,201),0px 4px 0 rgb(188,188,188),0px 5px  0 rgb(175,175,175),0px 6px 5px rgba(0,0,0,1),0px 6px 1px rgba(0,0,0,0.5),0px 0px 5px rgba(0,0,0,.2)",
            }}
          >
            Ahmed Ali
          </h1>
        </div>
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
                className="techIcon"
                title="Git"
                alt="git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
              <img
                className="techIcon"
                title="Github"
                alt="github"
                src="https://img.icons8.com/fluent/96/000000/github.png"
              />
              <img
                className="techIcon"
                title="Html5"
                alt="html5"
                src="https://img.icons8.com/color/96/000000/html-5.png"
              />
              <img
                className="techIcon"
                title="Css3"
                alt="css3"
                src="https://img.icons8.com/color/96/000000/css3.png"
              />
              <img
                className="techIcon"
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
                className="techIcon"
                title="React"
                alt="react"
                src="https://img.icons8.com/plasticine/100/000000/react.png"
              />
              <img
                className="techIcon"
                title="React native"
                alt="react native"
                src="https://img.icons8.com/cute-clipart/100/000000/react-native.png"
              />
              <img
                className="techIcon"
                title="Electron"
                alt="electron"
                style={{ height: 80, margin: 10 }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg"
              />
              <img
                className="techIcon"
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
                className="techIcon"
                title="Node.js"
                alt="Node JS"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
              <img
                className="techIcon"
                title="MongoDB"
                alt="mongoDB"
                src="https://img.icons8.com/color/96/000000/mongodb.png"
              />
              <img
                className="techIcon"
                title="Firebase"
                alt="firebase"
                src="https://img.icons8.com/color/96/000000/firebase.png"
              />
              <img
                className="techIcon"
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
                className="techIcon"
                title="Jira"
                alt="jira"
                src="https://img.icons8.com/color/96/000000/jira.png"
              />
              <img
                className="techIcon"
                title="Trello"
                alt="trello"
                src="https://img.icons8.com/color/96/000000/trello.png"
              />
              <img
                className="techIcon"
                title="Source tree"
                alt="source tree"
                src="https://img.icons8.com/windows/96/000000/sourcetree.png"
              />
              <img
                className="techIcon"
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
                className="techIcon"
                title="XD"
                alt="adobe xd"
                src="https://img.icons8.com/color/96/000000/adobe-xd.png"
              />
              <img
                className="techIcon"
                title="illustrator"
                alt="adobe illustrator"
                src="https://img.icons8.com/color/96/000000/adobe-illustrator.png"
              />
              <img
                className="techIcon"
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
