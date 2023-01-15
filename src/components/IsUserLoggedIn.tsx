import React from "react";

function IsUserLoggedIn() {
  const token = localStorage.getItem("Token");
  let isLoggedIn = false;
  if (token) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  return isLoggedIn;
}

export default IsUserLoggedIn;
