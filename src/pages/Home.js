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
            <div className="devIconitem">
              <FaGitSquare className="devIcon" alt="Git" />
              <h4 className="hiddenLabel">Git</h4>
            </div>

            <div className="devIconitem">
              <AiFillHtml5 className="devIcon" alt="Html" />
              <h4 className="hiddenLabel">Html</h4>
            </div>

            <div className="devIconitem">
              <DiCss3 className="devIcon" alt="Css3" />
              <h4 className="hiddenLabel">Css3</h4>
            </div>

            <div className="devIconitem">
              <FaSass className="devIcon" alt="Sass" />
              <h4 className="hiddenLabel">Sass</h4>
            </div>

            <div className="devIconitem">
              <IoLogoJavascript className="devIcon" alt="JavaScript" />
              <h4 className="hiddenLabel">JavaScript</h4>
            </div>

            <div className="devIconitem">
              <SiJquery className="devIcon" alt="jQuery" />
              <h4 className="hiddenLabel">jQuery</h4>
            </div>

            <div className="devIconitem">
              <FaReact className="devIcon" alt="React" />
              <h4 className="hiddenLabel">React</h4>
            </div>

            <div className="devIconitem">
              <SiElectron className="devIcon" alt="Electron" />
              <h4 className="hiddenLabel">Electron</h4>
            </div>

            <div className="devIconitem">
              <FaNodeJs className="devIcon" alt="Node Js" />
              <h4 className="hiddenLabel">Node Js</h4>
            </div>

            <div className="devIconitem">
              <SiRedux className="devIcon" alt="Redux" />
              <h4 className="hiddenLabel">Redux</h4>
            </div>

            <div className="devIconitem">
              <SiFirebase className="devIcon" alt="Firebase" />
              <h4 className="hiddenLabel">Firebase</h4>
            </div>

            <div className="devIconitem">
              <DiMongodb className="devIcon" alt="MongoDB" />
              <h4 className="hiddenLabel">MongoDB</h4>
            </div>

            <div className="devIconitem">
              <FaUniversalAccess className="devIcon" alt="Accessability" />
              <h4 className="hiddenLabel">Accessability</h4>
            </div>
          </div>
        </div>

        <div>
          <h2 id="skillTitle">Familiar collaborative workflow tools</h2>
          <div className="devIconCont">
            <div className="devIconitem">
              <FaJira className="devIcon" alt="Jira" />
              <h4 className="hiddenLabel">Jira</h4>
            </div>

            <div className="devIconitem">
              <FaTrello className="devIcon" alt="Trello" />
              <h4 className="hiddenLabel">Trello</h4>
            </div>

            <div className="devIconitem">
              <FaSourcetree className="devIcon" alt="Source Tree" />
              <h4 className="hiddenLabel">Source Tree</h4>
            </div>

            <div className="devIconitem">
              <FaSlack className="devIcon" alt="Slack" />
              <h4 className="hiddenLabel">Slack</h4>
            </div>

            <div className="devIconitem">
              <SiDiscord className="devIcon" alt="Discord" />
              <h4 className="hiddenLabel">Discord</h4>
            </div>
          </div>
        </div>
        <div>
          <h2 id="skillTitle">Familiar design & Prototyping software </h2>
          <div className="devIconCont">
            <div className="devIconitem">
              <SiAdobexd className="devIcon" alt="Adobe XD" />
              <h4 className="hiddenLabel">Adobe XD</h4>
            </div>

            <div className="devIconitem">
              <SiAdobeillustrator
                className="devIcon"
                alt="Adobe Illustrator"
                style={{ borderRadius: "5px" }}
              />
              <h4 className="hiddenLabel">Adobe Illustrator</h4>
            </div>

            <div className="devIconitem">
              <FaInvision className="devIcon" alt="Invision" />
              <h4 className="hiddenLabel">Invision</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
