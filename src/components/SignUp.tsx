import React, { useState, useEffect, useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { SignUpMessage } from "../Utilities/Enums/ValidationMessages";
import CreateNewUser from "../Utilities/ApiCalls/CreateNewUser";
import GetUserByEmail from "../Utilities/ApiCalls/GetUserByEmail";
import GetUserByUserName from "../Utilities/ApiCalls/GetUserByUserName";
import Validation from "../Utilities/Validation/Validation";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [messages, setMessages] = useState({ email: "", username: "" });
  const [resEmail, setresEmail] = useState("");
  const [resUsername, setresUsername] = useState("");

  function handleValidations() {
    console.log("Validation");
    if (resEmail.length > 0) {
      setMessages((prev) => ({
        ...prev,
        username: SignUpMessage.emailExists,
      }));
    } else if (resUsername.length > 0) {
      setMessages((prev) => ({
        ...prev,
        username: SignUpMessage.usernameExists,
      }));
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    handleValidations();

    GetUserByEmail(email).then(function (result) {
      setresEmail(result);
    });
    GetUserByUserName(username).then(function (result) {
      setresUsername(result);
    });
    //CreateNewUser(email, username, password);
    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="form-Box">
      <form onSubmit={handleSubmit}>
        <Link to="/">
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email@hotmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          <div id="error-message" className="form-text">
            {messages.username}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <div id="error-message" className="form-text">
            {messages.username}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
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
