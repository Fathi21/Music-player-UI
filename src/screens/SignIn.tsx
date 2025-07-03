import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import {
  SignUpMessage,
  SignInMessage,
} from "../Utilities/OutputText/ValidationMessages";
import GetAtoken from "../Utilities/ApiCalls/GetAtoken";
import ExistUsers from "../Utilities/ApiCalls/ExistUsers";
import RedirectIfUserLoggedIn from "../components/RedirectIfUserLoggedIn";
import toast, { Toaster } from "react-hot-toast";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    email: "",
    username: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [incorrectMessage, setIncorrectMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if username exists to show validation message
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
      } else {
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

  // Handle form submission
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);

    GetAtoken(username, password)
      .then((result) => {
        if (result.data.access) {
          localStorage.setItem("accessToken", result.data.access);
          localStorage.setItem("refreshToken", result.data.refresh);
          setIncorrectMessage("");
          toast.success("Logged in successfully!");
          // Optionally redirect or update UI here
        } else {
          setIncorrectMessage("Invalid username or password.");
        }
      })
      .catch(() => {
        setIncorrectMessage("Invalid username or password.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });

    setUsername("");
    setPassword("");
  }

  // Disable button logic
  function handleDisabled() {
    if (!username || !password || messages.email || messages.username || isSubmitting) {
      return (
        <button type="submit" className="btn btn-success mb-3" disabled>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn btn-success mb-3">
          Login
        </button>
      );
    }
  }

  // Toggle password visibility
  function handleShowpassword() {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    handleValidations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  RedirectIfUserLoggedIn();

  return (
    <div className="Login-form">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Link to={RoutePath.homePage}>
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>

        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            User name
          </label>
          <input
            id="usernameInput"
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            autoComplete="username"
          />
          <div id="error-message" className="form-text">
            {messages.username}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            id="passwordInput"
            type={showPassword ? "password" : "text"}
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            autoComplete="current-password"
          />
          <div id="error-message" className="form-text">
            {incorrectMessage}
          </div>
        </div>

        <div className="mb-3 form-check">
          <input
            onClick={handleShowpassword}
            type="checkbox"
            className="form-check-input"
            id="showPasswordCheck"
          />
          <label className="form-check-label" htmlFor="showPasswordCheck">
            Show password
          </label>
        </div>

        <div className="col-auto">{handleDisabled()}</div>

        <div className="signUpAndSignInPage">
          <p>
            You don't have an account?{" "}
            <Link to={RoutePath.registerPage}>
              <span className="link">Sign up</span>
            </Link>
          </p>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default SignIn;
