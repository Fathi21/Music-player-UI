import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate, HashRouter } from "react-router-dom";
import GetAllLikedSongsByUser from "../Utilities/ApiCalls/GetAllLikedSongsByUser";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import GetLikesBySongId from "../Utilities/ApiCalls/GetLikesBySongId";
import LinesEllipsis from "./LinesEllipsis";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";

function AllLikedSongsByActiveUser() {
  const music = GetAllSongs();

  const [searchInput, setSearchInput] = useState("");
  const [likedSongs, setLikedSongs] = useState([]);

  function handleLikedSongs() {
    GetAllLikedSongsByUser().then(function (result) {
      setLikedSongs(result.data);
    });
  }
  const likedMusic = likedSongs.map((like: any) => {
    return music.find((musicData: any) => musicData.id === like.SongID);
  });

  const searchOutput = likedMusic
    .filter(
      (data: any) =>
        data && data.Title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .slice(0, 7)
    .map((musicData: any, index) => {
      if (musicData) {
        return (
          <Link
            key={musicData.id}
            className="list-group"
            to={"/browse/" + musicData.id}
          >
            <li className="list-group-item">
              <span className="songInfo">
                <img
                  src={urlCalls.Base + musicData.PhotoCover}
                  className="rounded-0 float-start"
                  alt="..."
                />
                <span className="songDetails">
                  <span className="songName">
                    <LinesEllipsis
                      text={musicData.Title}
                      from={"songData.Title"}
                    />
                  </span>
                  <span className="ArtistName">
                    <LinesEllipsis
                      text={musicData.Artist}
                      from={"musicData.Artist"}
                    />
                  </span>
                </span>
              </span>
              <span className="HeartIcon">
                <i className="fas fa-heart"></i>
              </span>
            </li>
          </Link>
        );
      }
    });

  useEffect(() => {
    handleLikedSongs();
  }, [0]);

  return (
    <div className="SongsInList paddinTop">
      <div className="row">
        <div className="col-4">
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
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </div>
        </div>
      </div>
      <ul className="list-group">{searchOutput}</ul>
    </div>
  );
}

export default AllLikedSongsByActiveUser;
