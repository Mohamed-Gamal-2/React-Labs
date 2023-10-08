import React from "react";
import styles from "./Notfound.module.css";

export default function Notfound() {
  return (
    <>
      <section className={`${styles.section}`}>
        <div className={`${styles.house}`}></div>
        <div className={`${styles.headingCont}`}>
          <h1 className={`${styles.heading}`}>
            404: Bad Request - Page not found
          </h1>
        </div>
      </section>
    </>
  );
}
