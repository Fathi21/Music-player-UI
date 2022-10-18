import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import LeftSide from "./LeftSide";
import { urlCalls } from "../utilities/ApiUrlCalls";

function CardMusic() {
  const [music, setmusic] = useState([]);

  const [HideSpinner, setHideSpinner] = useState("");

  function GetAllMusic() {
    axios
      .get(urlCalls.GetAllMusic)
      .then((response) => setmusic(response.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

  useEffect(() => {
    setTimeout(function () {
      GetAllMusic();
      setHideSpinner("hide");
    }, 500);
  }, [0]);

  const listMusic = music.map((musicData: any, index) => (
    <div className="col">
      <Link to={"browse/" + musicData.id}>
        <Card key={index}>
          <Card.Img
            variant="top"
            src={"http://127.0.0.1:8000" + musicData.PhotoCover}
          />
          <Card.Body>
            <div className="Title">
              <Card.Text>{musicData.Title}</Card.Text>
            </div>

            <div className="SongName">
              <Card.Text>Over my dead body</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  ));

  return (
    <div className="row">
      <div className="col-3 col-lg-3 fixed-top">
        <LeftSide />
      </div>
      <div className="col-9 Main-righSide">
        <p>Created for you</p>

        <div className="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
          <Spinner hide={HideSpinner} />
          {listMusic}
        </div>
      </div>
    </div>
  );
}

export default CardMusic;
