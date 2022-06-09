import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SideNav from './SideNav';

function Home() {

  //https://dribbble.com/shots/14235847-Music-player-Web-design
  //https://codepen.io/bootpen/pen/jbbaRa
  return (
    <div>
      <Container fluid>
          <Row>
              <SideNav/>
              <Col lg={3} md={3}  xs={0}>
                  <LeftSide/>
              </Col>

              <Col lg={9} md={9}>                  
                  <RightSide/>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Home;
