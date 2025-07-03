import React, { useState, useEffect } from "react";
import {UserDetails} from "../components/UserDetails";
import GetPlayListById from "../Utilities/ApiCalls/GetPlayListById";


function PlayListCard(props: any) {
  const { id } = props;
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const userDetails = await UserDetails();
        setUserName(userDetails?.username || "");
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }

    fetchUserDetails();
  }, []);

  const [playListData, setPlayListData] = useState({
    id: "",
    PlayListName: "",
    Description: "",
    PhotoCover: "",
    CreatedAt: "",
    UserId: 1,
  });

  async function fetchPlayListData() {
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
      console.error("Error fetching playlist data:", error);
    }
  };

  // Check if modal is open from EditPlayList.tsx

  useEffect(() => {
    const modalElement = document.getElementById("exampleModal");
  
    const handleShow = () => {
      fetchPlayListData();
    };
  
    const handleHide = () => {
      fetchPlayListData();
    };
  
    if (modalElement) {
      modalElement.addEventListener("shown.bs.modal", handleShow);
      modalElement.addEventListener("hidden.bs.modal", handleHide);
    }
  
    return () => {
      if (modalElement) {
        modalElement.removeEventListener("shown.bs.modal", handleShow);
        modalElement.removeEventListener("hidden.bs.modal", handleHide);
      }
    };
  }, []);
  


  useEffect(() => {
    
    fetchPlayListData();
  }, [id]);

  return (
    <div className="row align-items-md-stretch">
      <div className="col-md-12">
        <div className="h-100 p-4 backgroundColorCreatePlayList rounded-0">
          <div className="row">
            <div className="col-3">
              <img
                src={
                  playListData.PhotoCover ||
                  "https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                className="rounded-0 float-start"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
                alt={playListData.PlayListName || "Playlist Cover"}
              />
            </div>
            <div className="col-9">
              <p className="playList">Playlistss</p>
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
};

export default PlayListCard;
