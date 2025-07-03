import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetRandomSongfromPlaylist` is an asynchronous function that makes a GET request to a
 * specific URL and returns the response.
 * @param {any} id - The `id` parameter is the identifier of the playlist from which you want to
 * retrieve a random song.
 * @returns a promise that resolves to the response from the axios GET request.
 */
async function GetRandomSongfromPlaylist(id: any) {
  return await axios
    .get(urlCalls.GetRandomSongfromPlaylist + id)
    .then((response) => response);
}

export default GetRandomSongfromPlaylist;
