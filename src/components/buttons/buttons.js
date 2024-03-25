import { GoogleLogo } from "../../assets/icons/auth-icons/icons";
import { motion } from "framer-motion";

const item = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

export function AuthButton({ className = "", text = "Login", onClkFn, type }) {
  return (
    <motion.button
      type={type}
      variants={item}
      initial="initial"
      animate="visible"
      transition={{ delay: 0.8, duration: 0.3 }}
      className={`py-[0.5rem] px-[0.8rem] rounded-md ${className}`}
      onClick={onClkFn}
    >
      {text}
    </motion.button>
  );
}

export function GoogleButton({
  className = "",
  text = "Sign in with Google",
  onClkFn,
  type,
}) {
  return (
    <motion.button
      type={type}
      variants={item}
      initial="initial"
      animate="visible"
      transition={{ delay: 0.8, duration: 0.3 }}
      className={`py-[0.5rem] px-[0.8rem] rounded-md flex items-center justify-center gap-4 text-center dark_gray fw_500 light_border w-full`}
      onClick={onClkFn}
    >
      <GoogleLogo /> {text}
    </motion.button>
  );
}
