import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { MusicList } from '../Redux/Features/Music/MusicSlice'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSong(){

    const dispatch = useDispatch()

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

    dispatch(MusicList(music))

    console.log(music)

    const listMusic = music.map((musicData, index) =>
        <Card key={index}>
            <Card.Img variant="top" src={'http://127.0.0.1:8000'+musicData.PhotoCover} />
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
    );

    return (
        <div>
            {listMusic}
        </div>
    )
}

export default CardSong;