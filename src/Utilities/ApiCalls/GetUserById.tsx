import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetUserById(userId: Number) {
  return await axios
    .get(urlCalls.GetUserById + userId)
    .then((response) => response.data);
}

export default GetUserById;
