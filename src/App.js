import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LeftSide from './components/LeftSide';
import Home from './components/Home';
import SideNav from './components/SideNav';
import GetASong from './components/GetASong'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">

      <Container fluid>
          <Row>
              <SideNav/>
              <Col lg={3} md={3} xs={0}>
                  <LeftSide/>
              </Col>

              <Col lg={9} md={9}>                  
                  <Home/>
              </Col>
              <BrowserRouter>
                <Routes>
                  <Route exect path="/" element={<Home/>}/>
                  <Route exect path="Song" element={<GetASong/>} />
                </Routes>
              </BrowserRouter>
          </Row>
      </Container>

    </div>
  );
}

export default App;
