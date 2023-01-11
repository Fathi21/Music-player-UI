import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import AddToPlayList from "../components/AddToPlayList";
import Spinner from "../components/Spinner";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetSongById from "../Utilities/ApiCalls/GetSongById";

function PlayMusic() {
  const { id }: any = useParams();

  const PlayingMusic = GetSongById(id).map((musicData: any, index) => (
    <div className="p-5 rounded-0">
      <div className="container-fluid py-2 shadow-lg p-2 mb-3">
        <div className="row g-0">
          <div className="col-3">
            <img src={urlCalls.Base + musicData.PhotoCover} />
          </div>
          <div className="col-9">
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
          </div>
        </div>
      </div>

      <div className="LikeAndAddToPlayList">
        <LikeButton songId={id} />
        <AddToPlayList />
      </div>
    </div>
  ));

  return (
    <div className="MainBox">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10 Main-righSide">
          {PlayingMusic}
          <Spinner data={GetSongById.length} />
        </div>
      </div>
    </div>
  );
}

export default PlayMusic;
