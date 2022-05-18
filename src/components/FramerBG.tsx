import { motion } from "framer-motion";
import "../App.css";
import { useEffect, useState } from "react";
import { FramerContainer } from "../styles/stylesheet";

const colorOptions = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#00FFFF",
  "#FF00FF",
  "#000000",
];

//
//Please God, forgive me for the sins I am about to commit
//

let speed = 0.5;



const bouncingElements = [
  {
    id: 0,
    xDir: speed,
    yDir: speed,
    bWidth: 150,
    xPos: Math.random() * window.innerWidth,
    yPos: Math.random() * window.innerHeight,
    color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
  },
  {
    id: 1,
    xPos: Math.random() * window.innerWidth,
    yPos: Math.random() * window.innerHeight,
    xDir: 0.75*speed,
    yDir: 0.75*speed,
    bWidth: 200,
    color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
  },
  {
    id: 2,
    xPos: Math.random() * window.innerWidth,
    yPos: Math.random() * window.innerHeight,
    xDir: 0.25*speed,
    yDir: 0.25*speed,
    bWidth: 400,
    color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
  },
];

  for(let i = 0; i < bouncingElements.length; i++) {
    if (bouncingElements[i].xPos + bouncingElements[i].bWidth > window.innerWidth || bouncingElements[i].xPos < 0) {
      bouncingElements[i].xPos = window.innerWidth / 2;
    }
    if (bouncingElements[i].yPos+ bouncingElements[i].bWidth > window.innerHeight || bouncingElements[i].yPos < 0) {
      bouncingElements[i].yPos = window.innerHeight / 2;
    }
  }

export default function FramerBG() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 0);
    return () => {
      clearTimeout(intervalId);
    };
  }, []);


//
//Yea no I'm going to hell
//  
  
  
  //Spagetti-ass correction for my already gd Angel Hair code

  
  
  if (bouncingElements[0].xPos > window.innerWidth - bouncingElements[0].bWidth)
    bouncingElements[0].xDir = bouncingElements[0].xDir * -1;
    if (bouncingElements[0].xPos < 0)
    bouncingElements[0].xDir = bouncingElements[0].xDir * -1;
  if (bouncingElements[0].yPos >window.innerHeight - bouncingElements[0].bWidth)
    bouncingElements[0].yDir = bouncingElements[0].yDir * -1;
  if (bouncingElements[0].yPos < 0)
    bouncingElements[0].yDir = bouncingElements[0].yDir * -1;
  
  if (bouncingElements[1].xPos > window.innerWidth - bouncingElements[1].bWidth)
    bouncingElements[1].xDir = bouncingElements[1].xDir * -1;
  if (bouncingElements[1].xPos < 0)
    bouncingElements[1].xDir = bouncingElements[1].xDir * -1;
  if (bouncingElements[1].yPos > window.innerHeight - bouncingElements[1].bWidth)
    bouncingElements[1].yDir = bouncingElements[1].yDir * -1;
  if (bouncingElements[1].yPos < 0)
    bouncingElements[1].yDir = bouncingElements[1].yDir * -1;
  
  if (bouncingElements[2].xPos > window.innerWidth - bouncingElements[2].bWidth)
    bouncingElements[2].xDir = bouncingElements[2].xDir * -1;
  if (bouncingElements[2].xPos < 0)
    bouncingElements[2].xDir = bouncingElements[2].xDir * -1;
  if (bouncingElements[2].yPos > window.innerHeight - bouncingElements[2].bWidth)
    bouncingElements[2].yDir = bouncingElements[2].yDir * -1;
  if (bouncingElements[2].yPos < 0)
    bouncingElements[2].yDir = bouncingElements[2].yDir * -1;

  
  

  return (
    <FramerContainer>
      <motion.div
        style={{
          position: "absolute",
          width: bouncingElements[0].bWidth,
          height: bouncingElements[0].bWidth,
          borderRadius: bouncingElements[0].bWidth / 2,
          background: bouncingElements[0].color,
        }}
        animate={{
          x: (bouncingElements[0].xPos += bouncingElements[0].xDir),
          y: (bouncingElements[0].yPos += bouncingElements[0].yDir),
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: bouncingElements[1].bWidth,
          height: bouncingElements[1].bWidth,
          borderRadius: bouncingElements[1].bWidth / 2,
          background: bouncingElements[1].color,
        }}
        animate={{
          x: (bouncingElements[1].xPos += bouncingElements[1].xDir),
          y: (bouncingElements[1].yPos += bouncingElements[1].yDir),
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          width: bouncingElements[2].bWidth,
          height: bouncingElements[2].bWidth,
          borderRadius: bouncingElements[2].bWidth / 2,
          background: bouncingElements[2].color,
        }}
        animate={{
          x: (bouncingElements[2].xPos += bouncingElements[2].xDir),
          y: (bouncingElements[2].yPos += bouncingElements[2].yDir),
        }}
      />

    </FramerContainer>
  );
}
