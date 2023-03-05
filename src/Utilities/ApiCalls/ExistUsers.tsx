import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetUserByEmail() {
  return await axios.get(urlCalls.ExistUsers).then((response) => response.data);
}

export default GetUserByEmail;
