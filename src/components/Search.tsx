import React, { useState, useEffect, useRef } from "react";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Search() {
  const music = GetAllSongs();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchInput, setSearchInput] = useState("");

  const searchOutput = music
    .filter((data: any) => data.Title.includes(searchInput))
    .slice(0, 7)
    .map((musicData: any, index) => (
      <Link
        key={musicData.id}
        className="list-group-item list-group-item-action"
        to={RoutePath.browse + musicData.id}
      >
        {musicData.Title}
      </Link>
    ));

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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Search;
