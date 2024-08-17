import React, { useState, useEffect, useContext } from "react";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import AddSongToThePlayList from "../Utilities/ApiCalls/AddSongToThePlayList";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { Link, useLocation, useNavigate, HashRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import LinesEllipsis from "./LinesEllipsis";
import { Context } from "./sideBar";

function Search(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [songsInList, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Use the context value
  const playListData = useContext(Context);

  console.log("Received Playlist Data in Search Component:", playListData);

  const handleLoadingData = async () => {
    const music = await GetAllSongs();
    setSongs(music);
  };

  function handleAddSongToPlayList(songId: any) {
    // Assuming playListData contains an object with playListId
    // if (songId && playListData.playListId) {
    //   AddSongToThePlayList(songId, playListData.playListId);
    //   // Assuming you're using toast for notifications
    //   toast.success("Song added to playlist!");
    // }
  }

  const searchOutputForFlatSearch = songsInList
    .filter((data: any) =>
      data.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 3)
    .map((musicData: any) => {
      if (musicData.id) {
        return (
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
        );
      }
    });

  const searchOutputForPopUpSearch = songsInList
    .filter((data: any) =>
      data.Title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 7)
    .map((musicData: any, index) => (
      <Link
        key={musicData.id}
        className="list-group-item list-group-item-action"
        to={"/browse/" + musicData.id}
        onClick={handleClose}
      >
        <LinesEllipsis text={musicData.Title} from={"songData.Title"} />
      </Link>
    ));

  function handleNotFoundSearch() {
    if (searchOutputForPopUpSearch.length < 1) {
      return (
        <div className="DocSearch-Dropdown">
          <div className="DocSearch-NoResults">
            <div className="DocSearch-Screen-Icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
              </svg>
            </div>
            <p className="DocSearch-Title text-wrap">
              No results for "
              <strong>
                {" "}
                <LinesEllipsis text={searchQuery} from={"songData.Title"} />
              </strong>
              "
            </p>
            <div className="DocSearch-NoResults-Prefill-List">
              <p className="DocSearch-Help">
                Try searching for somthing esle, please:
              </p>
            </div>
          </div>
        </div>
      );
    }
  }

  function flatSearch() {
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
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {searchOutputForFlatSearch}
      </div>
    );
  }

  function PopUpSearch() {
    return (
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
                aria-describedby="basic-addon1"
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
  }

  useEffect(() => {
    handleLoadingData();
  }, [0]);

  return <div>{props.value === "popUp" ? PopUpSearch() : flatSearch()}</div>;
}

export default Search;
