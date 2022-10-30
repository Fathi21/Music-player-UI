import React, { useState, useEffect } from "react";
import axios from "axios";
import { urlCalls } from "../Enums/ApiUrlCalls";

function GetUserByEmail() {
  return axios.get(urlCalls.ExistUsers).then((response) => response.data);
}

export default GetUserByEmail;
