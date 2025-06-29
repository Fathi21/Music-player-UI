import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `DeletePlaylist` is an asynchronous function that makes a DELETE request to a
 * specific URL to delete a playlist based on the playlist ID.
 * @param {Number} playlistId - The unique identifier of the playlist to be deleted.
 * @returns a promise that resolves to the data returned by the axios DELETE request.
 */
async function DeletePlaylist(playlistId: Number) {
    return await axios
        .delete(`${urlCalls.DeletePlayList}/${playlistId}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error deleting playlist:", error);
            throw error;
        });
}

export default DeletePlaylist;