import React from "react";
import resumeData from "../core/resumeData";
import {
  FaAppStoreIos,
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
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import {
  IoLogoGooglePlaystore,
  IoLogoJavascript,
  IoLogoPwa,
} from "react-icons/io5";
import {
  SiAdobeillustrator,
  SiAdobexd,
  SiElectron,
  SiExpo,
  SiFirebase,
  SiJquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import theDev from "../images/theDev.png";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  return (
    <div className="homeSection">
      <div>
        <h1 className="nameTitle">
          Ahmed Ali
          <img
            src={theDev}
            alt="developer emoji"
            onClick={() => history.push("/dashboard")}
          />
        </h1>
      </div>
      <div>
        <p id="bodyText">{resumeData.aboutme}</p>
      </div>

      <div>
        <div style={{ marginTop: 10 }}>
          <h2 id="skillTitle">Core skills</h2>
          <div className="devIconCont">
            <div className="devIconitem">
              <FaGitSquare className="devIcon" alt="Git" />
              <h4 className="hiddenLabel">Git</h4>
            </div>

            <div className="devIconitem">
              <AiFillHtml5 className="devIcon" alt="Html" />
              <h4 className="hiddenLabel">Html5</h4>
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
              <IoLogoPwa className="devIcon" alt="Progressive Web App" />
              <h4 className="hiddenLabel">Progressive Web App</h4>
            </div>

            <div className="devIconitem">
              <SiJquery className="devIcon" alt="jQuery" />
              <h4 className="hiddenLabel">jQuery</h4>
            </div>

            <div className="devIconitem">
              <IoLogoJavascript className="devIcon" alt="JavaScript" />
              <h4 className="hiddenLabel">JavaScript</h4>
            </div>

            <div className="devIconitem">
              <FaNodeJs className="devIcon" alt="Node Js" />
              <h4 className="hiddenLabel">Node Js</h4>
            </div>

            <div className="devIconitem">
              <FaReact className="devIcon" alt="React" />
              <h4 className="hiddenLabel">React</h4>
            </div>

            <div className="devIconitem">
              <SiExpo className="devIcon" alt="Expo" />
              <h4 className="hiddenLabel">Expo</h4>
            </div>

            <div className="devIconitem">
              <div>
                <FaAppStoreIos className="devIcon" alt="Ios App Store" />
                <IoLogoGooglePlaystore
                  className="devIcon"
                  alt="Google Play Store"
                />
              </div>
              <h4 className="hiddenLabel">Moblie App Development</h4>
            </div>

            <div className="devIconitem">
              <SiElectron className="devIcon" alt="Electron" />
              <h4 className="hiddenLabel">Electron</h4>
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
              <AiOutlineConsoleSql className="devIcon" alt="SQL" />
              <h4 className="hiddenLabel">SQL</h4>
            </div>

            <div className="devIconitem">
              <FaUniversalAccess className="devIcon" alt="Accessability" />
              <h4 className="hiddenLabel">Accessability</h4>
            </div>
          </div>
        </div>

        <div>
          <h2 id="skillTitle">Currently learning</h2>
          <div className="devIconCont">
            <div className="devIconitem">
              <SiTypescript className="devIcon" alt="TypeScript" />
              <h4 className="hiddenLabel">TypeScript</h4>
            </div>

            <div className="devIconitem">
              <GrGraphQl className="devIcon" alt="GraphQL" />
              <h4 className="hiddenLabel">GraphQL</h4>
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
  );
};

export default Home;
