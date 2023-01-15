import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import IsUserLoggedIn from "./IsUserLoggedIn";
import UserDetails from "./UserDetails";

function SideBar() {
  const userName = UserDetails().username;
  console.log(userName);
  const [isLoggedIn, setisLoggedIn] = useState(IsUserLoggedIn());
  const [username, setUsername] = useState(userName);
  console.log(IsUserLoggedIn());
  console.log(UserDetails().email);

  function HandleSignUpAndSignIn() {
    if (isLoggedIn) {
      return (
        <div>
          <span className="createPlayList">
            <ListGroup.Item>
              <i className="fa fa-plus-square" aria-hidden="true"></i>
              Create Playlist
            </ListGroup.Item>
          </span>

          <ListGroup.Item>
            <i className="fa fa-heart" aria-hidden="true"></i>Liked Songs
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fas fa-users-cog"></i>
            {username}
          </ListGroup.Item>

          <ListGroup.Item>Logout</ListGroup.Item>
        </div>
      );
    } else {
      return (
        <div className="signUpAndSignIn">
          <Link to={RoutePath.registerPage}>
            <ListGroup.Item>Sign Up</ListGroup.Item>
          </Link>
          <Link to={RoutePath.loginPage}>
            <ListGroup.Item>Sign In</ListGroup.Item>
          </Link>
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
          <Link to={RoutePath.homePage}>
            <ListGroup.Item>
              <i className="fa fa-home" aria-hidden="true"></i>Home
            </ListGroup.Item>
          </Link>
          <ListGroup.Item>
            <i className="fa fa-search" aria-hidden="true"></i>Search
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fa fa-book" aria-hidden="true"></i>library
          </ListGroup.Item>
          <span className="line"></span>

          {HandleSignUpAndSignIn()}
        </ListGroup>
      </div>
    </div>
  );
}

export default SideBar;
