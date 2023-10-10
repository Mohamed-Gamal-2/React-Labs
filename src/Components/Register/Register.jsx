import React, { useState } from "react";
import styles from "./Register.module.css";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
export default function Register() {
  //old way
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) errors.name = "Name is required";
  //   else if (values.name.length < 3)
  //     errors.name = "Name should be more than 3 characters";
  //   else if (values.name.length > 20)
  //     errors.name = "Name should be less than 20 characters";

  //   if (!values.email) errors.email = "Email is required";
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
  //     errors.email = "Invalid Email format";

  //   if (!values.password) errors.password = "Password is required";
  //   else if (
  //     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
  //       values.password
  //     )
  //   )
  //     errors.password = "Invalid pasword format";

  //   if (!values.rePassword) errors.rePassword = "This field is required";
  //   else if (values.rePassword != values.password)
  //     errors.rePassword = "Passwords don't match";

  //   if (!values.age) errors.age = "Age is required";
  //   else if (values.age < 18) errors.age = "Your age should be more than 18";
  //   else if (values.age > 60) errors.age = "Your age should be less than 60";

  //   return errors;
  // };
  let route = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [ApiError, setApiError] = useState("");

  function signUp(values) {
    setIsloading(true);
    axios
      .post("https://sara7aiti.onrender.com/api/v1/user", values)
      .then((dataAPI) => {
        let {
          data: { message },
        } = dataAPI;
        message == "Added" && setIsloading(false);
        route("/login");
      })
      .catch((err) => {
        let {
          response: {
            data: { error },
          },
        } = err;
        setApiError(error);
        setIsloading(false);
      });
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Username should be less than 20 charactes")
      .min(3, "Username should be more than 3 charactes")
      .required("This field is reuired"),
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid Email format"
      )
      .required("This field is reuired"),
    password: Yup.string()
      .matches(/^(?=.*[0-9])[a-zA-Z0-9]{6,16}$/, "Invalid password format")
      .required("This field is reuired"),
    rePassword: Yup.string()
      .required("This field is reuired")
      .oneOf([Yup.ref("password")], "Passwords did not match"),
    age: Yup.number()
      .required("This field is reuired")
      .max(60, "Your age should be less than 60")
      .min(18, "Your age should be more than 18"),
  });

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: "",
    },
    validationSchema,

    onSubmit: (values) => {
      signUp(values);
    },
  });

  return (
    <>
      <section className="my-3 px-5">
        <div className="header d-flex  flex-column align-items-center">
          <i
            className="fa-solid fa-pen-to-square fa-4x"
            style={{ color: "#c0c0c0" }}
          ></i>
          <h1 className="mt-2">Register</h1>
        </div>
        <form
          className={`${styles.meForm} mx-auto mt-3`}
          onSubmit={form.handleSubmit}
          onClick={() => {
            setApiError("");
          }}
        >
          {ApiError ? (
            <p className={`${styles.isRegistered} text-center`}>{ApiError}</p>
          ) : (
            <></>
          )}

          <div className="form-group mb-3">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your username"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.name && form.touched.name ? (
              <p className={`${styles.meAlert}`}>{form.errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your Email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.email && form.touched.email ? (
              <p className={`${styles.meAlert}`}>{form.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.password && form.touched.password ? (
              <p className={`${styles.meAlert}`}>{form.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="rePassword">Password Repeat:</label>
            <input
              type="password"
              className="form-control"
              id="rePassword"
              name="rePassword"
              placeholder="Repeat your password"
              value={form.values.rePassword}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.rePassword && form.touched.rePassword ? (
              <p className={`${styles.meAlert}`}>{form.errors.rePassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={form.values.age}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.errors.age && form.touched.age ? (
              <p className={`${styles.meAlert}`}>{form.errors.age}</p>
            ) : (
              ""
            )}
          </div>
          <button type="submit" className={`${styles.meBtn} py-1`}>
            {isLoading ? (
              <i className="fa fa-spin fa-spinner"></i>
            ) : (
              <>Register</>
            )}
          </button>
        </form>
        <button
          className={`${styles.meOutForm} rounded-pill py-1 -3 my-4  w-50 mx-auto d-block`}
        >
          <Link className={`${styles.meLink}`} to={"/login"}>
            <i className="fa-solid fa-user me-2"></i>
            Login
          </Link>
        </button>
      </section>
    </>
  );
}
