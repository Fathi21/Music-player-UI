import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetUserByEmail() {
  return axios.get(urlCalls.ExistUsers).then((response) => response.data);
}

export default GetUserByEmail;
