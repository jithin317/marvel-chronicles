import React from "react";
import { motion } from "framer-motion";

export default function HeroTitle({
  color = "text-red",
  className = `uppercase text-[4.8rem] leading-none tracking-tighter font-semibold lg:text-9xl lg:font-bold`,
  children,
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -40 }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.8, duration: 0.8 },
      }}
      className={`${color} ${className}`}
    >
      {children}
    </motion.span>
  );
}
