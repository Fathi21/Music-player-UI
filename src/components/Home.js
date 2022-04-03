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
        <SideNav/>
        <Row>
          <Col md={6} className='RightSide'>
            <LeftSide/>
          </Col>

          <Col md={6} className='LeftSide' >
            <RightSide/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
