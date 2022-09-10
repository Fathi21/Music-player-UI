import ReactAudioPlayer from 'react-audio-player';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function PlayMusic() {

  let { id } = useParams();
  
  const [music, setmusic] = useState([])
    
  function GetAllMusic() {
      axios.get('http://127.0.0.1:8000/Api/GetSongById/' + id)
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

  console.log(music)

  const PlayingMusic = music.map((musicData, index) =>
    <div className="p-5 rounded-0 MainBox">
      <div className="container-fluid py-2 shadow-lg p-2 mb-5">
        <img src="https://images.pexels.com/photos/12468153/pexels-photo-12468153.jpeg?cs=srgb&dl=pexels-fernando-paleta-12468153.jpg&fm=jpg" className="img-fluid" alt="..."/>
      </div>
      <p className="fs-1 Title-lg">{musicData.Title}</p>
      <p className="text-start Owner-name-and-date">Drake <i class="fas fa-circle"></i> <span>{musicData.CreatedAt}</span></p>
      <ReactAudioPlayer
        src={'http://127.0.0.1:8000' + musicData.MusicFile}
        autoPlay
        controls
      />    
  </div>
  );


  return (
    <div className='MainForSong'>
      {PlayingMusic}
    </div>
  )
}

export default PlayMusic;