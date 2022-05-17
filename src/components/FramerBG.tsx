import { motion } from "framer-motion";
import "../App.css";
import { useEffect, useState } from "react";
import { FramerContainer } from "../styles/stylesheet";

let xPos = Math.random() * window.innerWidth;
let yPos = Math.random() * window.innerHeight;
let xDir = 1;
let yDir = 1;

let bWidth = 150;
let bHeight = 150;

export default function FramerBG() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 0);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  if (xPos > window.innerWidth - bWidth) xDir = -1;
  if (xPos < 0) xDir = 1;

  if (yPos > window.innerHeight - bHeight) yDir = -1;
  if (yPos < 0) yDir = 1;

  return (
    <FramerContainer>
      <div className="example-container">
        <motion.div
          animate={{
            x: (xPos += xDir),
            y: (yPos += yDir),
            //scale: [1, 2, 1, 2, 1],
            //rotate: [0, 0, 270, 270, 0],
            //borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        />
      </div>
    </FramerContainer>
  );
}
