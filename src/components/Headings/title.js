import React from "react";
import { motion } from "framer-motion";

export default function Title({ color = "dark", className = "", text = "" }) {
  const item = {
    initial: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };
  return (
    <motion.span
      variants={item}
      initial="initial"
      animate="visible"
      className={`${color} ${className}`}
    >
      {text}
    </motion.span>
  );
}
