import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftSide from "./LeftSide";
import LikeButton from "./LikeButton";
import AddToPlayList from "./AddToPlayList";
import Spinner from "./Spinner";
import Comment from "./Comment";
import { urlCalls } from "../utilities/Enums/ApiUrlCalls";
import GetSongById from "../utilities/ApiCalls/GetSongById";

function PlayMusic() {
  const { id }: any = useParams();

  const music = GetSongById(id);

  const PlayingMusic = music.map((musicData: any, index) => (
    <div className="p-5 rounded-0 MainBox">
      <div className="container-fluid py-2 shadow-lg p-2 mb-5">
        <img src={urlCalls.Base + musicData.PhotoCover} />
      </div>
      <p className="fs-1 Title-lg">{musicData.Title}</p>
      <p className="text-start Owner-name-and-date">
        Drake <i className="fas fa-circle"></i>{" "}
        <span>{musicData.CreatedAt}</span>
      </p>
      <ReactAudioPlayer
        src={urlCalls.Base + musicData.MusicFile}
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
      <div className="row">
        <div className="col-3 col-lg-3 fixed-top">
          <LeftSide />
        </div>
        <div className="col-9 Main-righSide">
          {PlayingMusic}
          <Spinner data={music.length} />
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default PlayMusic;
