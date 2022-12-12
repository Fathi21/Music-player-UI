import React, { useState } from "react";

function LikeButton(props: any) {
  console.log(props);

  const [redColor, setredColor] = useState("");

  function handleClick() {
    if (redColor) {
      setredColor("");
    } else {
      setredColor("redColor");
    }
  }

  return <i onClick={handleClick} className="fas fa-heart" id={redColor}></i>;
}

export default LikeButton;
