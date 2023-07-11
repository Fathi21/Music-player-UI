import React, { useState, useEffect } from "react";
import SongBox from "../components/SongBox";

function MusicPlayer(props: any) {
  const songId: number = !isNaN(props.data) ? props.data : props.data;

  return (
    <div>
      <SongBox songId={songId} />
    </div>
  );
}

export default MusicPlayer;
