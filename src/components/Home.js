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

              <Col md={2} className='LeftSide fixed-top'>
                  <LeftSide/>
              </Col>

              <Col md={10} className='RightSide' >                  
                  <RightSide/>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default Home;
