import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { Card } from "semantic-ui-react";
import { ProjectSection } from "../components";
import { Media } from "../core/media";
import resumeData from "../resumeData";

const Projects = () => {
  let { path } = useRouteMatch();

  return (
    <Router>
      <h1>Projects</h1>
      <Card
        style={{
          flexDirection: "row",
          width: "100%",
          whiteSpace: "nowrap",
          overflowX: "scroll",
          padding: "5px",
        }}
      >
        {resumeData.portfolio.map((i, k) => (
          <Link key={k} to={i.name} style={{ marginRight: "50px" }}>
            {i.name}
          </Link>
        ))}
      </Card>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a project above.</h3>
        </Route>
        <Route path={`${path}/:projectName`}>
          <Media at="mobile">
            <ProjectSection mobile />
          </Media>
          <Media greaterThan="mobile">
            <ProjectSection />
          </Media>
        </Route>
      </Switch>
    </Router>
  );
};

export default Projects;
