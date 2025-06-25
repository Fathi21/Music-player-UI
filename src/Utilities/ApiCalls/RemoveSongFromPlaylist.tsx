import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `DeleteSongFromPlaylist` is an asynchronous function that makes a DELETE request to a
 * specific URL to remove a song from a playlist based on the song ID and playlist ID.
 * @param {Number} songId - The unique identifier of the song to be removed.
 * @param {Number} playlistId - The unique identifier of the playlist from which the song will be removed.
 * @returns a promise that resolves to the data returned by the axios DELETE request.
 */
async function RemoveSongFromPlaylist(songId: Number, playlistId: Number) {
    return await axios
        .delete(`${urlCalls.RemoveSongFromPlaylist}/${playlistId}/${songId}`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error removing song from playlist:", error);
            throw error;
        });
}

export default RemoveSongFromPlaylist;