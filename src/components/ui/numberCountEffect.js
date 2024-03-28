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

  useEffect(() => {
    animate(count, endNumber, { duration: 4 });
  }, []);
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={className}
    >
      {rounded}
    </motion.div>
  );
}
