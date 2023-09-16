import React, { useState, useEffect } from "react";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import AddSongSongToThePlayList from "../Utilities/ApiCalls/AddSongSongToThePlayList";
import toast from "react-hot-toast";
import { textOutputForCreate } from "../Utilities/OutputText/TextOutput";

function SearchForPlayList(props: any) {
  const [songsInList, setSongs] = useState([]);

  const playListId: number = props.playListId;

  async function handleData() {
    try {
      const music = await GetAllSongs();

      const songsNotInPlaylist = music.filter((song: any) => {
        // Check if the song is not in the playlist by comparing the 'id' or any other unique identifier
        return !props.SongsInCurrentPlayList.some(
          (playlistSong: any) => playlistSong.id === song.id
        );
      });

      setSongs(songsNotInPlaylist);
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API request
    }
  }

  function handleClickAdd(songId: any) {
    if (songId || playListId) {
      AddSongSongToThePlayList(songId, playListId);
      toast.success(textOutputForCreate.songAddToPlaylist);
    }
  }

  useEffect(() => {
    handleData();
  }, [playListId, props.SongsInCurrentPlayList]);

  const songsInPlaylist = songsInList.map((musicData: any, index: any) => {
    if (musicData.id) {
      return (
        <ul className="list-group">
          <a>
            <li className="list-group-item">
              <span className="songInfo">
                <img
                  src={urlCalls.Base + musicData.PhotoCover}
                  className="rounded-0 float-start"
                  alt="..."
                />
                <span className="songDetails">
                  <span className="songName">{musicData.Title}</span>
                  <span className="ArtistName">{musicData.Artist}</span>
                </span>
              </span>
              <span
                className="AddButton"
                onClick={() => handleClickAdd(musicData.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </span>
            </li>
          </a>
        </ul>
      );
    }
  });
  return (
    <div className="SongsInList paddinTop">
      <div className="row">
        <div className="col-4">
          <p>Let's find something for your playlist</p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for songs..."
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      {songsInPlaylist}
    </div>
  );
}

export default SearchForPlayList;
