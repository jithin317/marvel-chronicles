import React from "react";
import { motion } from "framer-motion";

export default function StrokedTextEffect({ children }) {
  return (
    <motion.div
      initial={{ x: -80 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-[45%] md:top-[20%] -left-14 max-w-xl opacity-40 strokedText uppercase text-[6rem] lg:text-[12rem] leading-tight font-semibold select-none z-[10]"
    >
      {children}
    </motion.div>
  );
}
