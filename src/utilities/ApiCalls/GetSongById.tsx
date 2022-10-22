import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";

function GetSongById(id: any) {
  const [music, setmusic] = useState([]);

  useEffect(() => {
    axios
      .get(urlCalls.GetSongById + id)
      .then((response) => setmusic(response.data))
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [0]);

  return music;
}

export default GetSongById;
