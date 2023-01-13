import React, { useState, useEffect, useInsertionEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { SignUpMessage } from "../Utilities/OutputText/ValidationMessages";
import CreateNewUser from "../Utilities/ApiCalls/CreateNewUser";
import ExistUsers from "../Utilities/ApiCalls/ExistUsers";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    email: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const [accountCreated, setAccountCreated] = useState("");

  function handleValidations() {
    ExistUsers().then(function (result) {
      const emailExist = result.find((data: any) => data.email === email);

      const usernameExist = result.find(
        (data: any) => data.username === username
      );

      if (emailExist) {
        setMessages((prev) => ({
          ...prev,
          email: SignUpMessage.emailExists,
        }));
      }
      if (!emailExist) {
        setMessages((prev) => ({
          ...prev,
          email: SignUpMessage.emptyStrig,
        }));
      }
      if (usernameExist) {
        setMessages((prev) => ({
          ...prev,
          username: SignUpMessage.usernameExists,
        }));
      }
      if (!usernameExist) {
        setMessages((prev) => ({
          ...prev,
          username: SignUpMessage.emptyStrig,
        }));
      }
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    //if (!messages.email && messages.username) {
    CreateNewUser(email.toLowerCase(), username.toLowerCase(), password);
    setUsername("");
    setEmail("");
    setPassword("");
    setAccountCreated("Account created");
    //}
  }

  function handleShowpassword() {
    if (showPassword) {
      setShowPassword(false);
      console.log(showPassword);
    }
    {
      setShowPassword(true);
      console.log(showPassword);
    }
  }

  function handleDisabled() {
    if (!email || !username || !password) {
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

  useEffect(() => {
    handleValidations();
    handleDisabled();
  }, [email, username, password]);

  return (
    <div className="form-Box">
      <form onSubmit={handleSubmit}>
        <Link to={RoutePath.homePage}>
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>

        <div className="accountCreated">
          <p>{accountCreated}</p>
        </div>
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
            We'll never share your email with anyone .
          </div>
          <div id="error-message" className="form-text">
            {messages.email}
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
        <div className="col-auto">{handleDisabled()}</div>
        <div className="signUpAndSignInPage">
          <p>
            You have account{" "}
            <Link to={RoutePath.loginPage}>
              <span className="link">sign in</span>{" "}
            </Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
