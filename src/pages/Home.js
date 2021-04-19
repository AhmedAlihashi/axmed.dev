import React from "react";
import resumeData from "../core/resumeData";
import {
  FaGitSquare,
  FaInvision,
  FaJira,
  FaNodeJs,
  FaReact,
  FaSass,
  FaSlack,
  FaSourcetree,
  FaTrello,
  FaUniversalAccess,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiDiscord,
  SiElectron,
  SiFirebase,
  SiJquery,
  SiRedux,
} from "react-icons/si";

const Home = () => (
  <div className="homeSection">
    <div>
      <h1 className="nameTitle">Ahmed Ali</h1>
    </div>
    <div>
      <h1
        style={{
          fontSize: 50,
        }}
      >
        About Me
      </h1>
      <p id="bodyText">{resumeData.aboutme}</p>
    </div>

    <div>
      <h1
        style={{
          fontSize: 50,
        }}
      >
        Skill set
      </h1>

      <div>
        <div style={{ marginTop: 10 }}>
          <h2 id="skillTitle">Core</h2>
          <div className="devIconCont">
            <FaGitSquare title="Git" className="devIcon" alt="Git" />
            <AiFillHtml5 title="Html" className="devIcon" alt="Html" />
            <DiCss3 title="Css3" className="devIcon" alt="Css3" />
            <FaSass title="Sass" className="devIcon" alt="Sass" />
            <IoLogoJavascript
              title="JavaScript"
              className="devIcon"
              alt="JavaScript"
            />
            <SiJquery title="jQuery" className="devIcon" alt="jQuery" />
            <FaReact title="React" className="devIcon" alt="React" />
            <SiElectron title="Electron" className="devIcon" alt="Electron" />
            <FaNodeJs title="Node Js" className="devIcon" alt="Node Js" />
            <SiRedux title="Redux" className="devIcon" alt="Redux" />
            <SiFirebase title="Firebase" className="devIcon" alt="Firebase" />
            <DiMongodb title="MongoDB" className="devIcon" alt="MongoDB" />
            <FaUniversalAccess
              title="Accessability"
              className="devIcon"
              alt="Accessability"
            />
          </div>
        </div>

        <div>
          <h2 id="skillTitle">Familiar collaborative workflow tools</h2>
          <div className="devIconCont">
            <FaJira className="devIcon" title="Jira" alt="Jira" />
            <FaTrello className="devIcon" title="Trello" alt="Trello" />
            <FaSourcetree
              className="devIcon"
              title="Source tree"
              alt="Source Tree"
            />
            <FaSlack className="devIcon" title="Slack" alt="Slack" />
            <SiDiscord className="devIcon" title="Discord" alt="Discord" />
          </div>
        </div>
        <div>
          <h2 id="skillTitle">Familiar design & Prototyping software </h2>
          <div className="devIconCont">
            <SiAdobexd className="devIcon" title="Adobe XD" alt="Adobe XD" />
            <SiAdobeillustrator
              className="devIcon"
              title="Adobe Illustrator"
              alt="Adobe Illustrator"
              style={{ borderRadius: "5px" }}
            />
            <FaInvision className="devIcon" title="Invision" alt="Invision" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
