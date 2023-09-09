import React from "react";
import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * The function `GetCategoryById` is an asynchronous function that makes an HTTP GET request to a
 * specific URL with the provided ID and returns the response.
 * @param {Number} id - The `id` parameter is a number that represents the unique identifier of a
 * category.
 * @returns a promise that resolves to the response object from the axios GET request.
 */
async function GetCategoryById(id: Number) {
  return await axios
    .get(urlCalls.GetCategoryById + id)
    .then((response) => response);
}

export default GetCategoryById;
