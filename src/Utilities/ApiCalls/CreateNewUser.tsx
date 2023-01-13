import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

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
