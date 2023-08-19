import React, { useState, useEffect } from "react";
import UserDetails from "../components/UserDetails";
import GetPlayListById from "../Utilities/ApiCalls/GetPlayListById";

function PlayListCard(props: any) {
  const userName = UserDetails().username;

  const [playListData, setPlayListData] = useState({
    id: "",
    PlayListName: "",
    Description: "",
    PhotoCover: "",
    CreatedAt: "",
    UserId: 1,
  });

  async function handleData() {
    try {
      const playList = await GetPlayListById(props.id);

      setPlayListData((prev) => ({
        id: "",
        PlayListName: playList.data.PlayListName,
        Description: "",
        PhotoCover: "",
        CreatedAt: "",
        UserId: 1,
      }));
    } catch (error) {
      console.error(error);
      // Handle any errors that occurred during the API request
    }
  }

  useEffect(() => {
    handleData();
  }, [props.id]);
  return (
    <div className="row align-items-md-stretch">
      <div className="col-md-12">
        <div className="h-100 p-4 backgroundColorCreatePlayList rounded-0">
          <div className="row">
            <div className="col-3">
              <img
                src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="rounded-0 float-start"
                alt="..."
              />
            </div>
            <div className="col-9">
              <p className="playList">playlist</p>
              <h1
                className="playlistInput"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                {playListData.PlayListName}
              </h1>
              <p className="username">{userName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayListCard;
