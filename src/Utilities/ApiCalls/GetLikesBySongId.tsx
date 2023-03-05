import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetLikesBySongId(songId: string) {
  return await axios
    .get(urlCalls.GetLikesBySongId + songId)
    .then((response) => response.data);
}

export default GetLikesBySongId;
