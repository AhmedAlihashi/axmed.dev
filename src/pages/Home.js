import React from "react";
import resumeData from "../core/resumeData";
import {
  FaGitSquare,
  FaInvision,
  FaJira,
  FaNodeJs,
  FaReact,
  FaSlack,
  FaSourcetree,
  FaTrello,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiElectron,
  SiFirebase,
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
            <AiFillHtml5 title="Html" className="devIcon" />
            <FaGitSquare title="Git" className="devIcon" />
            <IoLogoJavascript title="JavaScript" className="devIcon" />
            <DiCss3 title="Css3" className="devIcon" />
            <FaReact title="React" className="devIcon" />
            <SiElectron title="Electron" className="devIcon" />
            <FaNodeJs title="Node Js" className="devIcon" />
            <SiRedux title="Redux" className="devIcon" />
            <SiFirebase title="Firebase" className="devIcon" />
            <DiMongodb title="MongoDB" className="devIcon" />
          </div>
        </div>

        <div>
          <h2 id="skillTitle">Familiar collaborative workflow tools</h2>
          <div className="devIconCont">
            <FaJira className="devIcon" title="Jira" />
            <FaTrello className="devIcon" title="Trello" />
            <FaSourcetree className="devIcon" title="Source tree" />
            <FaSlack className="devIcon" title="Slack" />
          </div>
        </div>
        <div>
          <h2 id="skillTitle">Familiar design & Prototyping software </h2>
          <div className="devIconCont">
            <SiAdobexd className="devIcon" title="Adobe XD" />
            <SiAdobeillustrator
              className="devIcon"
              title="Adobe Illustrator"
              style={{ borderRadius: "5px" }}
            />
            <FaInvision className="devIcon" title="Invision" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
