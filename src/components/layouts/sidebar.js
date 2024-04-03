import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CancelIcon,
  HamburgerIcon,
  LogoIcon,
  SearchIcon,
} from "../../assets/icons/home-icons/icons";
import { motion } from "framer-motion";
import { UserContext } from "../../context/auth-context";
import { ErrorToast, InfoToast } from "../helpers/toast-container";
import { signOut } from "firebase/auth";
import { Auth } from "../../utils/firebase/firebaseConfig";
import ProfileDropDown from "../ui/profile-dropdown";
import BounceEffect from "../ui/bounceEffect";

export default function SideBar() {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Characters", path: "/characters" },
    { title: "Comics", path: "/comics" },
    { title: "Series", path: "/series" },
  ];
  useEffect(() => {
    const body = document.body;
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    else body.classList.remove(...customBodyStyle);
    const customStyle = [
      "sticky-nav",
      "fixed",
      "border-r",
      "bg-opacity-80",
      "backdrop-blur-xl",
    ];
    window.onscroll = () => {
      if (navRef.current) {
        if (window.scrollY > 80) navRef.current?.classList.add(...customStyle);
        else navRef.current?.classList.remove(...customStyle);
      }
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

  async function handleSignOut() {
    try {
      await signOut(Auth);
      InfoToast({ message: "Logged Out Successfully" });
      navigate("/");
      setUser(null);
    } catch (error) {
      ErrorToast({ message: error });
    }
  }

  function isNotHome() {
    if (location.pathname !== "/") {
      return true;
    }
    return false;
  }

  return (
    <nav ref={navRef} className="bg-[#040507] w-full top-0 z-[40]">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex flex-row-reverse items-center justify-between py-3 lg:py-4 lg:block">
          {user && isNotHome() && (
            <div className="lg:hidden">
              <BounceEffect tapScale={0.75}>
                <button
                  aria-label="search-icon"
                  className="text-light outline-none p-2 border border-transparent rounded-md focus:border-gray-400 focus:border"
                  onClick={() => setState(!state)}
                >
                  <SearchIcon />
                </button>
              </BounceEffect>
            </div>
          )}
          <motion.div
            variants={link}
            initial={"hidden"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grow flex justify-center"
          >
            <Link to="/">
              <LogoIcon />
            </Link>
          </motion.div>
          <div className="lg:hidden">
            <BounceEffect tapScale={0.75}>
              <button
                aria-label="menu-button"
                className="text-light outline-none p-2 border border-transparent rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? <CancelIcon /> : <HamburgerIcon />}
              </button>
            </BounceEffect>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex flex-col-reverse lg:flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-40 overflow-auto" : "hidden"
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
                <BounceEffect>
                  <motion.li className="mt-4 lg:mt-0">
                    <Link
                      to="/login"
                      className="py-3 px-4 text-center border text-light rounded-md block lg:inline lg:border-0"
                    >
                      Login
                    </Link>
                  </motion.li>
                </BounceEffect>
                <BounceEffect>
                  <motion.li className="mt-8 lg:mt-0">
                    <Link
                      to="/signup"
                      className="py-3 px-5 text-center text-light bg-red hover:bg-red rounded-md shadow block lg:inline"
                    >
                      Sign Up
                    </Link>
                  </motion.li>
                </BounceEffect>
              </motion.ul>
            </div>
          ) : (
            <motion.div
              variants={link}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex-row-reverse  items-center gap-14 lg:flex"
            >
              <div className="border-t border-gray-500 md:border-0">
                <ProfileDropDown
                  imgURL={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/CPCcQSB/dummy-img-min.jpg"
                  }
                  name={user?.displayName}
                  email={user?.email}
                  signOut={handleSignOut}
                />
              </div>
              {isNotHome() && (
                <div className="hidden cursor-pointer lg:block">
                  <BounceEffect>
                    <SearchIcon />
                  </BounceEffect>
                </div>
              )}
            </motion.div>
          )}
          <div className="flex-1 text-center lg:divide-x-0 mt-10 lg:mt-2">
            <motion.ul
              variants={container}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              className="justify-center items-center  space-y-24 lg:flex lg:space-x-20 lg:space-y-0"
            >
              {navigation.map((item, index) => {
                return (
                  <BounceEffect key={index}>
                    <motion.li
                      variants={link}
                      key={index}
                      onClick={() => setState(false)}
                      className="text-light font-medium hover:text-light_red"
                    >
                      <Link to={item.path}>{item.title.toUpperCase()}</Link>
                    </motion.li>
                  </BounceEffect>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
