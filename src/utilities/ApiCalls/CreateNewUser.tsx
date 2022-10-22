import React from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";

function CreateNewUser(email: string, username: string, password: string) {
  axios
    .post(urlCalls.Register, {
      email: email,
      username: username,
      password: password,
      first_name: "",
      last_name: "",
    })
    .then(function (response) {
      console.log(response.data[0]);
      // setresponseError(response.data[0]);
    })
    .catch(function (error) {
      console.log(error.response.data.username);
      // setresponseError((prev) => ({
      //   ...prev,
      //   username: error.response.data.username,
      // }));

      // setresponseError((prev) => ({
      //   ...prev,
      //   password: error.response.data.password,
      // }));
    });
}

export default CreateNewUser;
