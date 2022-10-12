import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Footer from "./Footer";

function SignUp() {
  const [music, setmusic] = useState([]);

  const [HideSpinner, setHideSpinner] = useState("");

  function CreateNewUser() {
    axios
      .post("/http://127.0.0.1:8000/Api/Register", {
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

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   } else if (values.firstName.length > 15) {
  //     errors.firstName = "Must be 15 characters or less";
  //   }

  //   if (!values.lastName) {
  //     errors.lastName = "Required";
  //   } else if (values.lastName.length > 20) {
  //     errors.lastName = "Must be 20 characters or less";
  //   }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="form-Box">
      <form onSubmit={formik.handleSubmit}>
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
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email@hotmail.com"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
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
          <label htmlFor="exampleInputPassword1" className="form-label">
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
