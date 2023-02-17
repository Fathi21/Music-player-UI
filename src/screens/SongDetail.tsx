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
import { Link, useLocation, useNavigate, HashRouter } from "react-router-dom";
function PlayMusic() {
  const { id }: any = useParams();

  const [songData, setSongData] = useState({
    Artist: "",
    CategoryId: "",
    CreatedAt: "",
    MusicFile: "",
    PhotoCover: "",
    Title: "",
    UserId: "",
    id: "",
  });

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

  function hand() {
    GetSongById(id).then(function (result) {
      console.log(result[0]);
      setSongData((prev) => ({
        ...prev,
        Artist: result[0].Artist,
        CategoryId: result[0].CategoryId,
        CreatedAt: result[0].CreatedAt,
        MusicFile: result[0].MusicFile,
        PhotoCover: result[0].PhotoCover,
        Title: result[0].Title,
        UserId: result[0].UserId,
        id: result[0].id,
      }));
    });
  }

  useEffect(() => {
    hand();
    HandleLikeButtonAndAddToPlayList();
  }, [id]);

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <div className="p-4 rounded-0 songBox">
          <div className="container-fluid shadow-lg">
            <div className="row g-0">
              <div className="col-md-3 mb-md-0">
                <img src={urlCalls.Base + songData.PhotoCover} />
              </div>
              <div className="col-md-9 ps-md-0">
                <p className="fs-1 Title-lg">{songData.Title}</p>
                <p className="text-start Owner-name-and-date">
                  {songData.Artist} <span> </span>
                  <i className="fas fa-circle"></i>
                  <span> {songData.CreatedAt}</span>
                </p>
                <ReactAudioPlayer
                  src={urlCalls.Base + songData.MusicFile}
                  autoPlay
                  controls
                />
              </div>
            </div>
          </div>
        </div>
        {HandleLikeButtonAndAddToPlayList()}
        <Spinner data={1} />
      </div>
    </div>
  );
}

export default PlayMusic;
