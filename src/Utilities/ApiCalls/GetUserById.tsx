import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetUserById(userId: string) {
  return await axios
    .get(urlCalls.GetUserById)
    .then((response) => response.data);
}

export default GetUserById;
