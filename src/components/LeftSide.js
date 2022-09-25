import ListGroup from "react-bootstrap/ListGroup";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div className="LeftSide d-none d-md-block bg-light sidebar">
      <Link to="/">
        <div className="Logo">
          <h1>Melody</h1>
        </div>
      </Link>

      <div className="ListLeftNav">
        <ListGroup variant="flush">
          <Link to="/">
            <ListGroup.Item>
              <i className="fa fa-home" aria-hidden="true"></i> Home
            </ListGroup.Item>
          </Link>
          <ListGroup.Item>
            <i className="fa fa-search" aria-hidden="true"></i> Search
          </ListGroup.Item>
          <ListGroup.Item>
            <i className="fa fa-book" aria-hidden="true"></i> library
          </ListGroup.Item>

          <span className="line"></span>
          <span className="createPlayList">
            <ListGroup.Item>
              <i className="fa fa-plus-square" aria-hidden="true"></i> Create
              Playlist
            </ListGroup.Item>
          </span>

          <ListGroup.Item>
            <i className="fa fa-heart" aria-hidden="true"></i> Liked Songs
          </ListGroup.Item>

          <span>
            <Link to="/register">
              <ListGroup.Item> Sign Up</ListGroup.Item>
            </Link>

            <ListGroup.Item> Sign In</ListGroup.Item>

            <ListGroup.Item> Sharif</ListGroup.Item>

            <ListGroup.Item> Logout</ListGroup.Item>
          </span>
        </ListGroup>
      </div>
    </div>
  );
}

export default LeftSide;
