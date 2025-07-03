import {UserDetails} from "../../components/UserDetails";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
/**
 * The function `GetAllLikedSongsByUser` makes an asynchronous HTTP GET request to retrieve all liked
 * songs by a user.
 * @returns a promise that resolves to the response object from the axios GET request.
 */

async function GetAllLikedSongsByUser() {
  const userDetails = await UserDetails();
  const userId = userDetails?.userId;
  return await axios
    .get(urlCalls.GetAllLikedSongsByUser + userId)
    .then((response) => response);
}

export default GetAllLikedSongsByUser;
