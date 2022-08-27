import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function CardMusic(props){

    const [music, setmusic] = useState([])
    
    function GetAllMusic() {
        axios.get('http://127.0.0.1:8000/Api/GetAllMusic')
        .then(response => 
            setmusic(response.data)
        )
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    useEffect(() => {
        GetAllMusic()
    }, [0])

    console.log('Name: ', props.name)

    const listMusic = music.map((musicData, index) =>
        <Link to={'song/' + musicData.id}>
            <Card key={index}>
                <Card.Img variant="top" src={'http://127.0.0.1:8000' + musicData.PhotoCover} />
                <Card.Body>
                    <div className='ArtistName' >
                        <Card.Text>
                            {musicData.Title}
                        </Card.Text>
                    </div>

                    <div className='SongName' >
                        <Card.Text>
                            Over my dead body 
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    );

    return (
        <div>
            {listMusic}
        </div>
    )
}

export default CardMusic;