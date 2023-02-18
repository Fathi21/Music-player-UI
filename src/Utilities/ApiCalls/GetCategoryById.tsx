import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

function GetCategoryById(id: any) {
  return axios.get(urlCalls.GetCategoryById + id).then((response) => response);
}

export default GetCategoryById;
