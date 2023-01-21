import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetLikesBySongId(songId: string) {
  return axios
    .get(urlCalls.GetLikesBySongId + songId)
    .then((response) => response.data);
}

export default GetLikesBySongId;
