import { jwtDecode } from 'jwt-decode';

function IsUserLoggedIn(): boolean {
  const token = localStorage.getItem("accessToken");
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000); // current time in seconds
    const buffer = 5; // seconds buffer to account for clock skew

    console.log("Token expires at:", new Date(decoded.exp * 1000));

    if (decoded.exp && decoded.exp > now + buffer) {
      return true;
    }
    
    return false;
  } catch (e) {
    return false;
  }
}

export default IsUserLoggedIn;
