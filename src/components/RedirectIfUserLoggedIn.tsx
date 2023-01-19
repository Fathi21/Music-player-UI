import React from "react";
import { Link, useHistory } from "react-router-dom";
import IsUserLoggedIn from "./IsUserLoggedIn";

function RedirectIfUserLoggedIn() {
  let history = useHistory();

  if (IsUserLoggedIn()) {
    history.push("/");
  }

  return history;
}

export default RedirectIfUserLoggedIn;
