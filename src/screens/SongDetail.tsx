import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import EditAndDeleteButton from "../components/EditAndDeleteButton";
import Spinner from "../components/Spinner";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetSongById from "../Utilities/ApiCalls/GetSongById";
import IsUserLoggedIn from "../components/IsUserLoggedIn";
import { useHistory } from "react-router-dom";

function PlayMusic() {
  const { id }: any = useParams();
  const music = GetSongById(id);

  function HandleLikeButtonAndAddToPlayList() {
    if (IsUserLoggedIn()) {
      return (
        <div className="LikeAndAddToPlayList">
          <LikeButton songId={id} />
          <EditAndDeleteButton />
        </div>
      );
    }
  }

  const PlayingMusic = music.map((musicData: any, index) => (
    <div key={musicData.id} className="p-4 rounded-0 songBox">
      <div className="container-fluid shadow-lg">
        <div className="row g-0">
          <div className="col-md-3 mb-md-0">
            <img src={urlCalls.Base + musicData.PhotoCover} />
          </div>
          <div className="col-md-9 ps-md-0">
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
    </div>
  ));

  return (
    <div className="">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          {PlayingMusic}
          {HandleLikeButtonAndAddToPlayList()}

          <Spinner data={music.length} />
        </div>
      </div>
    </div>
  );
}

export default PlayMusic;
