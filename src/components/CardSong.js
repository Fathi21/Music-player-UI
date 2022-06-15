import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { AllSongs } from '../redux/features/Music/MusicSlice'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSong(){

    const song = useSelector((state) => state.Music.value)
    const dispatch = useDispatch()

    const [Response, setResponse] = useState([]);
    
    async function GetMusicList(){
        try {
            const response = await axios.get(`http://127.0.0.1:8000/Api/MusicList`)

            //dispatch(AllSongs(response.data))
            console.log(response.data);
            setResponse(response.data)
        } catch (error) {
            console.error('ERROR: 500 ', error);
          }
    }
    
    useEffect(() => {
        GetMusicList();
    }, [1]);

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