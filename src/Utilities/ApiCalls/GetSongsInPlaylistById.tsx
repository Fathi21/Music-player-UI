import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetSongsInPlaylistById(PlayListId: number) {
  try {
    const response = await axios.get(`${urlCalls.GetSongsInPlaylistById}/${PlayListId}`);
    return response.data; // assuming the API returns a list of songs
  } catch (error) {
    console.error("Error fetching songs in playlist:", error);
    return null;
  }
}

export default GetSongsInPlaylistById;
