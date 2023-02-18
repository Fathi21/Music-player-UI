import React, { useState, useEffect } from "react";
import LikeASongById from "../Utilities/ApiCalls/LikeASongById";
import GetLikesBySongId from "../Utilities/ApiCalls/GetLikesBySongId";
import UserDetails from "../components/UserDetails";

function LikeButton(props: any) {
  const [redColor, setredColor] = useState("");

  const songId = props.songId;

  function LikesForThisSong() {
    GetLikesBySongId(songId).then(function (result) {
      const isUserLikedIt = result.find(
        (data: any) => data.UserId.toString() === UserDetails().userId
      );

      if (isUserLikedIt) {
        setredColor("redColor");
      } else {
        setredColor("");
      }
    });
  }

  function handleClick() {
    LikeASongById(songId);
    LikesForThisSong();

    if (redColor) {
      setredColor("");
    } else {
      setredColor("redColor");
    }
  }

  useEffect(() => {
    LikesForThisSong();
  }, [redColor, songId]);

  return <i onClick={handleClick} className="fas fa-heart" id={redColor}></i>;
}

export default LikeButton;
