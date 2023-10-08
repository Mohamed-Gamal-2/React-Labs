import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className={`${styles.bgImage}`}>
        <div className={`${styles.skull}`}></div>
        <div className={`${styles.web}`}></div>
        <div className={`${styles.spider}`}></div>
        <h1
          className={`${styles.yellow} text-center mx-auto my-5 ${styles.max}`}
        >
          About The Party
        </h1>
        <p className={`${styles.white} text-center mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt.
        </p>
        <p className={`${styles.white} text-center my-3 ${styles.max} mx-auto`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="text-center mx-auto">
          <button className={`${styles.KMbtn} `}>
            <Link to={"/"} className={`${styles.KMlink} `}>
              Know More
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
