import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import CreateNewPlayListAddSong from "../Utilities/ApiCalls/CreateNewPlayListAddSong";
import {UserDetails} from "../components/UserDetails";
import LinesEllipsis from "./LinesEllipsis";
import { TextOutput } from "../Utilities/OutputText/TextOutput";

function Search(props: any) {
  const [show, setShow] = useState(false);
  const [songsInList, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [playlistInfo, setPlaylistInfo] = useState<{
    message: string;
    playlist: { id: number; name: string; description: string };
  } | null>(null);

  const location = useLocation();
  const [userId, setUserId] = useState<number | undefined>();

  const fetchUserId = async () => {
    const userDetails = await UserDetails();
    setUserId(userDetails?.userId);
  };

  useEffect(() => {
    fetchUserId();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleLoadingData();
    if (location.pathname !== "/createPlaylists") {
      setPlaylistInfo(null);
    }
  }, [location.pathname]);

  const handleLoadingData = async () => {
    const music = await GetAllSongs();
    setSongs(music);
  };

  const handleAddSongToPlayList = async (songId: number) => {
    if (!userId) {
      alert("Please log in to add songs to a playlist.");
      return;
    }

    try {
      if (!playlistInfo) {
        const newPlaylist = await CreateNewPlayListAddSong(songId, true);
        setPlaylistInfo(newPlaylist);
        toast.success(TextOutput.createdPlaylist);
      } else if (playlistInfo.playlist?.id) {
        const updatedPlaylist = await CreateNewPlayListAddSong(songId, false, playlistInfo.playlist.id);
        setPlaylistInfo(updatedPlaylist);
        toast.success(TextOutput.songAddedToPlaylist);
      }
    } catch (error) {
      console.error("Error adding song to playlist:", error);
    }
  };

  const searchOutputForFlatSearch = songsInList
    .filter((data: any) =>
      data.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3)
    .map((musicData: any) => (
      <ul key={musicData.id} className="list-group">
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
            onClick={() => handleAddSongToPlayList(musicData.id)}
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
    ));

  const searchOutputForPopUpSearch = songsInList
    .filter((data: any) =>
      data.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 7)
    .map((musicData: any) => (
      <Link
        key={musicData.id}
        className="list-group-item list-group-item-action"
        to={`/browse/${musicData.id}`}
        onClick={handleClose}
      >
        <LinesEllipsis text={musicData.Title} from={"songData.Title"} />
      </Link>
    ));

  const handleNotFoundSearch = () => {
    if (searchOutputForPopUpSearch.length > 0) return null;

    return (
      <div className="DocSearch-Dropdown">
        <div className="DocSearch-NoResults">
          <div className="DocSearch-Screen-Icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
            </svg>
          </div>
          <p className="DocSearch-Title text-wrap">
            No results for "
            <strong>
              <LinesEllipsis text={searchQuery} from={"songData.Title"} />
            </strong>
            "
          </p>
          <div className="DocSearch-NoResults-Prefill-List">
            <p className="DocSearch-Help">Try searching for something else:</p>
          </div>
        </div>
      </div>
    );
  };

  const flatSearch = () => (
    <div className="SongsInList paddinTop">
      <div className="row">
        <div className="col-4">
          <p>Let's find something for your playlist==</p>
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      {searchOutputForFlatSearch}
    </div>
  );

  const PopUpSearch = () => (
    <div>
      <span onClick={handleShow}>
        <i className="fa fa-search"></i> Search
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="input-group searchQuery">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a song..."
              aria-label="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="list-group searchedData">
            {searchOutputForPopUpSearch}
          </div>
          {handleNotFoundSearch()}
        </Modal.Body>
      </Modal>
    </div>
  );

  return <div>{props.value === "popUp" ? PopUpSearch() : flatSearch()}</div>;
}

export default Search;
