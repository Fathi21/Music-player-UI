import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMusic from '../components/CardMusic';

function ApiMusic(){

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

    console.log('API')

    return (
        <div>
            <CardMusic name='sdfsd' />;
            <h1>
                Api
            </h1>
        </div>
    )
}



export default ApiMusic;