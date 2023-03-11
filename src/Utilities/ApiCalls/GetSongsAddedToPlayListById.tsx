import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetSongsAddedToPlayListById(PlayListId: string) {
  return await axios
    .get(urlCalls.GetSongsAddedToPlayListById + PlayListId)
    .then((response) => response.data);
}

export default GetSongsAddedToPlayListById;
