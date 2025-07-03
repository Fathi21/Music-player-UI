import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import {UserDetails} from "../../components/UserDetails";

async function LikeASongById(songId: Number) {
  const userDetails = await UserDetails();
  const userId = userDetails?.userId;

  if (!userId) {
    console.error("User ID is required to like a song.");
    return;
  }
  


  return await axios
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
