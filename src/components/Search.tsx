import React, { useState } from "react";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { Link } from "react-router-dom";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";

function Search() {
  const music = GetAllSongs();

  const [searchInput, setSearchInput] = useState("");

  const listMusic = music.map((musicData: any, index) => (
    <Link
      key={musicData.id}
      className="list-group-item list-group-item-action"
      to={RoutePath.browse + musicData.id}
    >
      {musicData.Title}
    </Link>
  ));

  return (
    <div>
      <i
        className="fa fa-search"
        aria-hidden="true"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      ></i>
      Search
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="input-group searchInput">
                <span className="input-group-text" id="basic-addon1">
                  <i className="fa fa-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a song..."
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setSearchInput(e.target.value)}
                  value={searchInput}
                />
              </div>
            </div>
            <div className="modal-body">
              <div className="DocSearch-Hit-source">Results</div>
              <div className="list-group searchedData">{listMusic}</div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
