import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { urlCalls } from "../utilities/Enums/ApiUrlCalls";
import { SignUpMessage } from "../utilities/ValidationMessages";
import CreateNewUser from "../utilities/ApiCalls/CreateNewUser";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [messages, setMessages] = useState({ email: "", username: "" });

  function handleValidations(): void {
    const mes: string = "A user with that username already exists.";
    if (SignUpMessage.usernameExists === mes) {
      setMessages((prev) => ({
        ...prev,
        username: SignUpMessage.usernameExists,
      }));
    }
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    CreateNewUser(email, username, password);
    handleValidations();
    console.log(messages.username);
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
