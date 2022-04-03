import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RightSide() {
  return (
    <div>
        <p>
            Created for you 
        </p>

        <Row>
            <Col md={6}>
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?cs=srgb&dl=pexels-channnsy-11143927.jpg&fm=jpg" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?cs=srgb&dl=pexels-channnsy-11143927.jpg&fm=jpg" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  );
}

export default RightSide;
