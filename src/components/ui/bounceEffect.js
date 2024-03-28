import React from "react";
import { motion } from "framer-motion";
export default function BounceEffect({
  children,
  className = "",
  tapScale = 0.95,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: tapScale }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
