'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FramerContainer } from "../styles/stylesheet"

const colorOptions = ["#d04a4a", "#d04a8f", "#4f4ad0"]

let speed = 1;

interface BallProps {
    id: number
    xPos: number
    yPos: number
    xDir: number
    yDir: number
    bWidth: number
    color: string
    change?: boolean
}

const bouncingElements = [] as BallProps[];

for (let i = 0; i < 3; i++) {
    const unusedColors = colorOptions.filter((color) => color !== bouncingElements[i - 1]?.color)
    const color = unusedColors[Math.floor(Math.random() * unusedColors.length)]
    bouncingElements.push({
        id: i,
        xPos: Math.random() * (window.innerWidth / (9 - i * 3), 300 - i), // ensure initial position is within the window
        yPos: Math.random() * (window.innerHeight / (9 - i * 3), 300 - i),
        xDir: speed,
        yDir: speed,
        bWidth: Math.max(window.innerWidth / (9 - i * 3), 300 - i * 100),
        color: color,
        change: false,
    })
}

// Collision detection and repositioning logic
const updateBallPositions = () => {
    bouncingElements.forEach(ball => {
        if (ball.xPos + ball.bWidth > window.innerWidth || ball.xPos < 0) {
            ball.xDir *= -1;
        }
        if (ball.yPos + ball.bWidth > window.innerHeight || ball.yPos < 0) {
            ball.yDir *= -1;
        }
        ball.xPos += ball.xDir;
        ball.yPos += ball.yDir;
    });
};

export default function FramerBG() {
    const [_, setTick] = useState(0); // Updated state to trigger re-renders

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateBallPositions();
            setTick(tick => tick + 1); // Trigger re-render
        }, 16); // 60fps (approximately)
        return () => clearInterval(intervalId);
    }, []);

    return (
        <FramerContainer>
            {bouncingElements.map(ball => (
                <motion.div
                    key={ball.id}
                    style={{
                        position: "absolute",
                        width: ball.bWidth,
                        height: ball.bWidth,
                        borderRadius: ball.bWidth / 2,
                        background: ball.color,
                    }}
                    animate={{
                        x: ball.xPos,
                        y: ball.yPos,
                    }}
                />
            ))}
        </FramerContainer>
    );
}
