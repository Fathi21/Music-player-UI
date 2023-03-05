import UserDetails from "../../components/UserDetails";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetAllLikedSongsByUser() {
  return await axios
    .get(urlCalls.GetAllLikedSongsByUser + UserDetails().userId)
    .then((response) => response);
}

export default GetAllLikedSongsByUser;
