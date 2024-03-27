import React from "react";

export default function HeroTitle({
  text = "",
  color = "text-red",
  className = "uppercase text-[5rem] leading-none tracking-tighter lg:text-9xl font-bold ",
  children,
}) {
  return <span className={`${color} ${className} `}>{children}</span>;
}
