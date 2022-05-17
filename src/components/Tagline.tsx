import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedTitle from "../hooks/revealText";

const words = ["Developer", "Designer", "Photographer"];

export default function Tagline() {
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={index}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <h2 className="info">{words[index % words.length]}</h2>
      </motion.div>
    </AnimatePresence>
  );
}
