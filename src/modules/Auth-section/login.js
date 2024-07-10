import React from "react";
import * as Yup from "yup";
import Title from "../../components/Headings/title";
import SubTitle from "../../components/Headings/subtitle";
import InputField from "../../components/forms/inputField";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../components/Image/image";
import { AuthButton, GoogleButton } from "../../components/buttons/buttons";
import { HandleGoogleCreds } from "../../utils/auth-handlers/google-creds";
import { HandleLogin } from "../../utils/auth-handlers/login-handler";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex flex-col items-center justify-center w-full md:w-8/12">
        <div className="flex flex-col p-3 gap-[1rem] md:w-[25rem]">
          <div className="flex flex-col gap-3">
            <Title text="Log In" className="text-4xl fw_600" />
            <SubTitle text="Welome back! Please enter your details." />
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => HandleLogin(values, navigate)}
          >
            {({ values }) => {
              return (
                <Form className="flex flex-col">
                  <InputField
                    id="email"
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
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
                    <Link to="#" className="blue font-semibold text-sm">
                      Forgot Password?
                    </Link>
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
          <GoogleButton onClkFn={() => HandleGoogleCreds(navigate)} />
          <div className="text-center text-sm fw_500">
            <p className="light_gray">
              Don't have an account?{" "}
              <Link to="/signup" className="blue">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Image
        src={
          "https://res.cloudinary.com/dot8ulzhb/image/upload/v1720608142/iron-man-min_gyezrc.webp"
        }
        className="max-w-sm lg:max-w-lg pointer-events-none relative hidden md:block"
        alt="iron man lego"
      />
    </div>
  );
}
