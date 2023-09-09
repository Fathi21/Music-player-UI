import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetLikesBySongId` is an asynchronous function that makes a GET request to a specific
 * URL to retrieve the likes for a song based on its ID.
 * @param {Number} songId - The songId parameter is a number that represents the unique identifier of a
 * song. It is used to retrieve the likes associated with that particular song.
 * @returns a promise that resolves to the data returned by the axios GET request.
 */
async function GetLikesBySongId(songId: Number) {
  return await axios
    .get(urlCalls.GetLikesBySongId + songId)
    .then((response) => response.data);
}

export default GetLikesBySongId;
