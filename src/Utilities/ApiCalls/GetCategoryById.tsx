import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function GetCategoryById(id: any) {
  return await axios
    .get(urlCalls.GetCategoryById + id)
    .then((response) => response);
}

export default GetCategoryById;
