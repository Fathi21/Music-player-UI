import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import LeftSide from "./LeftSide";
import { urlCalls } from "../Utilities/Enums/ApiUrlCalls";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";

function CardMusic() {
  const music = GetAllSongs();

  const listMusic = music.map((musicData: any, index) => (
    <div className="col">
      <Link to={"browse/" + musicData.id}>
        <Card key={index}>
          <Card.Img variant="top" src={urlCalls.Base + musicData.PhotoCover} />
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
          <Spinner data={music.length} />
          {listMusic}
        </div>
      </div>
    </div>
  );
}

export default CardMusic;
