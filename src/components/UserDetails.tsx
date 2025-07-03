import {jwtDecode} from "jwt-decode";
import GetUserById from "../Utilities/ApiCalls/GetUserById";

interface UserDetailsType {
  userId: number;
  email: string;
  username: string;
}

export async function UserDetails(): Promise<UserDetailsType | null> {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token){
      return null;
    }

    const decoded: any = jwtDecode(token);
    const userId = decoded.user_id || decoded.userId || decoded.id;
    if (!userId) 
    {
      return null;
    }

    const userData = await GetUserById(userId);

    if (!userData || userData.length === 0) {
      return null;
    }

    const user = userData[0];

    return {
      userId,
      email: user.email,
      username: user.username,
    };
  } catch (error) {
    console.error("Failed to fetch user details:", error);
    return null;
  }
}
