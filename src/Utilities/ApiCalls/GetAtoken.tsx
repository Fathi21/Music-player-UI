import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetAtoken(username: string, password: string) {
  return axios
    .get(urlCalls.login + username + "/" + password)
    .then((response) => response);
}

export default GetAtoken;
