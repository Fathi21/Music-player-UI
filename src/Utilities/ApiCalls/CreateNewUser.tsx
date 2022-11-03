import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

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
