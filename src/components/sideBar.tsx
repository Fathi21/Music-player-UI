import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import IsUserLoggedIn from "./IsUserLoggedIn";
import {UserDetails} from "./UserDetails";
import Logout from "./Logout";
import MyLibrary from "./MyLibrary";
import Search from "./Search";

// export const Context = React.createContext([5555]);

function SideBar() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("Guest");

  const fetchUserId = async () => {
    const userDetails = await UserDetails();
    setUsername(userDetails?.username || "Guest");
  };

  React.useEffect(() => {
    fetchUserId();
  }, []);
  const [playListData, setPlayListData] = useState([]);

  function handleLogout() {
    Logout();
    navigate("/login");
  }

  const handleCreateNewPlayListAddSong = async () => {
    // try {
    //   const newPlayList = await CreateNewPlayListAddSong();
    //   setPlayListData(newPlayList);
    //   console.log("New Playlist:", newPlayList); // Debugging line
    // } catch (error) {
    //   console.error("Error creating playlist:", error);
    // }
  };

  function HandleSignUpAndSignIn() {
    if (IsUserLoggedIn()) {
      return (
        <div>
          <span className="libraryLink">
            <ListGroup.Item className="sideBarButton">
              <MyLibrary />
            </ListGroup.Item>
          </span>

          <span className="createPlayList">
            <ListGroup.Item className="sideBarButton">
              <Link
                onClick={handleCreateNewPlayListAddSong}
                to={RoutePath.CreatePlayList}
              >
                <i className="fa fa-plus-square" aria-hidden="true"></i>
                Create Playlist
              </Link>
            </ListGroup.Item>
          </span>

          <ListGroup.Item className="sideBarButton">
            <i className="fa fa-heart" aria-hidden="true"></i>Liked Songs
          </ListGroup.Item>
          <ListGroup.Item className="sideBarButton">
            <i className="fas fa-users-cog"></i>
            {username}
          </ListGroup.Item>

          <ListGroup.Item onClick={handleLogout} className="sideBarButton">
            Logout
          </ListGroup.Item>
        </div>
      );
    } else {
      return (
        <div className="signUpAndSignIn">
          <ListGroup.Item className="sideBarButton">
            <Link to={RoutePath.registerPage}>Sign Up</Link>
          </ListGroup.Item>
          <ListGroup.Item className="sideBarButton">
            <Link to={RoutePath.loginPage}>Sign In</Link>
          </ListGroup.Item>
        </div>
      );
    }
  }

  return (
      <div className="SideBar d-none d-md-block bg-light sidebar">
        <Link to={RoutePath.homePage}>
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>

        <div className="ListLeftNav">
          <ListGroup variant="flush">
            <ListGroup.Item className="sideBarButton">
              <Link to={RoutePath.homePage}>
                <i className="fa fa-home" aria-hidden="true"></i>Home
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="sideBarButton">
              <Search value={"popUp"} />
            </ListGroup.Item>
            <span className="line"></span>
            {HandleSignUpAndSignIn()}
          </ListGroup>
        </div>
      </div>
  );
}

export default SideBar;
