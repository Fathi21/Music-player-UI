import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { GetAllMusic } from '../redux/features/Music/MusicSlice'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSong(){

    const dispatch = useDispatch()

    //dispatch(FetchMusicList(8888))

    //const music = useSelector ((state) => state)

    const [music, setMusic] = useState([])

    function GetAllMusic() {
        fetch('http://127.0.0.1:8000/Api/GetAllMusic')
        .then(response => {
            setMusic(response.json());
        })
        .catch((error) => {
          return error;
        })
    }

    useEffect(() => {
        GetAllMusic()
    }, [0])


    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );


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