import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import UserDetails from "../../components/UserDetails";

async function CreateNewPlayList(songId: number, PlayListId: number) {
  const userId = UserDetails().userId;

  return await axios
    .post(urlCalls.CreateNewPlayList, {
      CreatedAt: "2023-02-03T00:00:00Z",
      PlayListId: PlayListId,
      UserId: userId,
      SongID: songId,
    })
    .then(function (response) {
      return response.data[0];
    })
    .catch(function (error) {
      return error;
    });
}

export default CreateNewPlayList;
