import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetPlayList() {
  return await axios
    .get(urlCalls.GetPlayList)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });
}

export default GetPlayList;
