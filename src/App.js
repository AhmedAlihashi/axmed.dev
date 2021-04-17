import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Contact, Projects, Experience } from "./pages";

const App = () => {
  return (
    <Router>
      <div className="appCont">
        <Header />

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
  );
};

export default App;
