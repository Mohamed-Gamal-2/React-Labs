import React from "react";
import styles from "./Guard.module.css";
import { Navigate } from "react-router-dom";

export default function Guard(props) {
  if (localStorage.getItem("userToken")) return <> {props.children}</>;
  else return <Navigate to={"/login"} />;
}