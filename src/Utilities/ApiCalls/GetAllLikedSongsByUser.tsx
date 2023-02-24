import UserDetails from "../../components/UserDetails";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetAllLikedSongsByUser() {
  return axios
    .get(urlCalls.GetAllLikedSongsByUser + UserDetails().userId)
    .then((response) => response);
}

export default GetAllLikedSongsByUser;
