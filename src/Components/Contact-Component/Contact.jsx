import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <>
      <section className={`${styles.sectionOne} pt-3`} style={{ zIndex: "0" }}>
        <div className={`${styles.spider} `} style={{ zIndex: "0" }}></div>
        <div className={`${styles.wolf} `}></div>
        <div className={`container pb-5`} style={{ zIndex: "9999" }}>
          <h2 className={`${styles.yellow} text-center mb-5`}>
            Invite Someone Special
          </h2>
          <div className={`row`}>
            <div className={`col-sm-6 `}>
              <input
                type="text"
                name="guestName"
                placeholder="Guest Name"
                className={`w-100 ${styles.inputs}`}
              />
            </div>
            <div className={`col-sm-6`}>
              <input
                type="text"
                name="guestEmail"
                placeholder="Guest Email Address"
                className={`w-100 ${styles.inputs}`}
              />
            </div>
          </div>
          <div className={`row mt-3`}>
            <div className={`col-sm-6`}>
              <input
                type="text"
                name="guestMobile"
                placeholder="Guest Mobile Number"
                className={`w-100 ${styles.inputs}`}
              />
            </div>
            <div className={`col-sm-6 `}>
              <select name="" id="" className={` ${styles.select}`}>
                <option value="TP">Ticket Plan</option>
                <option value="SE">Single Entry</option>
                <option value="CoupleE">Couple Entry</option>
                <option value="CombineE">Combine Entry</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center mt-5">
              <button className={`${styles.KMbtn} `}>
                <Link to={"/"} className={`${styles.KMlink} `}>
                  Send invitation
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.sectionTwo} `}>
        <h2 className={`${styles.yellow} text-center mb-5 pt-5`}>
          Signup For Newsletter
        </h2>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6 position-relative">
              <input
                type="text"
                name="Email"
                placeholder="Your Email Address Here"
                className={`w-100 ${styles.inputs} rounded-pill py-1 `}
              />
              <button className={`${styles.KMbtn2}`}>
                <Link to={"/"} className={`${styles.KMlink} `}>
                  Subscribe
                </Link>
              </button>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-sm-6 position-relative">
              <h3 className="text-white text-center">Get Update</h3>
              <div className="mt-3 d-flex justify-content-center pb-3">
                <button className={`${styles.btns} me-2`}>
                  <a href="http://facebook.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${styles.btns} me-2`}>
                  <a href="http://twitter.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${styles.btns} me-2`}>
                  {" "}
                  <a href="http://github.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
                <button className={`${styles.btns}`}>
                  <a href="http://linkedin.com" target="_blank">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="xl"
                      style={{ color: "#f7ea66" }}
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
