import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import SideBar from "../components/SideBar";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";

function Home() {
  const music = GetAllSongs();

  const listMusic = music.map((musicData: any, index) => (
    <div key={musicData.id} className="col">
      <Link to={RoutePath.browse + musicData.id}>
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
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10 Main-righSide">
        <div className="row">
          <Spinner data={music.length} />
          {listMusic}
        </div>
      </div>
    </div>
  );
}

export default Home;
