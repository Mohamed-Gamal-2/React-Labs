import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h4 className="text-center my-4">
        Sarahah allows you to receive constructive feedback from your friends
        and co-workers
      </h4>
      <div className="d-flex flex-column align-items-center">
        <button className={`${styles.meBtn} rounded-pill py-1 my-4 `}>
          <Link className={`${styles.meLink}`} to={"/login"}>
            <i className="fa-solid fa-user me-2"></i>
            Login
          </Link>
        </button>
        <button className={`${styles.meBtn} rounded-pill py-1  `}>
          <Link className={`${styles.meLink}`} to={"/register"}>
            <i className="fa-solid fa-pen-to-square m-e2"></i>
            register
          </Link>
        </button>
      </div>
    </>
  );
}
