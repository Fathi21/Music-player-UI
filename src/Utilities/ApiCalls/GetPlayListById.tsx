import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetPlayListById(id: number) {
  return await axios
    .get(urlCalls.GetPlayListById + id)
    .then((response) => response);
}

export default GetPlayListById;
