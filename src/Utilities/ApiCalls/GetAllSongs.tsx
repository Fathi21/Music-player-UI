import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetAllSongs() {
  return await axios
    .get(urlCalls.GetAllMusic)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error!", error);
    });
}

export default GetAllSongs;
