import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import SideBar from "../components/sideBar";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import LinesEllipsis from "../components/LinesEllipsis";

function Home() {
  const [songs, setsongs] = useState([]);

  const handleLoadingData = async () => {
    const music = await GetAllSongs();
    // Rest of your code here
    setsongs(music);
  };

  const listMusic = songs.map((musicData: any, index) => (
    <div key={musicData.id} className="col">
      <Link to={RoutePath.browse + musicData.id}>
        <Card key={index}>
          <Card.Img variant="top" src={urlCalls.Base + musicData.PhotoCover} />
          <Card.Body>
            <div className="Title">
              <Card.Text>
                <LinesEllipsis
                  text={musicData.Title}
                  from={"musicData.Title"}
                />
              </Card.Text>
            </div>

            <div className="SongName">
              <Card.Text>
                <LinesEllipsis
                  text={musicData.Artist}
                  from={"musicData.Artist"}
                />
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  ));

  useEffect(() => {
    handleLoadingData();
  }, [0]);

  return (
    <div className="row">
      <div className="col-2">
        <SideBar />
      </div>
      <div className="col-10 Main-righSide">
        <div className="row">
          <Spinner data={songs.length} />
          {listMusic}
        </div>
      </div>
    </div>
  );
}

export default Home;
