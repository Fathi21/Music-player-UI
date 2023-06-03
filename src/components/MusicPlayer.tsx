import React, { useState, useEffect } from "react";
import SongBox from "../components/SongBox";

function MusicPlayer(props: any) {
  const randomIndex = Math.floor(Math.random() * props.data.length);

  const randomSongfromPlayList = props.data[randomIndex];

  const songId: number = !isNaN(props.data)
    ? props.data
    : randomSongfromPlayList.id;

  return (
    <div>
      <SongBox songId={songId} />
    </div>
  );
}

export default MusicPlayer;
