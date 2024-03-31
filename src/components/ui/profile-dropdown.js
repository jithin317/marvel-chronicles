import React, { useEffect, useRef, useState } from "react";
import BounceEffect from "./bounceEffect";

export default function ProfileDropDown({
  className = "",
  signOut,
  imgURL = "",
  name = "",
  email = "",
}) {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  useEffect(() => {
    const handleDropDown = (e) => {
      if (profileRef.current) {
        if (!profileRef.current.contains(e.target)) setState(false);
      }
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  // console.log(imgURL);

  return (
    <div className={`relative p-2 md:p-0 ${className}`}>
      <div className="flex items-center space-x-8">
        <BounceEffect>
          <button
            ref={profileRef}
            className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-red"
            onClick={() => setState(!state)}
          >
            <img
              src={`${imgURL}`}
              className="w-full h-full rounded-full pointer-events-none"
              alt="User_img"
            />
          </button>
        </BounceEffect>
        <div className="lg:hidden">
          <span className="block text-light">{name}</span>
          <span className="text-sm text-gray-400">{email}</span>
        </div>
      </div>
      <ul
        className={`bg-transparent top-12 right-2 mt-4 space-y-4 w-fit z-[10] lg:bg-white lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <li>
          <a
            className="block text-white rounded-t-md hover:text-rose-500 lg:text-gray-600 lg:hover:bg-gray-200 lg:p-3"
            href={"#"}
          >
            Profile
          </a>
        </li>
        <li>
          <a
            onClick={() => signOut()}
            className="block text-white text-gray-600 rounded-b-md hover:text-rose-500 lg:text-gray-600 lg:hover:bg-gray-200 cursor-pointer lg:p-3"
          >
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}
