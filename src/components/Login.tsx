import React, { useState, useEffect, useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { SignUpMessage } from "../Utilities/OutputText/ValidationMessages";
import CreateNewUser from "../Utilities/ApiCalls/CreateNewUser";
import ExistUsers from "../Utilities/ApiCalls/ExistUsers";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    email: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  function handleValidations() {
    ExistUsers().then(function (result) {
      result.filter((data: any, index: any) => {
        if (data.username === username) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.usernameExists,
          }));
        } else if (username.length === 0) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.emptyStrig,
          }));
        } else if (!username) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.emptyStrig,
          }));
        }
      });
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    handleValidations();
  }, [username]);

  function handleShowpassword() {
    if (showPassword) {
      setShowPassword(false);
      console.log(showPassword);
    } else {
      setShowPassword(true);
      console.log(showPassword);
    }
  }

  return (
    <div className="Login-form">
      <form onSubmit={handleSubmit}>
        <Link to={RoutePath.homePage}>
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>
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
            type={showPassword ? "password" : "text"}
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
            onClick={(event) => handleShowpassword()}
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

export default Login;
