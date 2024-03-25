import React from "react";
import * as Yup from "yup";
import Title from "../../components/Headings/title";
import SubTitle from "../../components/Headings/subtitle";
import InputField from "../../components/forms/inputField";
import { Form, Formik } from "formik";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  SuccessToast,
  ErrorToast,
} from "../../components/helpers/toast-container";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image/image";
import IronManImg from "../../assets/images/iron_man.png";
import { AuthButton, GoogleButton } from "../../components/buttons/buttons";
import { BackIcon } from "../../assets/icons/auth-icons/icons";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required!")
      .min(8, "Must be minimum 8 characters long!")
      .max(20, "Must be maximum 20 characters long!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex flex-col items-center justify-center w-full md:w-8/12">
        <div className="flex flex-col p-3 gap-[1rem] w-full md:w-[25rem]">
          <div className="flex flex-col gap-3">
            <Title text="Log In" className="text-4xl fw_600" />
            <SubTitle text="Welome back! Please enter your details." />
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
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
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    isPassword={true}
                    xVal={-80}
                  />
                  <div className="text-left mb-3">
                    <a href="#" className="blue font-semibold text-sm">
                      Forgot Password?
                    </a>
                  </div>
                  <div>
                    <AuthButton
                      type="submit"
                      text="Sign in"
                      className="secondary-bg text-white w-full"
                    />
                  </div>
                </Form>
              );
            }}
          </Formik>
          <GoogleButton />
          <div className="text-center text-sm fw_500">
            <p className="light_gray">
              Don't have an account?{" "}
              <a href="#" className="blue">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Image
        src={IronManImg}
        className="max-w-sm lg:max-w-lg pointer-events-none relative hidden lg:block"
      />
    </div>
  );
}
