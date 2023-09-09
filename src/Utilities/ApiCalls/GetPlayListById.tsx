import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetPlayListById` is an asynchronous function that makes a GET request to a specific
 * URL to retrieve a playlist by its ID.
 * @param {number} id - The `id` parameter is a number that represents the unique identifier of a
 * playlist. It is used to retrieve a specific playlist from a server or API.
 * @returns a promise that resolves to the response object from the axios GET request.
 */
async function GetPlayListById(id: number) {
  return await axios
    .get(urlCalls.GetPlayListById + id)
    .then((response) => response);
}

export default GetPlayListById;
