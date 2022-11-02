import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetAllSongs() {
  const [music, setmusic] = useState([]);

  useEffect(() => {
    axios
      .get(urlCalls.GetAllMusic)
      .then((response) => setmusic(response.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [0]);

  return music;
}

export default GetAllSongs;
