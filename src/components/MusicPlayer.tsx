import React, { useState, useEffect } from "react";
import GetSongsAddedToPlayListById from "../Utilities/ApiCalls/GetSongsAddedToPlayListById";
import GetRandomSongfromPlaylist from "../Utilities/ApiCalls/GetRandomSongfromPlaylist";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";

function PlaySongFromPlayList(props: any) {
  const playlistId: number = props.playlistId;

  const [songId, setSongId] = useState([]);

  const [SongsInCurrentPlayList, setSongsInCurrentPlayList] = useState([]);
  const [songPlayingNow, setSongPlayingNow] = useState("");
  const [PlayingNow, sePlayingNow] = useState("");

  function HandlePlaylistData() {
    GetSongsAddedToPlayListById(1).then(function (result) {
      setSongsInCurrentPlayList(result);
    });
  }

  function handleASongToPlay(songDetails: any) {
    // console.log(songDetails[0]);
    songDetails.filter((musicData: any) => {
      // console.log(musicData);
    });
  }

  console.log(SongsInCurrentPlayList);

  useEffect(() => {
    HandlePlaylistData();
  }, [playlistId]);

  return <div>sas</div>;
}

export default PlaySongFromPlayList;
