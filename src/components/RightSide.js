import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardSong from './CardSong';


function RightSide() {
    return (
        <div className='RightSide Main'>
            <p>
                Created for you 
            </p>
                        
            <Row className="">
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
