import React from "react";
import SideBar from "../components/SideBar";
import Spinner from "../components/Spinner";

function CreatePlayList() {
  return (
    <div className="mainPlayList">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Spinner data={2} />
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
                    <h1 className="playlistInput">my play list</h1>
                    <p className="username">Username</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots dropdown-toggle"
            viewBox="0 0 16 16"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <ul className="dropdown-menu">
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
              Edit
            </li>
            <li className="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
              </svg>
              Delete
            </li>
          </ul>

          <div className="songsToAddPlayList">
            <div className="row">
              <div className="col-4">
                <p>Let's find something for your playlist</p>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for songs..."
                    aria-label="search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <ul className="list-group">
              <li className="list-group-item">
                <img
                  src="https://images.pexels.com/photos/114820/pexels-photo-114820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="rounded-0 float-start"
                  alt="..."
                />
                <span className="">An item</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlayList;