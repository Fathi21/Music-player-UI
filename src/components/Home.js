import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CardSong from './CardMusic';


function RightSide() {
    return (
        <div className='RightSide Main'>
            <p>
                Created for you 
            </p>
                        
            <Row className="">
                <Col className='Songs'>
                    <CardSong name='fathi'/>
                </Col>                               
            </Row>  
        </div>
  

    );
}

export default RightSide;
