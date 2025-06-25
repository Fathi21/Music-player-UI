import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/sideBar";
import RedirectIfUserLoggedOut from "../components/RedirectIfUserLoggedOut";
import GetSongsInPlaylistById from "../Utilities/ApiCalls/GetSongsInPlaylistById";
import GetAllSongs from "../Utilities/ApiCalls/GetAllSongs";
import { urlCalls } from "../Utilities/UrlPath/ApiUrlPath";
import MusicPlayer from "../components/MusicPlayer";
import PlayListCard from "../components/PlayListCard";
import SearchForPlayList from "../components/SearchForPlayList";
import RemoveSongFromPlaylist from "../Utilities/ApiCalls/RemoveSongFromPlaylist";
import toast from "react-hot-toast";
import { TextOutput } from "../Utilities/OutputText/TextOutput";
import Edit from "../components/Edit";

function PlayListDetail() {
  RedirectIfUserLoggedOut();
  const { id }: any = useParams();

  const [SongsInCurrentPlayList, setSongsInCurrentPlayList] = useState<any[]>([]);
  const [PlayingSong, setPlayingSong] = useState<number | null>(null);
  const [songs, setsongs] = useState<any[]>([]);
  const [toggle, setToggle] = useState(false);
  const [hideOpenCloseButton, setHideOpenCloseButton] = useState(true);

  const handleClickSong = (id: number) => {
    setPlayingSong(id);
  };

  const handleRemoveSongFromPlaylist = async (songId: number) => {

    await RemoveSongFromPlaylist(songId, id); // Call the API to remove the song
    handleData(); // Refresh the playlist data after removal
    toast.success(TextOutput.songRemovedFromPlaylist); // Show success message
    setPlayingSong(null); // Reset the currently playing song
    
  };

  const handleData = async () => {
    try {
      const allSongs = await GetAllSongs();
      const playlistSongs = await GetSongsInPlaylistById(id);

      const songsInPlaylist = allSongs.filter((song: any) =>
        playlistSongs.some((p: { SongID: number }) => p.SongID === song.id)
      );

      console.log("Songs in Playlist:", songsInPlaylist);
      setSongsInCurrentPlayList(songsInPlaylist);
      setsongs(allSongs);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const songsInPlaylist = SongsInCurrentPlayList.map((musicData: any) => {
    if (musicData.id === PlayingSong) return null;

    return (
      <a key={musicData.id} onClick={() => handleClickSong(musicData.id)}>
        <li className="list-group-item">
          <span className="songInfo">
            <img
              src={urlCalls.Base + musicData.PhotoCover}
              className="rounded-0 float-start"
              alt="..."
            />
            <span className="songDetails">
              <span className="songName">{musicData.Title}</span>
              <span className="ArtistName">{musicData.Artist}</span>
            </span>
          </span>
          
          <span
                className="DeleteButton"
                onClick={() => handleRemoveSongFromPlaylist(musicData.id)}
              >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 8a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5z" />
              </svg>
            </span>
        </li>
      </a>
    );
  });

  const handleLoadingPlaylist = () => {
    return PlayingSong ? (
      <MusicPlayer data={PlayingSong} />
    ) : (
      <PlayListCard id={id} />
    );
  };

  const handleToggleSongsSearch = () => {
    setToggle((prev) => !prev);
    setHideOpenCloseButton((prev) => !prev);
  };

  useEffect(() => {
    handleData();
    setPlayingSong(null);
  }, [id, hideOpenCloseButton]);

  return (
    <div className="mainPlayList">
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          {handleLoadingPlaylist()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots dropdown-toggle"
            viewBox="0 0 16 16"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <ul className="dropdown-menu">
            <li
              className="list-group-item EditButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pen-fill"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
              </svg>
              Edit
            </li>
            <li className="list-group-item DeleteButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-archive-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
              </svg>
              Delete
            </li>
          </ul>
          <Edit id={id}/>
          <div className="SongsInList">
            <ul className="list-group">
              <div className="header">
                <p className="NumberOfSongs">
                  {SongsInCurrentPlayList.length} songs
                </p>
                <span
                  onClick={handleToggleSongsSearch}
                  id={hideOpenCloseButton ? "" : "Toggle"}
                  className="Open"
                >
                  Open
                </span>
                <span
                  onClick={handleToggleSongsSearch}
                  id={hideOpenCloseButton ? "Toggle" : ""}
                  className="Close"
                >
                  Close
                </span>
              </div>
              {hideOpenCloseButton ? songsInPlaylist : ""}
            </ul>
          </div>
          {/*SongsInCurrentPlayList.length > 0 &&*/ songs.length !== SongsInCurrentPlayList.length && toggle ? (
            <SearchForPlayList
              playListId={id}
              SongsInCurrentPlayList={SongsInCurrentPlayList}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PlayListDetail;
