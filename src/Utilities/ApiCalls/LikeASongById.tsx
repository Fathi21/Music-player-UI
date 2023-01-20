import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import UserDetails from "../../components/UserDetails";

function LikeASongById(songId: string) {
  const userId = UserDetails().userId;

  return axios
    .post(urlCalls.LikeASongById, {
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

export default LikeASongById;
