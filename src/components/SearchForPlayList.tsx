import React, { useState, useEffect } from "react";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import CreateNewPlayListAddSong from "../Utilities/ApiCalls/CreateNewPlayListAddSong";
import toast from "react-hot-toast";
import { TextOutput } from "../Utilities/OutputText/TextOutput";
import GetSongsInPlaylistById from "../Utilities/ApiCalls/GetSongsInPlaylistById";

function SearchForPlayList({ playListId, SongsInCurrentPlayList }: any) {
  const [allSongs, setAllSongs] = useState<any[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const allSongs = await GetAllSongs();
        const playlistSongs = await GetSongsInPlaylistById(playListId);
        const playlistSongIds = playlistSongs.map((song: any) => song.SongID);

        const songsToAdd = allSongs.filter(
          (song: any) => !playlistSongIds.includes(song.id)
        );

        setAllSongs(songsToAdd);
        setFilteredSongs(songsToAdd);
      } catch (error) {
        console.error("Failed to fetch songs:", error);
        toast.error("Failed to load songs.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [playListId, SongsInCurrentPlayList]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = allSongs.filter((song) =>
      song.Title.toLowerCase().includes(query) ||
      song.Artist.toLowerCase().includes(query)
    );
    setFilteredSongs(filtered);
  }, [searchQuery, allSongs]);

  const handleAddSong = async (songId: number) => {
    try {
      await CreateNewPlayListAddSong(songId, false, playListId);
      toast.success(TextOutput.songAddedToPlaylist);
    } catch (error) {
      console.error("Error adding song to playlist:", error);
      toast.error("Failed to add song.");
    }
  };

  return (
    <div className="SongsInList paddinTop">
      <div className="row">
        <div className="col-4">
          <p>Let's find something for your playlist</p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search for songs..."
              aria-label="search"
              aria-describedby="basic-addon1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <p>Loading songs...</p>
      ) : filteredSongs.length === 0 ? (
        <p>No songs found.</p>
      ) : (
        <ul className="list-group">
          {filteredSongs.map((song, index) => (
          <a key={song.id || index} href="#">
            <li className="list-group-item">
              <span className="songInfo">
                <img
                  src={urlCalls.Base + song.PhotoCover}
                  className="rounded-0 float-start"
                  alt="cover"
                />
                <span className="songDetails">
                  <span className="songName">{song.Title}</span>
                  <span className="ArtistName">{song.Artist}</span>
                </span>
              </span>
              <span
                className="AddButton"
                onClick={() => handleAddSong(song.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </span>
            </li>
          </a>
        ))}
      </ul>

      )}
    </div>
  );
}

export default SearchForPlayList;
