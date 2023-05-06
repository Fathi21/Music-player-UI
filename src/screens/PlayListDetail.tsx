import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import Spinner from "../components/Spinner";
import RedirectIfUserLoggedOut from "../components/RedirectIfUserLoggedOut";
import GetPlayListById from "../Utilities/ApiCalls/GetPlayListById";
import GetSongsAddedToPlayListById from "../Utilities/ApiCalls/GetSongsAddedToPlayListById";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import GetUserById from "../Utilities/ApiCalls/GetUserById";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import Moment from "react-moment";
import PlaySongFromPlayList from "../components/MusicPlayer";

function PlayListDetail() {
  RedirectIfUserLoggedOut();
  const { id }: any = useParams();
  const music = GetAllSongs();

  const [SongsInCurrentPlayList, setSongsInCurrentPlayList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [playListData, setPlayListData] = useState({
    id: "",
    PlayListName: "",
    Description: "",
    PhotoCover: "",
    CreatedAt: "",
    UserId: 1,
  });

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

  function handleRenderPlayListDetails() {
    GetPlayListById(id).then(function (result) {
      setPlayListData((prev) => ({
        id: result.data[0].id,
        PlayListName: result.data[0].PlayListName,
        Description: result.data[0].Description,
        PhotoCover: result.data[0].PhotoCover,
        CreatedAt: result.data[0].CreatedAt,
        UserId: result.data[0].UserId,
      }));

      GetUserById(result.data[0].UserId).then(function (result) {
        setUsername(result[0].username);
      });
    });

    GetSongsAddedToPlayListById(id).then(function (result) {
      setSongsInCurrentPlayList(result);
    });
  }

  const songsInPlayList = SongsInCurrentPlayList.map((like: any) => {
    return music.find((musicData: any) => musicData.id === like.SongID);
  });
  const [selectedMusic, setSelectedMusic] = useState(null);

  // const selectMusicById = (id: any) => {
  //   const index = songsInPlayList.findIndex((item: any) => item.id === id);
  //   if (index !== -1) {
  //     console.log(item);
  //     // setSelectedMusic({
  //     //   current: item[index],
  //     //   prev: item[index - 1] || null,
  //     //   next: musicData[index + 1] || null,
  //     // });
  //   }
  // };

  const searchOutput = songsInPlayList
    // .slice(0, 7)
    .map((musicData: any, index) => {
      if (musicData) {
        return (
          <a key={musicData.id}>
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
              <span className="playButtonToPlayList">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-play-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-stop-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.5 5A1.5 1.5 0 0 0 5 6.5v3A1.5 1.5 0 0 0 6.5 11h3A1.5 1.5 0 0 0 11 9.5v-3A1.5 1.5 0 0 0 9.5 5h-3z" />
                </svg>
              </span>
            </li>
          </a>
        );
      }
    });

  function handleToPlaySongFromPlayList() {
    const randomIndex = Math.floor(Math.random() * 3);
    //Return the song at the random index
    return songsInPlayList[2];
  }

  useEffect(() => {
    handleRenderPlayListDetails();
  }, [id]);

  // console.log("playList: ", playListData.UserId == userData);
  return (
    <div className="mainPlayList">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>

        <div className="col-10">
          <Spinner data={2} />
          <div className="row align-items-md-stretch">
            <div className="col-md-12">
              <div className="h-100 p-4 backgroundColorCreatePlayList rounded-0">
                <div className="row PlayListBorderAround">
                  <div className="col-3">
                    <img
                      src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      className="rounded-0 float-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <h1
                      className="playlistInput"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      {playListData.PlayListName}
                    </h1>
                    <p className="text-start Owner-name-and-date">
                      {/* <LinesEllipsis
                        text={playListData.PlayListName}
                        from={"songData.Artist"}
                      /> */}
                      {username}
                      <i className="fas fa-circle"></i>
                      <span className="DateCreatedAt">
                        <Moment fromNow>{playListData.CreatedAt}</Moment>
                      </span>
                    </p>
                    <PlaySongFromPlayList playListId={id} />
                    <ReactAudioPlayer
                      //src={urlCalls.Base + songsInPlayList[0].MusicFile}
                      autoPlay
                      controls
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                  />
                </div>
              </div>
            </div>
            <ul className="list-group">
              <div className="header">
                <p className="NumberOfSongs">#{songsInPlayList.length} songs</p>
              </div>
              {searchOutput}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListDetail;
