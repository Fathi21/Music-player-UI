import Home from "./components/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./components/PlayMusic";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Router>
          <SideNav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/browse/:id">
              <PlayMusic />
            </Route>
            <Route exact path="/Register">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
