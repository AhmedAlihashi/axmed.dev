import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components";
import {
  Home,
  Contact,

  // Projects,
  Experience,
} from "./pages";
import Dashboard from "./pages/Dashboard";
import AppContext from "./core/context/appContext";
import Brain from "./core/context/Brain";
import Login from "./pages/Login";

const App = () => {
  const AuthRoute = ({ component: Component, ...rest }) => {
    const state = useContext(AppContext);
    const { loggedIn } = state;
    return (
      <Route
        {...rest}
        render={(props) =>
          loggedIn === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  };

  return (
    <Brain>
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
              {/* <Route path="/projects">
                <Projects />
              </Route> */}
              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <AuthRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </Router>
    </Brain>
  );
};

export default App;
