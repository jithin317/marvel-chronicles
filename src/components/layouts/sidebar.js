import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CancelIcon,
  HamburgerIcon,
  LogoIcon,
} from "../../assets/icons/home-icons/icons";
import { motion } from "framer-motion";
import { UserContext } from "../../context/auth-context";
import { InfoToast } from "../helpers/toast-container";

export default function SideBar() {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const { user, logOut } = useContext(UserContext);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Characters", path: "/characters" },
    { title: "Comics", path: "/" },
    { title: "Series", path: "/" },
  ];

  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    else body.classList.remove(...customBodyStyle);
    const customStyle = ["sticky-nav", "fixed", "border-r"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const link = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };

  function handleSignOut() {
    InfoToast({ message: "Please Wait.." });
    setTimeout(() => {
      logOut();
    }, 2000);
  }

  return (
    <nav ref={navRef} className="bg-[#040507] w-full top-0 z-[999]">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <motion.div
            variants={link}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/">
              <LogoIcon />
            </Link>
          </motion.div>
          <div className="lg:hidden">
            <button
              className="text-light outline-none p-2 border border-transparent rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <CancelIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-40 overflow-auto pr-4" : "hidden"
          }`}
        >
          {!user ? (
            <div>
              <motion.ul
                variants={link}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-col-reverse space-x-0 lg:space-x-4 lg:flex-row"
              >
                <motion.li className="mt-4 lg:mt-0">
                  <Link
                    to="/login"
                    className="py-3 px-4 text-center border text-light rounded-md block lg:inline lg:border-0"
                  >
                    Login
                  </Link>
                </motion.li>
                <motion.li className="mt-8 lg:mt-0">
                  <Link
                    to="/signup"
                    className="py-3 px-5 text-center text-light bg-red hover:bg-red rounded-md shadow block lg:inline"
                  >
                    Sign Up
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          ) : (
            <div>
              <motion.ul
                variants={link}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-col-reverse space-x-0 lg:space-x-4 lg:flex-row"
              >
                <motion.li className="mt-8 lg:mt-0">
                  <Link
                    onClick={handleSignOut}
                    to={"#"}
                    className="py-3 px-5 text-center text-light bg-red hover:bg-red rounded-md shadow block lg:inline"
                  >
                    Log Out
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          )}
          <div className="flex-1 text-center mt-10 lg:mt-0">
            <motion.ul
              variants={container}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              className="justify-center items-center space-y-24 lg:flex lg:space-x-20 lg:space-y-0"
            >
              {navigation.map((item, index) => {
                return (
                  <motion.li
                    variants={link}
                    key={index}
                    className="text-light font-medium hover:text-light_red"
                  >
                    <Link to={item.path}>{item.title.toUpperCase()}</Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
