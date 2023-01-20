import React, { useState } from "react";
import LikeASongById from "../Utilities/ApiCalls/LikeASongById";

function LikeButton(props: any) {
  console.log(props);

  const [redColor, setredColor] = useState("");
  function handleClick() {
    LikeASongById(props.songId);

    if (redColor) {
      setredColor("");
    } else {
      setredColor("redColor");
    }
  }

  return <i onClick={handleClick} className="fas fa-heart" id={redColor}></i>;
}

export default LikeButton;
