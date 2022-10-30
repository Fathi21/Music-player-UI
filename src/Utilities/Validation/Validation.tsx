import React from "react";
import GetUserByEmail from "../ApiCalls/GetUserByEmail";
import GetUserByUserName from "../ApiCalls/GetUserByUserName";
import { SignUpMessage } from "../Enums/ValidationMessages";
function Validation(email: string, username: string) {
  let errors = { email, username };
  let emailTaken: string;
  const useremail = GetUserByEmail(email).then(function (result) {
    return result;
    // if (result) {
    //   errors.email = SignUpMessage.emailExists;
    // }
  });

  console.log(useremail);

  const userNma = GetUserByUserName(username).then(function (result) {
    return result;
    // if (result) {
    //   errors.username = SignUpMessage.usernameExists;
    // }
  });

  return errors;
}

export default Validation;
