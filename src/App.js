import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LeftSide from "./components/LeftSide";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./components/PlayMusic";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Router>
            <SideNav />
            <div className="col-3 col-lg-3 fixed-top">
              <LeftSide />
            </div>
            <div className="col-9 col-lg-9 Main-righSide">
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
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
