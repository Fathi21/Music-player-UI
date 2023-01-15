import React, { useState, useEffect, useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import {
  SignUpMessage,
  SignInMessage,
} from "../Utilities/OutputText/ValidationMessages";
import GetAtoken from "../Utilities/ApiCalls/GetAtoken";
import ExistUsers from "../Utilities/ApiCalls/ExistUsers";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    email: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  function handleValidations() {
    ExistUsers().then(function (result) {
      const usernameExist = result.find(
        (data: any) => data.username === username
      );

      if (usernameExist) {
        setMessages((prev) => ({
          ...prev,
          username: SignUpMessage.emptyStrig,
        }));
      }
      if (!usernameExist) {
        setMessages((prev) => ({
          ...prev,
          username: SignInMessage.usernameExists,
        }));

        if (!username) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.emptyStrig,
          }));
        }
      }
    });
  }

  function handleSaveUserInlocalStorage(
    Token: string,
    userId: string,
    email: string,
    username: string
  ) {
    localStorage.setItem("Token", JSON.stringify(Token));
    localStorage.setItem("UserId", JSON.stringify(userId));
    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("Username", JSON.stringify(username));
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    GetAtoken(username, password).then(function (result) {
      handleSaveUserInlocalStorage(
        result.data.Token,
        result.data.UserId,
        result.data.Email,
        result.data.Username
      );
    });
    setUsername("");
    setPassword("");
  }

  function handleDisabled() {
    if (!username || !password || messages.email || messages.username) {
      return (
        <button type="submit" className="btn btn-success mb-3" disabled>
          Register
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn btn-success mb-3">
          Register
        </button>
      );
    }
  }

  function handleShowpassword() {
    if (showPassword) {
      setShowPassword(false);
      console.log(showPassword);
    } else {
      setShowPassword(true);
      console.log(showPassword);
    }
  }

  useEffect(() => {
    handleValidations();
    handleDisabled();
  }, [username, password]);

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
          <div className="col-auto">{handleDisabled()}</div>
        </div>
        <div className="signUpAndSignInPage">
          <p>
            You don't have account
            <Link to={RoutePath.registerPage}>
              <span className="link">sign up</span>{" "}
            </Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignIn;
