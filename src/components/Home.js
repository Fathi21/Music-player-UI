import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React, { useState, useEffect } from "react";
import CardMusic from "./CardMusic";

function RightSide() {
  return (
    <div className="RightSide Main">
      <p>Created for you</p>

      <Col className="Songs">
        <CardMusic />
      </Col>
    </div>
  );
}

export default RightSide;
