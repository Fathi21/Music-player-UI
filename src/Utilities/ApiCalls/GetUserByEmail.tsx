import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";

function GetUserByEmail(email: string) {
  return axios
    .get(urlCalls.UserByEmail + email)
    .then((response) => response.data[0].email);
}

export default GetUserByEmail;
