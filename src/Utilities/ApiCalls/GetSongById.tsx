import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetSongById(id: any) {
  return axios.get(urlCalls.GetSongById + id).then((response) => response.data);
}

export default GetSongById;
