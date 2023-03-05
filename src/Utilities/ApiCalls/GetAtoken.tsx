import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetAtoken(username: string, password: string) {
  return await axios
    .get(urlCalls.login + username + "/" + password)
    .then((response) => response);
}

export default GetAtoken;
