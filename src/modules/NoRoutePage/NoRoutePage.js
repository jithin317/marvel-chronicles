import React from "react";
import ErrorImg from "../../assets/images/404Image.jpg";
import { useNavigate } from "react-router-dom";

export default function NoRoutePage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
          <div className="flex-1 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] max-w-sm rounded-3xl lg:max-w-lg">
            <img src={ErrorImg} loading="lazy" className="rounded-3xl" />
          </div>
          <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
            <h3 className="text-red font-semibold">404 Error</h3>
            <p className="text-dark text-4xl font-semibold sm:text-5xl">
              Page not found
            </p>
            <p className="text-light_gray">
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <button
              onClick={handleGoBack}
              className="group text-red transition duration-400 hover:text-rose-600 font-medium inline-flex items-center gap-x-1"
            >
              Take me home
              <div className="group-hover:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
