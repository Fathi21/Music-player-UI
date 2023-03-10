import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import EditAndDeleteButton from "../components/EditAndDeleteButton";
import Spinner from "../components/Spinner";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import GetSongById from "../Utilities/ApiCalls/GetSongById";
import IsUserLoggedIn from "../components/IsUserLoggedIn";
import GetCategoryById from "../Utilities/ApiCalls/GetCategoryById";
import LinesEllipsis from "../components/LinesEllipsis";
import GetAllLikedSongsByUser from "../Utilities/ApiCalls/GetAllLikedSongsByUser";
import AllLikedSongsByActiveUser from "../components/AllLikedSongsByActiveUser";
import Moment from "react-moment";
import UserDetails from "../components/UserDetails";

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

  const [CategoryData, setCategoryData] = useState({
    id: "",
    Title: "",
    Description: "",
    CreatedAt: "",
    UserId: "",
  });

  function HandleLikeButtonAndAddToPlayList() {
    if (IsUserLoggedIn()) {
      return (
        <div>
          <div className="LikeAndAddToPlayList">
            <LikeButton songId={id} />
            <EditAndDeleteButton />
          </div>
          <div>
            <AllLikedSongsByActiveUser />
          </div>
        </div>
      );
    }
  }

  function handleRenderData() {
    GetSongById(id).then(function (result) {
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

      GetCategoryById(result[0].CategoryId).then(function (result) {
        setCategoryData((prev) => ({
          id: result.data[0].id,
          Title: result.data[0].Title,
          Description: result.data[0].Description,
          CreatedAt: result.data[0].CreatedAt,
          UserId: result.data[0].UserId,
        }));
      });
    });
  }

  console.log(GetAllLikedSongsByUser());

  useEffect(() => {
    handleRenderData();
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
                <p className="songTitle">
                  <LinesEllipsis
                    text={songData.Title}
                    from={"songData.Title"}
                  />
                </p>
                <p className="text-start Owner-name-and-date">
                  <LinesEllipsis
                    text={songData.Artist}
                    from={"songData.Artist"}
                  />

                  <span> </span>
                  <i className="fas fa-circle"></i>
                  <span className="DateCreatedAt">
                    <Moment fromNow>{songData.CreatedAt}</Moment>
                  </span>
                </p>
                <p className="SongCategory">
                  <LinesEllipsis
                    text={CategoryData.Title}
                    from={"CategoryData.Title"}
                  />
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
