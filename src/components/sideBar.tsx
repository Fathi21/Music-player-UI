import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useHistory } from "react-router-dom";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import IsUserLoggedIn from "./IsUserLoggedIn";
import UserDetails from "./UserDetails";
import Logout from "./Logout";
import Search from "./Search";

function SideBar() {
  let history = useHistory();

  const userName = UserDetails().username;
  const [username, setUsername] = useState(userName);

  function handleLogout() {
    Logout();
    history.push("/login");
    //let history = useHistory();

    //return history.push("/login");
  }
  function HandleSignUpAndSignIn() {
    if (IsUserLoggedIn()) {
      return (
        <div>
          <span className="libraryLink">
            <ListGroup.Item className="sideBarButton">
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
              My library
            </ListGroup.Item>
          </span>

          <span className="createPlayList">
            <ListGroup.Item className="sideBarButton">
              <Link to={RoutePath.CreatePlayList}>
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
            <Search />
          </ListGroup.Item>
          <span className="line"></span>

          {HandleSignUpAndSignIn()}
        </ListGroup>
      </div>
    </div>
  );
}

export default SideBar;
