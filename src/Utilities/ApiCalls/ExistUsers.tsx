import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetUserByEmail` makes an asynchronous HTTP GET request to the `urlCalls.ExistUsers`
 * endpoint and returns the response data.
 * @returns the data obtained from the axios GET request.
 */
async function GetUserByEmail() {
  return await axios.get(urlCalls.ExistUsers).then((response) => response.data);
}

export default GetUserByEmail;
