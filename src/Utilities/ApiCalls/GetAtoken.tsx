import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";
/**
 * The function `GetAtoken` is an asynchronous function that makes a GET request to a login endpoint
 * with a username and password, and returns the response.
 * @param {string} username - A string representing the username of the user trying to log in.
 * @param {string} password - The password parameter is a string that represents the user's password.
 * @returns a promise that resolves to the response from the axios GET request.
 */

async function GetAtoken(username: string, password: string) {
  return await axios
    .get(urlCalls.login + username + "/" + password)
    .then((response) => response);
}

export default GetAtoken;
