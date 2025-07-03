import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

/**
 * Sends a POST request to login endpoint with username and password.
 * @param username - user's username
 * @param password - user's password
 * @returns Promise resolving to the response object (tokens, etc)
 */
async function GetAtoken(username: string, password: string) {
  try {
    const response = await axios.post(urlCalls.login, {
      username,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export default GetAtoken;
