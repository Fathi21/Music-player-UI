import React from "react";

function UserDetails() {
  const usersDetails = {
    userId: localStorage.getItem("UserId"),
    email: localStorage.getItem("Email"),
    username: localStorage.getItem("Username"),
  };

  return usersDetails;
}

export default UserDetails;
