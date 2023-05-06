import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import EditAndDeleteButton from "../components/EditAndDeleteButton";
import IsUserLoggedIn from "../components/IsUserLoggedIn";
import AllLikedSongsByActiveUser from "../components/AllLikedSongsByActiveUser";
import SongBox from "../components/SongBox";

function PlayMusic() {
  const { id }: any = useParams();

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

  useEffect(() => {
    HandleLikeButtonAndAddToPlayList();
  }, [id]);
  const audioPlayer: any = useRef(null);

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <SongBox songId={id} />
        {HandleLikeButtonAndAddToPlayList()}
      </div>
    </div>
  );
}

export default PlayMusic;
