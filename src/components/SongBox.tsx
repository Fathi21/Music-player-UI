import ReactAudioPlayer from "react-audio-player";
import React, { useState, useEffect, useRef } from "react";
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

function SongBox(props: any) {
  const songId = props.songId;

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
            <LikeButton songId={songId} />
            <EditAndDeleteButton />
          </div>
          <div>
            <AllLikedSongsByActiveUser />
          </div>
        </div>
      );
    }
  }

  async function handleRenderData() {
    try {
      const result = await GetSongById(songId);
      if (result && result.length > 0) {
        const song = result[0];
        setSongData((prev) => ({
          ...prev,
          Artist: song.Artist || "",
          CategoryId: song.CategoryId || "",
          CreatedAt: song.CreatedAt || "",
          MusicFile: song.MusicFile || "",
          PhotoCover: song.PhotoCover || "",
          Title: song.Title || "",
          UserId: song.UserId || "",
          id: song.id || "",
        }));

        if (song.CategoryId) {
          const categoryResult = await GetCategoryById(song.CategoryId);
          if (categoryResult?.data && categoryResult.data.length > 0) {
            const cat = categoryResult.data[0];
            setCategoryData({
              id: cat.id || "",
              Title: cat.Title || "",
              Description: cat.Description || "",
              CreatedAt: cat.CreatedAt || "",
              UserId: cat.UserId || "",
            });
          }
        }
      }
    } catch (error) {
      // Optional: handle errors gracefully here
      console.error("Error loading song or category data:", error);
    }
  }

  useEffect(() => {
    handleRenderData();
  }, [songId]);

  const audioPlayer: any = useRef(null);

  const handleNext = () => {
    if (audioPlayer.current && audioPlayer.current.skipForward) {
      audioPlayer.current.skipForward();
    }
  };

  const handlePlay = () => {
    console.log("Audio started playing");
  };

  const handleEnded = () => {
    console.log("Audio stopped playing");
  };

  const handlePause = () => {
    console.log("Audio paused");
  };

  return (
    <div>
      <div className="p-4 rounded-0 songBox">
        <Spinner data={songId} />
        <div className="container-fluid shadow-lg">
          <div className="row g-0">
            <div className="col-md-3 mb-md-0">
              <img src={urlCalls.Base + songData.PhotoCover} alt="Song Cover" />
            </div>
            <div className="col-md-9 ps-md-0">
              <p className="songTitle">
                <LinesEllipsis text={songData.Title} from={"songData.Title"} />
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
                ref={audioPlayer}
                src={urlCalls.Base + songData.MusicFile}
                autoPlay
                controls
                onPlay={handlePlay}
                onEnded={handleEnded}
                onPause={handlePause}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongBox;
