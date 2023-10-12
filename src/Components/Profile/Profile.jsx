import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import axios from "axios";
import avatar from "./images/avatar.png";
import MessageCard from "../MessageCard/MessageCard";
import jwtDecode from "jwt-decode";
import Modall from "../Modal/Modal";
import StaticExample from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { APIReducer, fetchData } from "../../Redux/APISlice";

export default function Profile() {
  let [username, setUsername] = useState();
  let [userId, setUserID] = useState();
  let [isShown, setIsShown] = useState(false);
  let [allMessages, setAllMessages] = useState([]);
  let { APIData } = useSelector((state) => state.APIData);

  let dispatch = useDispatch();

  function getUserData() {
    let token = localStorage.getItem("userToken");
    let decoded = jwtDecode(token);
    setUserID(decoded.id);
    setUsername(decoded.name);
  }

  useEffect(() => {
    getUserData();
  });
  useEffect(() => {
    dispatch(fetchData());
    setAllMessages(APIData.allMessages);
  }, [APIData]);

  return (
    <div className={`${isShown ? styles.mestopScroll : null}`}>
      <section className={`${styles.meUserSection} mx-auto`}>
        <img src={avatar} alt="avatar" className={`${styles.meAvatar}`} />
        <h3 className="text-center mt-5">{username}</h3>
        <button
          className={`${styles.meBtn} rounded-pill py-1 my-5 d-block mx-auto `}
        >
          <span
            className={`${styles.meLink}`}
            onClick={() => {
              setIsShown(true);
            }}
          >
            <i className="fa-solid fa-share-nodes me-2"></i>
            share
          </span>
        </button>
      </section>

      {allMessages?.length > 0 ? (
        <>
          {allMessages.map((ele) => (
            <MessageCard key={ele._id} ele={ele} />
          ))}
        </>
      ) : (
        <section className={`${styles.meUserSection} mx-auto`}>
          <div className="d-flex justify-content-center align-items-center mt-2">
            You don't have any messages.....
          </div>
        </section>
      )}
      {isShown ? (
        <StaticExample
          setIsShown={setIsShown}
          isShown={isShown}
          username={username}
          userId={userId}
        />
      ) : (
        ""
      )}
    </div>
  );
}
