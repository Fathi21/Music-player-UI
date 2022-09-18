import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import LeftSide from "./components/LeftSide";
import Home from "./components/Home";
import SideNav from "./components/SideNav";
import PlayMusic from "./components/PlayMusic";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Router>
            <SideNav />
            <Col lg={3} md={3} xs={0} className="fixed-top">
              <LeftSide />
            </Col>
            <Col lg={9} md={9} className="Main-righSide">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/browse/:id">
                  <PlayMusic />
                </Route>
              </Switch>
            </Col>
          </Router>
        </Row>
      </Container>
    </div>
  );
}

export default App;
