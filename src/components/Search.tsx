import React, { useState, useEffect, useRef } from "react";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import { Link, useLocation, useNavigate, HashRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import LinesEllipsis from "./LinesEllipsis";

function Search() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchInput, setSearchInput] = useState("");
  const [songs, setsongs] = useState([]);

  const handleLoadingData = async () => {
    const music = await GetAllSongs();
    // Rest of your code here
    setsongs(music);
  };

  const searchOutput = songs
    .filter((data: any) =>
      data.Title.toLowerCase().includes(searchInput.toLowerCase())
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
    if (searchOutput.length < 1) {
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
                <LinesEllipsis text={searchInput} from={"songData.Title"} />
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
  useEffect(() => {
    handleLoadingData();
  }, [0]);

  return (
    <div>
      <span onClick={handleShow}>
        <i className="fa fa-search"></i> Search
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <div className="input-group searchInput">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a song..."
              aria-label="Search"
              aria-describedby="basic-addon1"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="list-group searchedData">{searchOutput}</div>
          {handleNotFoundSearch()}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Search;
