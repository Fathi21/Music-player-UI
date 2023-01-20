import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetAllLikedSongs() {
  return axios.get(urlCalls.ExistUsers).then((response) => response.data);
}

export default GetAllLikedSongs;
