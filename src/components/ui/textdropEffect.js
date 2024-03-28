import React from "react";
import { motion } from "framer-motion";

export default function TextDropEffect({ children }) {
  const wordsArray = words.split(" ");
  const container = {
    initial: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
  };
  return <motion.div>{children}</motion.div>;
}
