import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IsUserLoggedIn from "./IsUserLoggedIn";

function RedirectIfUserLoggedOut() {
  const navigate = useNavigate();
  const isUserLoggedIn = IsUserLoggedIn();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn, navigate]);

  return null; // Or you can return a loading spinner or null
}

export default RedirectIfUserLoggedOut;
