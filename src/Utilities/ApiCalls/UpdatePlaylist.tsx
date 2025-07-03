import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import { UserDetails } from "../../components/UserDetails";

/**
 * The function `UpdatePlaylist` is an asynchronous function that makes a PUT request to a
 * specific URL to update a playlist based on the playlist ID and user ID.
 * @param {Number} playlistId - The unique identifier of the playlist to be updated.
 * @param {Number} userId - The unique identifier of the user performing the update.
 * @param {Object} updateData - The data to update the playlist with.
 * @returns a promise that resolves to the data returned by the axios PUT request.
 */
async function UpdatePlaylist(playlistId: Number, updateData: Object) {
    const userDetails = await UserDetails();
    const userId = userDetails?.userId;
        return await axios
        .put(`${urlCalls.UpdatePlaylist}/${playlistId}/${userId}`, updateData)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Error updating playlist:", error);
            throw error;
        });
}

export default UpdatePlaylist;