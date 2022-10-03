import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LeftSide from "./LeftSide";
import LikeButton from "./LikeButton";
import AddToPlayList from "./AddToPlayList";
import Spinner from "./Spinner";
import Comment from "./Comment";

function PlayMusic() {
  let { id } = useParams();

  const [music, setmusic] = useState([]);

  const [HideSpinner, setHideSpinner] = useState("");

  function GetAMusic() {
    axios
      .get("http://127.0.0.1:8000/Api/GetSongById/" + id)
      .then((response) => setmusic(response.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    setTimeout(function () {
      GetAMusic();
      setHideSpinner("hide");
    }, 500);
  }, [0]);

  const PlayingMusic = music.map((musicData, index) => (
    <div className="p-5 rounded-0 MainBox">
      <div className="container-fluid py-2 shadow-lg p-2 mb-5">
        <img src={"http://127.0.0.1:8000" + musicData.PhotoCover} />
      </div>
      <p className="fs-1 Title-lg">{musicData.Title}</p>
      <p className="text-start Owner-name-and-date">
        Drake <i className="fas fa-circle"></i>{" "}
        <span>{musicData.CreatedAt}</span>
      </p>
      <ReactAudioPlayer
        src={"http://127.0.0.1:8000" + musicData.MusicFile}
        autoPlay
        controls
      />
      <div className="LikeAndAddToPlayList">
        <LikeButton songId={id} />
        <AddToPlayList />
      </div>
    </div>
  ));

  return (
    <div className="MainForSong">
      <div className="col-3 col-lg-3 fixed-top">
        <LeftSide />
      </div>
      <Spinner hide={HideSpinner} />
      {PlayingMusic}
      <Comment />
    </div>
  );
}

export default PlayMusic;
