import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

function SignUp() {
  const [music, setmusic] = useState([]);

  const [HideSpinner, setHideSpinner] = useState("");

  function CreateNewUser() {
    axios
      .post("/user", {
        firstName: "Fred",
        lastName: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="form-Box">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@hotmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            User name
          </label>
          <input
            type="email"
            className="form-control"
            id=""
            aria-describedby="emailHelp"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Show password
          </label>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-success mb-3">
            Register
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
