import React from "react";

export default function Paragraph({
  text = "",
  color = "text-white",
  className = "text-xl p-3",
  children,
}) {
  return <span className={`${color} ${className} text-right`}>{children}</span>;
}
