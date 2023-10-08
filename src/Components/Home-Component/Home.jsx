//Using imported styles here
import React from "react";
import styles from "./Home.module.css";
import landing from "./images/Banner.png";

export default function Home() {
  return (
    <>
      <section
        className={`${styles.sectionBG} d-flex justify-content-evenly flex-wrap`}
      >
        <div>
          <img src={landing} className={`${styles.image} `} />
        </div>
        <div className="text-center align-self-center my-3">
          <div className={`${styles.white}`}>31th octobar 2018</div>
          <h1 className={`${styles.yellow}`}>Halloween Party</h1>
          <p className={`${styles.white}`}>
            Halloween or Hallowe'en (a contraction of All Hallows' Evening) also
            known as Allhalloween, All Hallows' Eve or All Saints' Eve is a
            celebration observed in a number of countries on 31 October.
          </p>
        </div>
      </section>
    </>
  );
}
