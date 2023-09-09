import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `CreateNewUser` sends a POST request to a specified URL with the provided email,
 * username, and password, and returns the response data or an error.
 * @param {string} email - The email parameter is a string that represents the email address of the
 * user you want to create.
 * @param {string} username - The `username` parameter is a string that represents the desired username
 * for the new user.
 * @param {string} password - The `password` parameter is a string that represents the user's password.
 * @returns a promise that resolves to the data from the response if the request is successful, or an
 * error object if the request fails.
 */
function CreateNewUser(email: string, username: string, password: string) {
  return axios
    .post(urlCalls.Register, {
      email: email,
      username: username,
      password: password,
      first_name: "",
      last_name: "",
    })
    .then(function (response) {
      return response.data[0];
    })
    .catch(function (error) {
      return error;
    });
}

export default CreateNewUser;
