import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardSong from './CardSong';


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
                        
            <Row className="row-cols-6">
                <Col className='Songs'>
                    <CardSong/>
                </Col>

                <Col className='Songs'>
                    <CardSong/>
                </Col>

                <Col className='Songs'>
                    <CardSong/>
                </Col>

                <Col className='Songs'>
                    <CardSong/>
                </Col>

                <Col className='Songs'>
                    <CardSong/>
                </Col> 

                <Col className='Songs'>
                    <CardSong/>
                </Col> 

                <Col className='Songs'>
                    <CardSong/>
                </Col> 

                <Col className='Songs'>
                    <CardSong/>
                </Col>

                <Col className='Songs'>
                    <CardSong/>
                </Col>
                               
            </Row>  
        </div>
    );
}

export default RightSide;
