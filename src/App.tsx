import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RoutePath } from "./Utilities/UrlPath/RoutePath";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./components/PlayMusic";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Router>
          <SideNav />
          <Switch>
            <Route exact path={RoutePath.homePage}>
              <Home />
            </Route>
            <Route path={RoutePath.browseId}>
              <PlayMusic />
            </Route>
            <Route exact path={RoutePath.registerPage}>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
