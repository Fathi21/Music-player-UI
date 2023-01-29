import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RoutePath } from "./Utilities/UrlPath/RoutePath";
import Home from "./screens/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./screens/SongDetail";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import CreatePlayList from "./screens/CreatePlayList";
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
            <Route exact path={RoutePath.loginPage}>
              <SignIn />
            </Route>
            <Route exact path={RoutePath.CreatePlayList}>
              <CreatePlayList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
