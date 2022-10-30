import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";
import GetUserByEmail from "../ApiCalls/GetUserByEmail";
import GetUserByUserName from "../ApiCalls/GetUserByUserName";
import Validation from "../Validation/Validation";

function CreateNewUser(email: string, username: string, password: string) {
  console.log("CreateNewUser");
  //const [takenEmail, setTakenEmail] = useState("");

  axios
    .post(urlCalls.Register, {
      email: email,
      username: username,
      password: password,
      first_name: "",
      last_name: "",
    })
    .then(function (response) {
      // setresponseError(response.data[0]);
    })
    .catch(function (error) {
      // setresponseError(response.data[0]);
    });
}

export default CreateNewUser;
