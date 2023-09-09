import React, { useState, useEffect } from "react";
import LikeASongById from "../Utilities/ApiCalls/LikeASongById";
import GetLikesBySongId from "../Utilities/ApiCalls/GetLikesBySongId";
import UserDetails from "../components/UserDetails";

/**
 * The LikeButton component is a React component that allows users to like a song and displays a heart
 * icon that changes color based on whether the user has liked the song or not.
 * @param {any} props - The `props` parameter is an object that contains the properties passed to the
 * `LikeButton` component.
 * @returns The LikeButton component is returning an <i> element with the class name "fas fa-heart".
 * The element will have an onClick event listener that calls the handleClick function when clicked.
 * The id attribute of the element will be set to "redColor" if the redColor state is true, indicating
 * that the heart icon should be displayed in red.
 */
function LikeButton(props: any) {
  const [redColor, setredColor] = useState(false);

  const songId = props.songId;

  function LikesForThisSong() {
    GetLikesBySongId(songId).then(function (result) {
      const isUserLikedIt = result.find(
        (data: any) => data.UserId.toString() === UserDetails().userId
      );

      if (isUserLikedIt) {
        setredColor(true);
      } else {
        setredColor(false);
      }
    });
  }

  function handleClick() {
    LikeASongById(songId);
    LikesForThisSong();

    if (redColor) {
      setredColor(false);
    } else {
      setredColor(true);
    }
  }

  useEffect(() => {
    LikesForThisSong();
  }, [redColor, songId]);

  return (
    <i
      onClick={handleClick}
      className="fas fa-heart"
      id={redColor ? "redColor" : ""}
    ></i>
  );
}

export default LikeButton;
