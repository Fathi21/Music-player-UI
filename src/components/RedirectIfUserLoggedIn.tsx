import React from "react";
import { Link, useNavigate } from "react-router-dom";
import IsUserLoggedIn from "./IsUserLoggedIn";

function RedirectIfUserLoggedIn() {
  let navigate = useNavigate();

  if (IsUserLoggedIn()) {
    navigate("/");
  }

  return navigate;
}

export default RedirectIfUserLoggedIn;
