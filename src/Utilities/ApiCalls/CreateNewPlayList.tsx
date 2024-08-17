import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
import UserDetails from "../../components/UserDetails";
import GetPlayListByUserId from "./GetPlayListByUserId";

async function CreateNewPlayList() {
  const userId: number = Number(UserDetails().userId);

  const allPlayListFromCurrentUser = await GetPlayListByUserId(userId);

  return await axios
    .post(urlCalls.CreateNewPlayList, {
      PlayListName: "My playlist " + allPlayListFromCurrentUser.length,
      Description: "",
      UserId: userId,
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
}

export default CreateNewPlayList;
