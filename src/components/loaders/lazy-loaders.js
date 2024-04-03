import React from "react";

export default function LoadingBackground() {
  return (
    <div className="flex w-full h-screen bg-gray-300">
      <div className="max-w-full mx-auto">
        <img
          src="https://i.ibb.co/rG8CjHv/marvel-loader-min.webp"
          className="w-full h-full"
          alt="heros-loading-background"
        />
      </div>
    </div>
  );
}
