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

  function handleValidations() {
    ExistUsers().then(function (result) {
      result.filter((data: any, index: any) => {
        if (data.email === email) {
          setMessages((prev) => ({
            ...prev,
            email: SignUpMessage.emailExists,
          }));
        } else if (email.length === 0) {
          setMessages((prev) => ({
            ...prev,
            email: SignUpMessage.emptyStrig,
          }));
        } else if (data.username === username) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.usernameExists,
          }));
        } else if (username.length === 0) {
          setMessages((prev) => ({
            ...prev,
            username: SignUpMessage.emptyStrig,
          }));
        } else if (!email) {
          setMessages((prev) => ({
            ...prev,
            email: SignUpMessage.emptyStrig,
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
    CreateNewUser(email, username, password);
    setUsername("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    handleValidations();
  }, [email, username]);

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
    <div className="form-Box">
      <form onSubmit={handleSubmit}>
        <Link to={RoutePath.homePage}>
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
