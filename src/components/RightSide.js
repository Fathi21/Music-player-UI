import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function RightSide() {
    const [musicList, setMusicList] = useState([]);

    function GetMusicList(){
        axios.get(`http://127.0.0.1:8000/Api/MusicList`)
        .then(res => {
            setMusicList(res.data)
            
            console.log(musicList)
        })
    }

    console.log(musicList)

    useEffect(() => {
        GetMusicList();
    }, [0]);
    return (
        <div className='Main'>
            <p>
                Created for you 
            </p>

            <Row>
                <Col md={2} className='Songs'>
                    <Card>
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

                <Col md={2} className='Songs'>
                    <Card>
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

                <Col xs={6} md={2} className='Songs'>
                    <Card>
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

                <Col xs={6} md={2} className='Songs'>
                    <Card>
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

                <Col xs={6} md={2} className='Songs'>
                    <Card>
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
