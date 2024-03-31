import React from "react";

export default function CharacterLoader() {
  return Array.from(Array(9).keys()).map((ele, idx) => {
    return (
      <div key={idx} className="group relative animate-pulse">
        <div className="w-full h-[23rem] sm:h-[18rem] rounded-md bg-gray-300 lg:aspect-none lg:h-80"></div>
        <div className="mt-2 w-full flex justify-between">
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-sm w-[50%] h-5 bg-gray-50 rounded-md  bg-gray-400 text-gray-700"></h3>
            <h3 className="text-sm w-[30%] h-5 bg-gray-50 rounded-md  bg-gray-400 text-gray-700"></h3>
          </div>
        </div>
      </div>
    );
  });
}
