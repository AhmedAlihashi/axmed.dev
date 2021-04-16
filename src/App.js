import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { MediaContextProvider } from "./core/media";
import { Home, Contact, Projects, Experience } from "./pages";

const App = () => {
  return (
    <MediaContextProvider>
      <Router>
        <div className="appCont">
          <Header linkSize={20} />

          <div className="appShowcase">
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
          </div>
        </div>
      </Router>
    </MediaContextProvider>
  );
};

export default App;
