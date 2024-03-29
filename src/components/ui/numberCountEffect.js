import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function NumberCountEffect({
  startNumber = 0,
  endNumber,
  className,
}) {
  const count = useMotionValue(startNumber);
  const rounded = useTransform(count, Math.round);

  function handleVisible() {
    animate(count, endNumber, { duration: 3 });
    return { opacity: 1 };
  }

  useEffect(() => {}, []);
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={handleVisible}
      className={className}
    >
      {rounded}
    </motion.div>
  );
}
