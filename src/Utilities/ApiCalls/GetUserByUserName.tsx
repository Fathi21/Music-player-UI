import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";

function GetUserByUserName(username: string) {
  return axios
    .get(urlCalls.UserByUserName + username)
    .then((response) => response.data[0].username);
}

export default GetUserByUserName;