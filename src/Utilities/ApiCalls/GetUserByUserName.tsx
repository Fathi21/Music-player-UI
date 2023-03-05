import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetUserByUserName(username: string) {
  return await axios
    .get(urlCalls.UserByUserName + username)
    .then((response) => response.data[0].username);
}

export default GetUserByUserName;
