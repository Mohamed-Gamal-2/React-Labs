import React from "react";
import styles from "./MessageCard.module.css";

export default function MessageCard(props) {
  return (
    <>
      <div className={`${styles.meCard} mx-auto mb-5`}>
        <div className="text-center mt-2">{props.ele.messageContent}</div>
      </div>
    </>
  );
}
