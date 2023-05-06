import UserDetails from "../../components/UserDetails";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetRandomSongfromPlaylist(id: any) {
  return await axios
    .get(urlCalls.GetRandomSongfromPlaylist + id)
    .then((response) => response);
}

export default GetRandomSongfromPlaylist;
