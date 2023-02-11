import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetPlayList() {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    axios
      .get(urlCalls.GetPlayList)
      .then((response) => setPlayList(response.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [0]);

  return playList;
}

export default GetPlayList;
