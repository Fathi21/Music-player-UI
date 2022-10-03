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
            <Switch>
              <div className="col-9 Main-righSide">
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/browse/:id">
                  <PlayMusic />
                </Route>
              </div>
            </Switch>

            <Switch>
              <div className="col-12">
                <Route exact path="/Register">
                  <SignUp />
                </Route>
              </div>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
