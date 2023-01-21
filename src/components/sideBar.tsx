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
          <span className="createPlayList">
            <ListGroup.Item className="sideBarButton">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
              Create Playlist
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
