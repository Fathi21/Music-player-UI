import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function CardMusic(){

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

    const listMusic = music.map((musicData, index) =>
        <div class="col CardBox">
            <Link to={'browse/' + musicData.id}>
                <Card key={index}>
                    <Card.Img variant="top" src={'http://127.0.0.1:8000' + musicData.PhotoCover} />
                    <Card.Body>
                        <div className='Title' >
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
        </div>

    );

    return (
        <div class="row row-cols-4 row-cols-lg-5 g-2 g-lg-3">
            {listMusic}
        </div>
    )
}

export default CardMusic;