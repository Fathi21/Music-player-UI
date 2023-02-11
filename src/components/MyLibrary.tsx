import React, { useState, useEffect, useRef } from "react";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetPlayList from "../Utilities/ApiCalls/GetPlayList";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function MyLibrary() {
  const playList = GetPlayList();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchInput, setSearchInput] = useState("");

  const searchOutput = playList
    .filter((data: any) => data.PlayListName.includes(searchInput))
    .slice(0, 7)
    .map((playListData: any, index) => (
      <Link
        key={playListData.id}
        className="list-group-item list-group-item-action"
        to={RoutePath.browse + playListData.id}
      >
        {playListData.PlayListName}
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
              No results for "<strong>{searchInput}</strong>"
            </p>
            <div className="DocSearch-NoResults-Prefill-List">
              <p className="DocSearch-Help">Try searching for:</p>
              <ul>
                <li>
                  <button className="DocSearch-Prefill" type="button">
                    Validation
                  </button>
                </li>
                <li>
                  <button className="DocSearch-Prefill" type="button">
                    Offcanvas
                  </button>
                </li>
                <li>
                  <button className="DocSearch-Prefill" type="button">
                    RFS
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <span onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-collection-play"
          viewBox="0 0 16 16"
        >
          <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
          <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
        </svg>{" "}
        My Library
      </span>

      <Modal className="allPlayList" show={show} onHide={handleClose}>
        <Modal.Header>
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            My library
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body>
          <div className="list-group playListData">{searchOutput}</div>
          {handleNotFoundSearch()}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyLibrary;
