import React, { useContext, useState } from "react";
import VenomImg from "../../assets/images/Venom_img.png";
import HeroTitle from "../../components/main/hero";
import Paragraph from "../../components/main/Paragraph";
import { TextGenerateEffect } from "../../components/ui/textgenerateEffect";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import MainHeading from "../../components/Headings/main-heading";
import { CheckedIcon, RejectIcon } from "../../assets/icons/home-icons/icons";
import BounceEffect from "../../components/ui/bounceEffect";
import StrokedTextEffect from "../../components/ui/strokedTextEffect";
import spideyIMG from "../../assets/images/moonKnight.png";
import { Formik } from "formik";
import * as Yup from "yup";
import ContactForm from "../../components/forms/contact-form";
import { UserContext } from "../../context/auth-context";
import { WarnToast } from "../../components/helpers/toast-container";
import AddDoc from "../../utils/addDocuments/add-doc";
import herosIMG from "../../assets/images/herosImg.png";
import NumberCountEffect from "../../components/ui/numberCountEffect";

export default function Home() {
  return (
    <div>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
      <SlideFive />
    </div>
  );
}

const SlideOne = () => {
  return (
    <section>
      <div className="bg-[#040507] flex justify-evenly relative overflow-hidden">
        <div className="flex items-end h-[85vh] md:h-auto md:items-center lg:p-12 z-[30]">
          <div className="flex flex-col gap-2 items-center justify-end p-3 mb-8 w-full lg:w-[35rem]">
            <HeroTitle>
              New c<span className="strokeText">omic</span>s today
            </HeroTitle>
            <Paragraph>
              <TextGenerateEffect words="see what comics are in your local book and recap the last few issues" />
            </Paragraph>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-zinc-900 to-transparent z-[20] md:hidden"></div>
        <div className="w-full h-[2rem] absolute bottom-0 left-0 bg-gradient-to-b from-zinc-900 to-white z-[5]"></div>
        <StrokedTextEffect>Marvel Comics</StrokedTextEffect>
        <div className="w-full absolute top-0 left-0 h-full md:h-auto md:max-w-md lg:max-w-xl md:relative z-0">
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            src={VenomImg}
            className="w-full h-full pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

const SlideTwo = () => {
  const [selectId, setSelectId] = useState(null);
  const features = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Our Mission",
      desc: "Discover our mission to empower Marvel fans worldwide by providing a platform to explore, engage, and celebrate the iconic characters and stories of the Marvel universe.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Team of Marvel Enthusiasts",
      desc: "Get to know the passionate team behind Marvel Chronicles. Our dedicated enthusiasts are committed to delivering an immersive and unforgettable experience for every Marvel fan.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "A Journey Through Marvel's Legacy",
      desc: "Embark on a journey through Marvel's rich legacy, from its iconic origins to the modern-day epic adventures. Dive deep into the stories, characters, and legends that define Marvel's timeless appeal.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
        duration: 1.4,
      },
    },
  };

  const link = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-14">
      <div className="max-w-screen-xl flex flex-col items-center text-center mx-auto px-4 text-light_gray md:px-8">
        <MainHeading
          heading="About"
          subheading="About Marvel Chronicles"
          content="Learn about the inspiration behind Marvel Chronicles, our dedication
            to bringing the Marvel universe to life, and how you can join the
            excitement"
        />
        <div className="mt-12">
          <motion.ul
            variants={container}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            className="grid gap-x-12 [&>.feature-1]:pl-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-12"
          >
            {features.map((item) => (
              <LayoutGroup key={item.id}>
                <BounceEffect>
                  <motion.li
                    key={item.id}
                    variants={link}
                    className={`feature-${
                      item.id + 1
                    } space-y-3 py-8 lg:px-8 sm:py-0 cursor-pointer`}
                    layoutId={item.id}
                    onClick={() => setSelectId(item.id)}
                  >
                    <div className="w-12 h-12 mx-auto bg-gray-100 text-white p-7 rounded-full flex items-center justify-center">
                      <div className="bg-rose-100 text-red p-2 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-dark_gray text-gray-800 font-semibold">
                      {item.title}
                    </h4>
                    <p>{item.desc}</p>
                  </motion.li>
                </BounceEffect>
                <AnimatePresence>
                  {selectId && (
                    <motion.div
                      className="fixed  flex items-center justify-center inset-0 bg-opacity-50 bg-black z-[10]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {features.map(
                        (item) =>
                          item.id === selectId && (
                            <motion.li
                              key={item.id}
                              layoutId={item.id}
                              className={`space-y-3 py-10 lg:p-8 sm:py-0 rounded-xl bg-gray-50 w-[25rem] cursor-pointer`}
                              onClick={() => setSelectId(null)}
                            >
                              <div className="w-12 h-12 mx-auto bg-gray-100 text-white p-7 rounded-full flex items-center justify-center">
                                <div className="bg-rose-100 text-red p-2 rounded-full">
                                  {item.icon}
                                </div>
                              </div>
                              <h4 className="text-dark_gray text-gray-800 font-semibold">
                                {item.title}
                              </h4>
                              <p>{item.desc}</p>
                            </motion.li>
                          )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </LayoutGroup>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

const SlideThree = () => {
  const stats = [
    {
      startNumber: 150,
      data: 220,
      title: "Characters",
    },
    { startNumber: 380, data: 450, title: "Comics" },
    { startNumber: 610, data: 680, title: "Series" },
  ];

  return (
    <section className="py-14 bg-[#040507]">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img src={herosIMG} className="rounded-lg" alt="Img" loading="lazy" />
        </div>
        <div className="mt-6 text-center5 gap-12 sm:mt-0 lg:block">
          <div className="flex items-center justify-center">
            <MainHeading
              heading="stats"
              subheading="Marvel Chronicles Stats"
              subHeadingClass="text-light"
              content="Discover key statistics like character count, series, and comic volumes in the Marvel Comics universe. Explore the vastness of Marvel's iconic stories and characters."
            />
          </div>
          <div className="flex-none grid items-center text-center mt-6 md:mt-10 lg:mt-14">
            <ul className="inline-grid gap-y-8 gap-x-12 md:gap-x-20 grid-cols-3">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  {/* {item.data}+ */}
                  <NumberCountEffect
                    className="text-4xl md:text-5xl text-red font-semibold"
                    startNumber={item.startNumber}
                    endNumber={item.data}
                  />
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const SlideFour = () => {
  const plans = [
    {
      name: "Basic plan",
      price: 0,
      features: [
        {
          access: true,
          item: "Access to basic content",
        },
        {
          access: true,
          item: "Add liked content",
        },
        {
          access: true,
          item: "Exclusive content access",
        },
        {
          access: false,
          item: "Ad customization",
        },
        {
          access: false,
          item: "Social sharing",
        },
        {
          access: false,
          item: "Community engagement access",
        },
      ],
    },
    {
      name: "Standard plan",
      price: 45,
      features: [
        {
          access: true,
          item: "Access to basic content",
        },
        {
          access: true,
          item: "Add liked content",
        },
        {
          access: true,
          item: "Exclusive content access",
        },
        {
          access: true,
          item: "Ad customization",
        },
        {
          access: true,
          item: "Social sharing",
        },
        {
          access: false,
          item: "Community engagement access",
        },
      ],
    },
    {
      name: "Premier plan",
      price: 75,
      features: [
        {
          access: true,
          item: "Access to basic content",
        },
        {
          access: true,
          item: "Add liked content",
        },
        {
          access: true,
          item: "Exclusive content access",
        },
        {
          access: true,
          item: "Ad customization",
        },
        {
          access: true,
          item: "Social sharing",
        },
        {
          access: true,
          item: "Community engagement access",
        },
      ],
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.5,
        duration: 1.4,
      },
    },
  };

  const link = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-14">
      <div className="max-w-screen-xl flex flex-col items-center mx-auto px-4 text-gray-600 md:px-8">
        <MainHeading
          heading="Pricing"
          subheading="Explore Membership Plans"
          content="Discover our membership plans tailored to Marvel fans. Unlock exclusive content, access premium features, and immerse yourself in the ultimate Marvel experience"
        />
        <motion.div
          variants={container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="mt-16 space-y-6 justify-self-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3"
        >
          {plans.map((item, idx) => (
            <motion.div
              key={idx}
              variants={link}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative flex-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-stretch flex-col p-8 rounded-xl border"
            >
              <div className="text-center">
                <span className="text-red font-medium">{item.name}</span>
                <div className="mt-4 text-gray-800 text-3xl font-semibold">
                  ₹{item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">
                    /mth
                  </span>
                </div>
              </div>
              <ul className="py-8 space-y-3">
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    {featureItem.access ? <CheckedIcon /> : <RejectIcon />}
                    {featureItem.item}
                  </li>
                ))}
              </ul>
              <BounceEffect className="flex-1 flex items-end">
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                  Get Started
                </button>
              </BounceEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SlideFive = () => {
  const { user } = useContext(UserContext);
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Fullname is required")
      .min(8, "Must be 8 characters minimum")
      .max(40, "Must be 40 characters maximum"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    message: Yup.string()
      .required("Message is required")
      .min(12, "Must be 12 characters minimum")
      .max(120, "Must be 120 characters maximum"),
  });
  async function handleSubmit(values, { resetForm }) {
    if (!user) {
      WarnToast({ message: "Please Login to Submit..." });
    } else {
      const { fullname, email, message } = values;
      await AddDoc(values);
      resetForm();
    }
  }
  return (
    <main className="flex max-w-screen-xl mx-auto  overflow-hidden">
      <div className="flex-1 rounded-lg  max-w-2xl hidden lg:block">
        <img
          src={spideyIMG}
          className="w-full h-screen rounded-full object-cover pointer-events-none"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
        <div className="max-w-md md:max-w-xl flex-1 mx-auto px-4 text-gray-600">
          <MainHeading
            heading=""
            subheading="Get in touch"
            content="Have questions or feedback? Contact us to connect with our team and share your thoughts. We're here to assist you with any inquiries."
          />
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values }) => {
              return <ContactForm />;
            }}
          </Formik>
        </div>
      </div>
    </main>
  );
};
