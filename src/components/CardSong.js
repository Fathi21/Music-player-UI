import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { GetAllMusic } from '../redux/features/Music/MusicSlice'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSong(){

    const dispatch = useDispatch()

    //dispatch(FetchMusicList(8888))

    const music = useSelector ((state) => state)
    
    useEffect(() => {
        dispatch(GetAllMusic())
    }, [1])

    console.log(music)

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