import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import LikeButton from "../components/LikeButton";
import EditAndDeleteButton from "../components/EditAndDeleteButton";
import IsUserLoggedIn from "../components/IsUserLoggedIn";
import AllLikedSongsByActiveUser from "../components/AllLikedSongsByActiveUser";
import MusicPlayer from "../components/MusicPlayer";

const SongDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isUserLoggedIn = IsUserLoggedIn();

  const MainBody = () => (
    <div>
      <MusicPlayer data={id} />
      <div className="LikeAndAddToPlayList">
        {isUserLoggedIn && <LikeButton songId={id} />}
      </div>
      <div>{isUserLoggedIn && <AllLikedSongsByActiveUser data={id} />}</div>
    </div>
  );

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10">
        <MainBody />
      </div>
    </div>
  );
};

export default SongDetail;
