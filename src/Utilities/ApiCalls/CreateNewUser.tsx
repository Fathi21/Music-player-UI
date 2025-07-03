import axios from "axios";
import { urlCalls } from "../UrlPath/ApiUrlPath";

async function CreateNewUser(
  email: string,
  username: string,
  password: string
) {
  try {
    const response = await axios.post(urlCalls.Register, {
      email,
      username,
      password,
      first_name: "",
      last_name: "",
    });
    return response.data; // Return full data for better handling
  } catch (error: any) {
    throw error.response?.data || error;
  }
}

export default CreateNewUser;
