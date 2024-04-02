import React from "react";
import * as Yup from "yup";
import Title from "../../components/Headings/title";
import SubTitle from "../../components/Headings/subtitle";
import InputField from "../../components/forms/inputField";
import { Form, Formik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image/image";
import CapImg from "../../assets/images/cap_america.png";
import { AuthButton, GoogleButton } from "../../components/buttons/buttons";
import { HandleGoogleCreds } from "../../utils/auth-handlers/google-creds";
import { HandleSignUp } from "../../utils/auth-handlers/signup-handler";

export default function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required!")
      .min(8, "Must be minimum 8 characters long!")
      .max(20, "Must be maximum 20 characters long!"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is required!"),
  });

  return (
    <div className="flex justify-center min-h-screen">
      <Image
        src={"https://i.ibb.co/Fzw7ykf/cap-america-min.png"}
        alt={""}
        className="max-w-sm lg:max-w-lg pointer-events-none relative hidden md:block"
      />
      <div className="flex flex-col items-center justify-center w-full md:w-8/12">
        <div className="flex flex-col p-3 gap-[1rem] max-w-[25rem]">
          <div className="flex flex-col gap-3">
            <Title text="Sign Up" className="text-4xl fw_600" />
            <SubTitle text="Start your free trail today." />
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => HandleSignUp(values, navigate)}
          >
            {({ values }) => {
              return (
                <Form className="flex flex-col">
                  <InputField
                    id="username"
                    label="Username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    xVal={80}
                  />
                  <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    xVal={-80}
                  />
                  <InputField
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    isPassword={true}
                    xVal={80}
                    passwordCheck={true}
                  />
                  <div>
                    <AuthButton
                      type="submit"
                      text="Create Account"
                      className="secondary-bg text-white w-full"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
          <GoogleButton
            text="Sign up with Google"
            onClkFn={() => HandleGoogleCreds(navigate)}
          />
          <div className="text-center text-sm fw_500">
            <p className="light_gray">
              Already have an account?{" "}
              <Link to="/login" className="blue">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
