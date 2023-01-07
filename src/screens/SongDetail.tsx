import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftSide from "../components/LeftSide";
import LikeButton from "../components/LikeButton";
import AddToPlayList from "../components/AddToPlayList";
import Spinner from "../components/Spinner";
import Comment from "../components/Comment";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetSongById from "../Utilities/ApiCalls/GetSongById";

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
        <div className="col-3 col-lg-3">
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
