import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { RoutePath } from "../Utilities/UrlPath/RoutePath";
import { SignUpMessage } from "../Utilities/OutputText/ValidationMessages";
import CreateNewUser from "../Utilities/ApiCalls/CreateNewUser";
import ExistUsers from "../Utilities/ApiCalls/ExistUsers";
import RedirectIfUserLoggedIn from "../components/RedirectIfUserLoggedIn";
import toast, { Toaster } from "react-hot-toast";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState({
    email: "",
    username: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate email and username existance
  async function handleValidations() {
    const users = await ExistUsers();

    const emailExist = users.find((user: any) => user.email === email);
    const usernameExist = users.find((user: any) => user.username === username);

    setMessages({
      email: emailExist ? SignUpMessage.emailExists : "",
      username: usernameExist ? SignUpMessage.usernameExists : "",
    });
  }

  // Handle form submit
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (messages.email || messages.username) {
      toast.error("Please fix validation errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      await CreateNewUser(email.toLowerCase(), username.toLowerCase(), password);
      toast.success("Account created successfully!");
      setEmail("");
      setUsername("");
      setPassword("");
      setMessages({ email: "", username: "" });
    } catch (error: any) {
      // Customize depending on backend error structure
      toast.error(
        error.detail || error.message || "Failed to create account. Try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  // Toggle password visibility
  function handleShowpassword() {
    setShowPassword(!showPassword);
  }

  // Disable button if invalid or submitting
  function handleDisabled() {
    return (
      <button
        type="submit"
        className="btn btn-success mb-3"
        disabled={
          !email || !username || !password || messages.email !== "" || messages.username !== "" || isSubmitting
        }
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    );
  }

  useEffect(() => {
    if (email || username) handleValidations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, username]);

  RedirectIfUserLoggedIn();

  return (
    <div className="form-Box">
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Link to={RoutePath.homePage}>
          <div className="Logo">
            <h1>Melody</h1>
          </div>
        </Link>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            id="emailInput"
            type="email"
            className="form-control"
            placeholder="Email@hotmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            autoComplete="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone.
          </div>
          <div id="error-message" className="form-text text-danger">
            {messages.email}
          </div>
        </div>

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
          <div id="error-message" className="form-text text-danger">
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
            autoComplete="new-password"
          />
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
            You have an account?{" "}
            <Link to={RoutePath.loginPage}>
              <span className="link">Sign in</span>
            </Link>
          </p>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default SignUp;
