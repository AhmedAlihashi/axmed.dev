import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectSection } from "../components";
import { Media } from "../core/media";
import resumeData from "../resumeData";

const Projects = () => {
  return (
    <>
      <h1 className="projectTitle">Projects</h1>

      {resumeData.portfolio.map((dataObj, key) => {
        return (
          <div className="projectItem">
            <Media at="mobile">
              <ProjectSection mobile dataObj={dataObj} />
            </Media>
            <Media greaterThan="mobile">
              <ProjectSection dataObj={dataObj} />
            </Media>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
