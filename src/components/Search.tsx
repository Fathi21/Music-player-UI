import React from "react";

function Search() {
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
                  placeholder="Search for songs..."
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
            <div className="modal-body">
              <div className="DocSearch-Hit-source">Results</div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
