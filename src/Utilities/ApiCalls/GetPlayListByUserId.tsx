import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetPlayListByUserId(userId: number) {
  return await axios
    .get(urlCalls.GetPlayListByUserId + userId)
    .then((response) => response.data)
    .catch((error) => {
      console.error("There was an error!", error);
    });
}

export default GetPlayListByUserId;
