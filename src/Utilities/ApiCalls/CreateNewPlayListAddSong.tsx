import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import UserDetails from "../../components/UserDetails";

// Overload: create new playlist
async function CreateNewPlayListAddSong(songId: number, createNew: true): Promise<any>;

// Overload: add to existing playlist
async function CreateNewPlayListAddSong(songId: number, createNew: false, playListID: number): Promise<any>;

// Implementation
async function CreateNewPlayListAddSong(
  songId: number,
  createNew: boolean,
  PlayListId?: number
): Promise<any> {
  const userId: number = Number(UserDetails().userId);

  if (!createNew && PlayListId === undefined) {
    throw new Error("playListID is required when not creating a new playlist.");
  }

  const payload = {
    SongID: songId,
    UserId: userId,
    createNew: createNew,
    PlayListId: PlayListId ?? null, // include it even if null
  };

  try {
    const response = await axios.post(urlCalls.CreateNewPlayListAddSongAddSong, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating or adding to playlist:", error);
    throw error;
  }
}

export default CreateNewPlayListAddSong;
