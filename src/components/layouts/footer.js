import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/icons/home-icons/icons";
import { motion } from "framer-motion";
import BounceEffect from "../ui/bounceEffect";

export default function Footer() {
  const footerNavs = [
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Blog",
    },
    {
      href: "#",
      name: "Team",
    },
    {
      href: "#",
      name: "Careers",
    },

    {
      href: "#",
      name: "Support",
    },
  ];

  const iconLinks = [
    {
      href: "https://www.instagram.com/_its_jithin_/",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon w-5 h-5"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
    },
    {
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon w-5 h-5"
          viewBox="0 0 496 512"
        >
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      ),
    },
    {
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon w-5 h-5"
          viewBox="0 0 448 512"
        >
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      ),
    },
    {
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon w-5 h-5"
          viewBox="0 0 576 512"
        >
          <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  };

  const link = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="w-full bg-[#040507]">
      <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg flex flex-col items-start sm:items-center  sm:mx-auto sm:text-center">
          <LogoIcon />
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            className="leading-relaxed mt-2 text-[15px]"
          >
            Stay updated with the latest news, releases, and events from Marvel
            Chronicles. Follow us on social media and join our community of
            superhero enthusiasts.
          </motion.p>
        </div>
        <motion.ul
          variants={container}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0"
        >
          {footerNavs.map((item, idx) => (
            <BounceEffect key={idx}>
              <motion.li
                key={idx}
                variants={link}
                className="hover:text-red w-fit"
              >
                <a href={item.href}>{item.name}</a>
              </motion.li>
            </BounceEffect>
          ))}
        </motion.ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            <Link to={"http://marvel.com"}>
              Data provided by{" "}
              <span className="text-rose-500 hover:text-rose-700"> Marvel</span>
              .<i> &copy; {new Date().getFullYear()} MARVEL</i>
            </Link>
          </div>
          <div className="mt-6 sm:mt-0">
            <motion.ul
              variants={container}
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              className="flex items-center space-x-4"
            >
              {iconLinks.map((icon, idx) => {
                return (
                  <BounceEffect key={idx}>
                    <motion.li
                      variants={link}
                      key={idx}
                      className="w-10 h-10 border rounded-full flex items-center justify-center"
                    >
                      <a href={icon.href}>{icon.svg}</a>
                    </motion.li>
                  </BounceEffect>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
