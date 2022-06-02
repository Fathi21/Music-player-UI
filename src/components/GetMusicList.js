import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetMusicList() {

    const [Response, setResponse] = useState([]);
    
    async function GetMusicList(){
        try {
            const response = await axios.get(`http://127.0.0.1:8000/Api/MusicList`)
            console.log(response.data);
            setResponse(response.data)
        } catch (error) {
            console.error('ERROR: 500 ', error);
          }
    }
    
    useEffect(() => {
        GetMusicList();
    }, [0]);
      
    
  return (
    <div>GetMusicList</div>
  )
}

export default GetMusicList