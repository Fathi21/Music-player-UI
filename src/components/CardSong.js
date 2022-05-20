import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSong(){
  return (
    <div>
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
    </div>
  )
}

export default CardSong;