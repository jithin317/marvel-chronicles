import React, { useContext, useState } from "react";
import { Auth } from "../../utils/firebase/firebaseConfig";
import { UserContext } from "../../context/auth-context";
import VenomImg from "../../assets/images/Venom_img.png";
import { signOut } from "firebase/auth";
import HeroTitle from "../../components/main/hero";
import Paragraph from "./Paragraph";
import { TextGenerateEffect } from "../../components/ui/textgenerateEffect";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <SlideOne />
      <SlideTwo />
      {/* <div className="h-[20vh] border-2 border-rose-900">Hello</div> */}
    </div>
  );
}

const SlideOne = () => {
  return (
    <div className="bg-[#040507] flex justify-evenly relative overflow-hidden">
      <div className="flex items-end h-[85vh] md:h-auto md:items-center lg:p-12 z-[30]">
        <div className="flex flex-col gap-2 items-center justify-end p-3 mb-8 w-full lg:w-[35rem]">
          <HeroTitle>
            <TextGenerateEffect words="new comics today" />
          </HeroTitle>
          <Paragraph>
            <TextGenerateEffect words="see what comics are in your local book and recap the last few issues" />
          </Paragraph>
        </div>
      </div>
      <div className="overlay w-full h-full absolute top-0 left-0 bg-[#040507] bg-opacity-50 z-[20] md:hidden"></div>
      <motion.div
        initial={{ x: -80 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute top-[45%] md:top-[20%] left-10 w-[40rem] opacity-40 strokedText uppercase text-[5.5rem] lg:text-[12rem] leading-tight font-semibold pointer-events-none select-none z-[10]"
      >
        Marvel Comics
      </motion.div>
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
        <div className="max-w-xl text-center space-y-3">
          <h3 className="text-red font-semibold">About</h3>
          <div className="text-dark text-3xl font-semibold sm:text-4xl">
            <TextGenerateEffect words="About Marvel Chronicles" />
          </div>
          <div>
            <TextGenerateEffect
              words=" Learn about the inspiration behind Marvel Chronicles, our dedication
            to bringing the Marvel universe to life, and how you can join the
            excitement"
            />
          </div>
        </div>
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
                <AnimatePresence>
                  {selectId && (
                    <motion.div
                      className="fixed  flex items-center justify-center inset-0 bg-opacity-50 bg-black"
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
