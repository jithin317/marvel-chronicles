import React, { useState } from "react";
import {
  CheckedIcon,
  PasswordEyeClose,
  PasswordEyeOpen,
  RejectIcon,
} from "../../assets/icons/auth-icons/icons";
import { ErrorMessage, Field } from "formik";
import { motion } from "framer-motion";

export default function InputField({
  label = "",
  type = "text",
  isPassword = false,
  passwordCheck = false,
  name = "",
  id = "",
  inputClassName = "py-[0.5rem] px-[0.8rem] rounded-md outline-none ",
  labelClassName = "text-sm",
  placeholder = "Enter something",
  passwordCheckClass = "flex items-center justify-center gap-1",
  xVal = 20,
}) {
  const [eyeIsOpen, setEyeIsOpen] = useState(false);
  const item = {
    initial: {
      opacity: 0,
      x: xVal,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.5 },
    },
  };
  return (
    <motion.div
      variants={item}
      initial="initial"
      animate="visible"
      className="flex flex-col select-none"
    >
      <Field name={name}>
        {({ field, meta, form }) => (
          <>
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor={id}
                className={`dark_gray font-medium ${labelClassName}`}
              >
                {label}
              </label>
              <input
                type={isPassword ? (eyeIsOpen ? "text" : type) : type}
                id={id}
                {...field}
                className={
                  meta.touched && meta.error
                    ? inputClassName + " border warning_border"
                    : "border light_border " + inputClassName
                }
                placeholder={placeholder}
              />
              {isPassword && (
                <a
                  className="absolute right-[3%] top-[50%] cursor-pointer"
                  onClick={() => setEyeIsOpen(!eyeIsOpen)}
                >
                  {eyeIsOpen ? <PasswordEyeOpen /> : <PasswordEyeClose />}
                </a>
              )}
            </div>
            {passwordCheck && (
              <div className="flex flex-wrap gap-2 text-xs w-[20rem] m-3">
                <p
                  className={
                    meta.touched && meta.value.length < 8
                      ? `${passwordCheckClass} red`
                      : meta.touched
                      ? `${passwordCheckClass} text-lime-600`
                      : `${passwordCheckClass} light_gray`
                  }
                >
                  {meta.touched && meta.value.length < 8 ? (
                    <RejectIcon fill="#F94B4B" />
                  ) : meta.touched ? (
                    <CheckedIcon />
                  ) : (
                    <RejectIcon />
                  )}
                  {"  "}8 characters minimum
                </p>
                <p
                  className={
                    meta.touched && !Boolean(meta.value.match(/\d/))
                      ? `${passwordCheckClass} red`
                      : meta.touched
                      ? `${passwordCheckClass} text-lime-600`
                      : `${passwordCheckClass} light_gray`
                  }
                >
                  {meta.touched && !Boolean(meta.value.match(/\d/)) ? (
                    <RejectIcon fill="#F94B4B" />
                  ) : meta.touched ? (
                    <CheckedIcon />
                  ) : (
                    <RejectIcon />
                  )}{" "}
                  1 number
                </p>
                <p
                  className={
                    meta.touched && !Boolean(meta.value.match(/[^A-Za-z0-9]/))
                      ? `${passwordCheckClass} red`
                      : meta.touched
                      ? `${passwordCheckClass} text-lime-600`
                      : `${passwordCheckClass} light_gray`
                  }
                >
                  {meta.touched &&
                  !Boolean(meta.value.match(/[^A-Za-z0-9]/)) ? (
                    <RejectIcon fill="#F94B4B" />
                  ) : meta.touched ? (
                    <CheckedIcon />
                  ) : (
                    <RejectIcon />
                  )}{" "}
                  1 special character
                </p>
                <p
                  className={
                    meta.touched && meta.value === meta.value.toLowerCase()
                      ? `${passwordCheckClass} red`
                      : meta.touched
                      ? `${passwordCheckClass} text-lime-600`
                      : `${passwordCheckClass} light_gray`
                  }
                >
                  {meta.touched && meta.value === meta.value.toLowerCase() ? (
                    <RejectIcon fill="#F94B4B" />
                  ) : meta.touched ? (
                    <CheckedIcon />
                  ) : (
                    <RejectIcon />
                  )}{" "}
                  1 uppercase letter
                </p>
              </div>
            )}
          </>
        )}
      </Field>
      {!passwordCheck && (
        <div style={{ minHeight: "1.2rem" }}>
          <ErrorMessage name={name}>
            {(msg) => (
              <span className="red left text-[12px] flex justify-start">
                &middot; {msg}
              </span>
            )}
          </ErrorMessage>
        </div>
      )}
    </motion.div>
  );
}
