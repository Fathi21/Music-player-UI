import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import SideNav from './SideNav';
import { useSelector, useDispatch } from 'react-redux'
function Home() {

  return (
    <div>
      <Container fluid>
          <Row>
              <SideNav/>
              <Col lg={3} md={3} xs={0}>
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
