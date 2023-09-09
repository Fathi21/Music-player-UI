import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import Spinner from "../components/Spinner";
import RedirectIfUserLoggedOut from "../components/RedirectIfUserLoggedOut";
import GetSongsAddedToPlayListById from "../Utilities/ApiCalls/GetSongsAddedToPlayListById";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import GetUserById from "../Utilities/ApiCalls/GetUserById";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import Moment from "react-moment";
import MusicPlayer from "../components/MusicPlayer";
import { List } from "cypress/types/lodash";
import { ArrayBindingElement } from "typescript";
import PlayListCard from "../components/PlayListCard";
import SearchForPlayList from "../components/SearchForPlayList";

function PlayListDetail() {
  RedirectIfUserLoggedOut();
  const { id }: any = useParams();
  const music = GetAllSongs();

  const [SongsInCurrentPlayList, setSongsInCurrentPlayList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [songData, setSongData] = useState({
    Artist: "",
    CategoryId: "",
    CreatedAt: "",
    MusicFile: "",
    PhotoCover: "",
    Title: "",
    UserId: "",
    id: "",
  });
  const [username, setUsername] = useState("");

  const [PlayingSong, setPlayingSong] = useState(Number);

  const [songId, setSongId] = useState();

  const [songs, setsongs] = useState([]);

  const [toggle, setToggle] = useState(false);

  const [hideOpenCloseButton, setHideOpenCloseButton] = useState(true);

  console.log(SongsInCurrentPlayList);

  function handleRandomSong(songs: any) {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex].id;
  }

  const handleClickSong = (id: number) => {
    setPlayingSong(id);
  };

  async function handleData() {
    try {
      const songgFromPlayList = await GetSongsAddedToPlayListById(id);

      const music = await GetAllSongs();

      setsongs(music);

      if (songgFromPlayList.length > 0) {
        setPlayingSong(handleRandomSong(songgFromPlayList));
        setPlayingSong(handleRandomSong(songgFromPlayList));
        setSongsInCurrentPlayList(songgFromPlayList); // Access the data retrieved from the API
        // Continue with further processing or UI updates
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API request
    }
  }

  const songsInPlaylist =
    SongsInCurrentPlayList.length != 0
      ? SongsInCurrentPlayList.map((musicData: any, index: any) => {
          if (musicData.id === PlayingSong) {
            return null; // Skip this iteration of the loop
          } else {
            return (
              <a
                key={musicData.id}
                onClick={() => handleClickSong(musicData.id)}
              >
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
                </li>
              </a>
            );
          }
        })
      : "";

  function handleLoadingPlaylist() {
    if (!PlayingSong) {
      return <PlayListCard id={id} />;
    } else {
      return <MusicPlayer data={PlayingSong} />;
    }
  }

  function handleToggleSongsSearch() {
    // Toggle the 'toggle' state by negating its current value
    setToggle((prevToggle) => !prevToggle);

    // Toggle the 'hideOpenCloseButton' state by negating its current value
    setHideOpenCloseButton(
      (prevHideOpenCloseButton) => !prevHideOpenCloseButton
    );
  }

  useEffect(() => {
    handleData();
    handleLoadingPlaylist();
    setPlayingSong(Number.NaN);
    setSongsInCurrentPlayList([]);
  }, [id]);

  console.log();
  return (
    <div className="mainPlayList">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>

        <div className="col-10">
          {handleLoadingPlaylist()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots dropdown-toggle"
            viewBox="0 0 16 16"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <ul className="dropdown-menu">
            <li
              className="list-group-item EditButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
              Edit
            </li>
            <li className="list-group-item DeleteButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
              </svg>
              Delete
            </li>
          </ul>
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog EditPlayList">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Edit details
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        className="rounded-0 float-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-8">
                      <div className="mb-3 playlistName">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Add name"
                        />
                      </div>
                      <div className="mb-3 playlistDescription">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          placeholder="Add an optional description"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SongsInList">
            <ul className="list-group">
              <div className="header">
                <p className="NumberOfSongs">
                  {SongsInCurrentPlayList.length >= 0
                    ? SongsInCurrentPlayList.length + " songs"
                    : "ss"}
                </p>
                <span
                  onClick={handleToggleSongsSearch}
                  id={hideOpenCloseButton ? "" : "Toggle"}
                  className="Open"
                >
                  Open
                </span>
                <span
                  onClick={handleToggleSongsSearch}
                  id={hideOpenCloseButton ? "Toggle" : ""}
                  className="Close"
                >
                  Close
                </span>
              </div>

              {hideOpenCloseButton ? songsInPlaylist : ""}
            </ul>
          </div>
          {SongsInCurrentPlayList.length >= 0 ? (
            toggle ? (
              <SearchForPlayList data={id} />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayListDetail;
