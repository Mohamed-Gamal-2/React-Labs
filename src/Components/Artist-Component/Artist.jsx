import React from "react";
import artist from "./images/artist-image.png";
import styles from "./Artist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Artist() {
  return (
    <section
      className={`d-flex flex-column justify-content-evenly ${styles.section}`}
    >
      <div className={`${styles.web}`}></div>
      <div className={`${styles.spider}`}></div>
      <h1 className={`${styles.yellow} text-center`}>Our Halloween's Artist</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={`d-flex align-items-center `}>
              <div className="col-6 overflow-hidden d-flex justify-content-center align-items-self">
                <img src={artist} className={`${styles.image}`} />
              </div>
              <div className="col-6 overflow-hidden">
                <span className="text-white fs-3">DJ Remerson Huke</span>
                <span className="text-white fs-5">Lead DJ On Deadpoll</span>
                <p className="text-white fs-6 mt-4">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore.
                </p>
                <div>
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
          <div className="col-md-6 col-sm-12">
            <div className={`d-flex align-items-center `}>
              <div className="col-6 overflow-hidden d-flex justify-content-center align-items-self">
                <img src={artist} className={`${styles.image}`} />
              </div>
              <div className="col-6 overflow-hidden">
                <span className="text-white fs-3">DJ Remerson Huke</span>
                <span className="text-white fs-5">Lead DJ On Deadpoll</span>
                <p className="text-white fs-6 mt-4">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore.
                </p>
                <div>
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
        </div>
      </div>
    </section>
  );
}
