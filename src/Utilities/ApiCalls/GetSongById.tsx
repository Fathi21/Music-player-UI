import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetSongById(id: any) {
  return await axios
    .get(urlCalls.GetSongById + id)
    .then((response) => response.data);
}

export default GetSongById;
