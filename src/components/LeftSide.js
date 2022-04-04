import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import MusicImage from '../Assets/MusicImage.png'
function LeftSide() {
  return (
    <div> 
        <h2>
            Listen to your <br></br>favourite music 
        </h2>
        <Row>
            <Col md={6}>
              <Image variant="top" src={MusicImage} />
            </Col>
            <Col md={6}>
              
            </Col>
            <Col md={6}>
              
            </Col>
            <Col md={6}>
              <Image variant="top" src={MusicImage} />
            </Col>
        </Row>
        
    </div>
  );
}

export default LeftSide;
