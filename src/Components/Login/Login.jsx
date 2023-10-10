import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { JWTcontext } from "../../Contexts/JWTcontext";

export default function Login() {
  let route = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [ApiError, setApiError] = useState("");
  let { setJWT } = useContext(JWTcontext);

  function login(values) {
    setIsloading(true);
    axios
      .post("https://sara7aiti.onrender.com/api/v1/user/signin", values)
      .then((dataAPI) => {
        let {
          data: { message, token },
        } = dataAPI;
        message == "welcome" && setIsloading(false);
        localStorage.setItem("userToken", token);
        setJWT(token);
        setIsloading(false);
        route("/profile");
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
    email: Yup.string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Invalid Email format"
      )
      .required("This field is reuired"),
    password: Yup.string()
      .matches(/^(?=.*[0-9])[a-zA-Z0-9]{6,16}$/, "Invalid password format")
      .required("This field is reuired"),
  });

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  return (
    <>
      <section className="my-3 px-5">
        <div className="header d-flex  flex-column align-items-center">
          <i
            className="fa-solid fa-user-secret fa-4x"
            style={{ color: "#c0c0c0" }}
          ></i>

          <h1 className="mt-2">Login</h1>
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

          <button type="submit" className={`${styles.meBtn} py-1`}>
            {isLoading ? <i className="fa fa-spin fa-spinner"></i> : <>Login</>}
          </button>
        </form>
        <button
          className={`${styles.meOutForm} rounded-pill py-1 -3 my-4  w-50 mx-auto d-block`}
        >
          <Link className={`${styles.meLink}`} to={"/register"}>
            <i className="fa-solid fa-pen-to-square me-2"></i>
            Register
          </Link>
        </button>
      </section>
    </>
  );
}
