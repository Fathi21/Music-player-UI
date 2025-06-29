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
import EditPlayList from "../components/EditPlayList";
import EditAndDeleteButton from "../components/EditAndDeleteButton";  
import DeletePlayList from "../components/DeletePlayList";

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
                className="RemoveSongFromPlayListButton"
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
          <EditAndDeleteButton/> 
          <EditPlayList id={id}/>
          <DeletePlayList id={id} />
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
