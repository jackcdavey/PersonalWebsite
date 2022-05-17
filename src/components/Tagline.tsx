import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedTitle from "../hooks/revealText";

const words = ["Developer", "Designer", "Photographer"];

export default function Tagline() {
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <h2 className="info">
      <AnimatedTitle {...words[index % words.length]} />
    </h2>
  );
}
