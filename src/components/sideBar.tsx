import React, { useState, useEffect, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import IsUserLoggedIn from "./IsUserLoggedIn";
import UserDetails from "./UserDetails";
import Logout from "./Logout";
import MyLibrary from "./MyLibrary";
import CreateNewPlayList from "../Utilities/ApiCalls/CreateNewPlayList";
import { any } from "cypress/types/bluebird";
import Search from "./Search";

export const Context = React.createContext([44]);

function SideBar() {
  let navigate = useNavigate();

  const [username, setUsername] = useState(UserDetails().username);
  const [open, setOpen] = useState(false);
  const [playListData, setPlayListData] = useState([]);

  function handleLogout() {
    Logout();
    navigate("/login");
    //let history = useHistory();

    //return history.push("/login");
  }

  const handleCreateNewPlayList = async () => {
    const newPlayList = await CreateNewPlayList();
    setPlayListData(newPlayList);

    // if (newPlayList && Array.isArray(newPlayList)) {
    //   setPlayListData(111111);
    // } else {
    //   console.warn("Unexpected data format:", newPlayList);
    // }
  };

  console.log("New Playlist:", playListData); // Debugging line

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
                onClick={() => handleCreateNewPlayList()}
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
    <Context.Provider value={[5555]}>
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
    </Context.Provider>
  );
}

export default SideBar;
