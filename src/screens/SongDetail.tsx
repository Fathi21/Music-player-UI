import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import EditAndDeleteButton from "../components/EditAndDeleteButton";
import IsUserLoggedIn from "../components/IsUserLoggedIn";
import AllLikedSongsByActiveUser from "../components/AllLikedSongsByActiveUser";
import SongBox from "../components/SongBox";
import MusicPlayer from "../components/MusicPlayer";

function PlayMusic() {
  const { id }: any = useParams();

  function HandleLikeButtonAndAddToPlayList() {
    return (
      <div>
        <MusicPlayer data={id} />

        <div className="LikeAndAddToPlayList">
          {IsUserLoggedIn() ? <LikeButton songId={id} /> : ""}
          {IsUserLoggedIn() ? <EditAndDeleteButton /> : ""}
        </div>
        <div>
          {IsUserLoggedIn() ? <AllLikedSongsByActiveUser data={id} /> : ""}
        </div>
      </div>
    );
  }

  useEffect(() => {
    HandleLikeButtonAndAddToPlayList();
  }, [id]);

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">{HandleLikeButtonAndAddToPlayList()}</div>
    </div>
  );
}

export default PlayMusic;
