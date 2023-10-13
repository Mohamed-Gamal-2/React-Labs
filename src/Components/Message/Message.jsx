import React, { useEffect, useState } from "react";
import styles from "./Message.module.css";
import { useParams } from "react-router-dom";
import avatar from "./images/avatar.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Redux/APISlice";

export default function Message() {
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState("");
  let [success, setSuccess] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  async function AddNewMessage(values) {
    try {
      dispatch(
        sendMessage({
          ...values,
          receivedId: id,
        })
      );
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  const validationSchema = Yup.object({
    messageContent: Yup.string()
      .required("This field is reuired")
      .min(3, "You have to enter at least 3 characters")
      .max(300, "You can not exceed 300 characters"),
  });

  const form = useFormik({
    initialValues: {
      messageContent: "",
    },
    validationSchema,

    onSubmit: (values) => {
      AddNewMessage(values);
    },
  });

  return (
    <>
      <section className={`${styles.meUserSection} mx-auto pb-5`}>
        <img src={avatar} alt="avatar" className={`${styles.meAvatar}`} />
        <form
          onSubmit={form.handleSubmit}
          onClick={() => {
            setError("");
          }}
        >
          {error ? (
            <p className={`${styles.error} text-center`}>{error}</p>
          ) : (
            <></>
          )}
          <textarea
            className={`form-control w-75 mx-auto  ${styles.meTextArea}`}
            id="exampleFormControlTextarea1"
            name="messageContent"
            value={form.values.messageContent}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            rows="7"
            placeholder="Write down your message, Don't worry we'll keep your identity private"
          ></textarea>
          {form.errors.messageContent && form.touched.messageContent ? (
            <p className={`${styles.meAlert} text-center`}>
              {form.errors.messageContent}
            </p>
          ) : (
            ""
          )}
          {success ? (
            <p className={`${styles.meSuccess} text-center`}>
              Your message has been added successfully
            </p>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className={`${styles.meBtn} py-1 mx-auto d-flex`}
          >
            {isLoading ? (
              <i className="fa fa-spin fa-spinner"></i>
            ) : (
              <>
                <i className="fa-regular fa-paper-plane me-2"></i>send
              </>
            )}
          </button>
        </form>
      </section>
    </>
  );
}
