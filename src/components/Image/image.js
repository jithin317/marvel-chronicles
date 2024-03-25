import React, { useState } from "react";

export default function Image({ src, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`${className} ${isLoaded} ? blur-none : blur-md`}>
      <img
        src={src}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-center`}
      />
    </div>
  );
}
