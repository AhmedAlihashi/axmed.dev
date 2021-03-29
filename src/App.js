import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import { Header } from "./components";
import { Media, MediaContextProvider } from "./core/media";
import { Home, Contact, Projects, Experience } from "./pages";

const App = () => {
  return (
    <MediaContextProvider>
      <Router>
        <Media at="mobile">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#F0E6BC",
            }}
          >
            <Header linkSize={20} />

            <Segment
              style={{
                margin: "10px",
                height: "94vh",
                width: "95vw",

                background: "#95C3C6",
                borderRadius: 10,
                padding: "20px",
                overflowY: "scroll",
              }}
            >
              <Switch>
                <Route exact strict path="/">
                  <Home />
                </Route>
                <Route path="/experience">
                  <Experience />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </Segment>
          </div>
        </Media>
        <Media greaterThan="mobile">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "#F0E6BC",
            }}
          >
            <Header linkSize={25} />

            <div
              style={{
                height: "97vh",
              }}
            >
              <Segment
                style={{
                  margin: "10px",
                  height: "94vh",
                  position: "absolute",
                  left: 200,
                  right: 0,
                  background: "#95C3C6",
                  borderRadius: 10,

                  padding: "20px",
                  overflowY: "scroll",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <Switch>
                  <Route exact strict path="/">
                    <Home />
                  </Route>
                  <Route path="/experience">
                    <Experience />
                  </Route>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                </Switch>
              </Segment>
            </div>
          </div>
        </Media>
      </Router>
    </MediaContextProvider>
  );
};

export default App;
