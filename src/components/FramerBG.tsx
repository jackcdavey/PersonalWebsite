import { motion } from "framer-motion"
import '../App.css';
import { useEffect, useState } from "react";


function findX() {
    let x = 1;
    return x;
}

export default function FramerBG() {
    let y = findX();


    return (
        <div className="example-container">

            <motion.div
                animate={{
                    scale: [y, 2, 1, 2, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
        </div>
    )
}

