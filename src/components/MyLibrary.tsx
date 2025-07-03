import React, { useState, useEffect, useRef } from "react";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetPlayList from "../Utilities/ApiCalls/GetPlayList";
import { Link, useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Collapse, Button, Card } from "react-bootstrap";
import {UserDetails} from "./UserDetails";

function MyLibrary() {
  const [playList, setPlayList] = useState([]);

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchInput, setSearchInput] = useState("");

  async function handleData() {
    try {
      const playList = await GetPlayList();
      const userDetails = await UserDetails();
      const userId = userDetails?.userId;
      const playListForLoggedInUser = playList.filter((playListData: any) => {
        if (playListData.UserId == userId) {
          return playListData;
        }
      });

      setPlayList(playListForLoggedInUser);
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API request
    }
  }

  const handleRenderPlayList = playList.map((playListData: any, index) => (
    <Link key={playListData.id} to={"/playlist/" + playListData.id}>
      {playListData.PlayListName}
    </Link>
  ));

  useEffect(() => {
    handleData();
  }, [open, show]);

  return (
    <div>
      <span
        onClick={() => {
          setOpen(!open);
        }}
      >
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
        </svg>

        <span onClick={() => setOpen(!open)} aria-expanded={open}>
          My Library
        </span>

        <Collapse in={open} className="collapse-playList">
          <span>{handleRenderPlayList}</span>
        </Collapse>
      </span>
    </div>
  );
}

export default MyLibrary;
