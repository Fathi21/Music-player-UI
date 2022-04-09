import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RightSide() {

    return (
        <div className='Main'>
            <p>
                Created for you 
            </p>

            <i className="fa-solid fa-arrow-down-big-small"></i>
            <Row>
                <Col md={6}>
                    <Card style={{ width: '12rem' }}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/11143927/pexels-photo-11143927.jpeg?cs=srgb&dl=pexels-channnsy-11143927.jpg&fm=jpg" />
                        <Card.Body>
                            <div className='ArtistName' >
                                <Card.Text>
                                    Drake
                                </Card.Text>
                            </div>

                            <div className='SongName' >
                                <Card.Text>
                                    Over my dead body 
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default RightSide;
