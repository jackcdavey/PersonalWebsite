import { motion } from "framer-motion"
import "../App.css"
import { useEffect, useState } from "react"
import { FramerContainer } from "../styles/stylesheet"

//At least put in some cool easter egg where the screen lights up
//after a ball perfectly hits a corner



const colorOptions = ["#DED9D9", "#545252", "#3b3434", "#A0A0A0"]

//
//Please God, forgive me for the sins I am about to commit
//

let speed = 0.5

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


// Function that creates a ball given an x and y position, x and y direction, width, and color
const Ball = ({ xPos, yPos, xDir, yDir, bWidth, color, change }: BallProps) => {
	return (
		<motion.div
			style={{
				position: "absolute",
				top: yPos,
				left: xPos,
				width: bWidth,
				height: bWidth,
				backgroundColor: color,
				borderRadius: "50%",
			}}
			animate={{
				x: xPos + xDir,
				y: yPos + yDir,
			}}
			transition={{
				duration: 0,
			}}
		/>
	)
}

const bouncingElements = [] as BallProps[];

// Create 3 balls
for (let i = 0; i < 5; i++) {
	bouncingElements.push({
		id: i,
		xPos: Math.random() * window.innerWidth,
		yPos: Math.random() * window.innerHeight,
		xDir: speed,
		yDir: speed,
		bWidth: Math.max(window.innerWidth / (9 - i * 3), 300 - i * 100),
		color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
		change: false,
	})
}




const bouncingElementsOld = [
	{
		id: 0,
		xDir: speed,
		yDir: speed,
		bWidth: Math.max(window.innerWidth / 9, 300),
		xPos: Math.random() * window.innerWidth,
		yPos: Math.random() * window.innerHeight,
		color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
		change: false,
	},
	{
		id: 1,
		xPos: Math.random() * window.innerWidth,
		yPos: Math.random() * window.innerHeight,
		xDir: 0.75 * speed,
		yDir: 0.75 * speed,
		bWidth: Math.max(window.innerWidth / 6, 200),
		color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
		change: false,
	},
	{
		id: 2,
		xPos: Math.random() * window.innerWidth,
		yPos: Math.random() * window.innerHeight,
		xDir: 0.25 * speed,
		yDir: 0.25 * speed,
		bWidth: Math.max(window.innerWidth / 3, 100),
		color: colorOptions[Math.floor(Math.random() * colorOptions.length)],
		change: false,
	},
]

//If any balls spawn partially off screen, move them back on screen
for (let i = 0; i < bouncingElements.length; i++) {
	if (bouncingElements[i].xPos + bouncingElements[i].bWidth > window.innerWidth || bouncingElements[i].xPos < 0) {
		bouncingElements[i].xPos = 1
	}
	if (bouncingElements[i].yPos + bouncingElements[i].bWidth > window.innerHeight || bouncingElements[i].yPos < 0) {
		bouncingElements[i].yPos = 1
	}
}

export default function FramerBG() {
	const [index, setIndex] = useState(0)
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 0)
		return () => {
			clearTimeout(intervalId)
		}
	}, [])

	//If any ball collides with an edge, reverse its direction
	for (let i = 0; i < bouncingElements.length; i++) {
		if (bouncingElements[i].xPos > window.innerWidth - bouncingElements[i].bWidth) {
			bouncingElements[i].xDir = bouncingElements[i].xDir * -1
			// bouncingElements[i].color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		}
		if (bouncingElements[i].xPos < 0) {
			bouncingElements[i].xDir = bouncingElements[i].xDir * -1
			// bouncingElements[i].color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		}
		if (bouncingElements[i].yPos > window.innerHeight - bouncingElements[i].bWidth) {
			bouncingElements[i].yDir = bouncingElements[i].yDir * -1
			// bouncingElements[i].color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		}
		if (bouncingElements[i].yPos < 0) {
			bouncingElements[i].yDir = bouncingElements[i].yDir * -1
			// bouncingElements[i].color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		}

		//Reposition balls if they manage to get off screen (i.e. the window is resized)
		if (bouncingElements[i].xPos + bouncingElements[i].bWidth > window.innerWidth + 5 || bouncingElements[i].xPos < -5) bouncingElements[i].xPos = 1
		if (bouncingElements[i].yPos + bouncingElements[i].bWidth > window.innerHeight + 5 || bouncingElements[i].yPos < -5) bouncingElements[i].yPos = 1

		let forgivenessLevel = 10

		//Detect when a ball almost perfectly hits a corner
		if (
			(bouncingElements[i].xPos < forgivenessLevel && bouncingElements[i].yPos < forgivenessLevel) ||
			(bouncingElements[i].xPos + bouncingElements[i].bWidth > window.innerWidth - forgivenessLevel && bouncingElements[i].yPos < forgivenessLevel) ||
			(bouncingElements[i].xPos < forgivenessLevel && bouncingElements[i].yPos + bouncingElements[i].bWidth > window.innerHeight - forgivenessLevel) ||
			(bouncingElements[i].xPos + bouncingElements[i].bWidth > window.innerWidth - forgivenessLevel && bouncingElements[i].yPos + bouncingElements[i].bWidth > window.innerHeight - forgivenessLevel)
		) {
			// if (window.innerWidth > 600 && window.innerHeight > 600) {
			//bouncingElements[i].color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
			// console.log("Perfect hit!")
			bouncingElements[i].change = true

			//Not quite the effect I was hoping for...
			//
			// let tempWidth = bouncingElements[i].bWidth;
			// while (bouncingElements[i].bWidth > 0) {
			//   bouncingElements[i].bWidth -= 0.0001;
			// }
			// while (bouncingElements[i].bWidth < tempWidth) {
			//   bouncingElements[i].xPos = window.innerWidth / 2 - bouncingElements[i].bWidth / 2;
			//   bouncingElements[i].yPos = window.innerHeight / 2 - bouncingElements[i].bWidth / 2;
			//   bouncingElements[i].bWidth += 0.0001;
			// }
			// }
		}
	}

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
					// color: bouncingElements[0].change ? colorOptions[Math.floor(Math.random() * colorOptions.length)] : bouncingElements[0].color,
					// background: colorOptions[Math.floor(Math.random() * colorOptions.length)],
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
					// background: colorOptions[Math.floor(Math.random() * colorOptions.length)],
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
					// background: colorOptions[Math.floor(Math.random() * colorOptions.length)],
				}}
			/>
		</FramerContainer>
	)
}
