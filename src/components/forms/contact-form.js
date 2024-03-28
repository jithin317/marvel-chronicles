import React from "react";
import InputField from "./inputField";
import { Form } from "formik";
import BounceEffect from "../ui/bounceEffect";

export default function ContactForm() {
  return (
    <Form className="space-y-5 mt-12 lg:pb-12">
      <InputField id="fullname" label="Fullname" name="fullname" type="text" />
      <InputField id="email" label="Email" name="email" type="text" />
      <InputField
        id="message"
        label="Message"
        name="message"
        isTextArea={true}
        textAreaClassName="h-32 px-3 py-2 rounded-md outline-none resize-none appearance-none"
      />
      <BounceEffect>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
        >
          Submit
        </button>
      </BounceEffect>
    </Form>
  );
}
