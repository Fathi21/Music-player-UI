import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetAllSongs` makes an asynchronous HTTP GET request to a specified URL and returns the
 * response data, or logs an error if there is one.
 * @returns The function `GetAllSongs` is returning a promise that resolves to the data returned by the
 * axios GET request.
 */
async function GetAllSongs() {
  return await axios
    .get(urlCalls.GetAllMusic)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error!", error);
    });
}

export default GetAllSongs;
