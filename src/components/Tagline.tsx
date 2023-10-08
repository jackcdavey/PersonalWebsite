import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TaglineTxt } from "../styles/stylesheet"

const words = ["Developer", "Designer", "Tinkerer", "Photographer", "Audiophile", "Ordained Minister", "Pinewood Derby Champ (2007-09)", "Plant Dad", "Sudoku Enthusiast"]

export default function Tagline() {
	const [index, setIndex] = React.useState(0)
	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2000)
		return () => {
			clearTimeout(intervalId)
		}
	}, [])

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				key={index}
				animate={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 20 }}
				exit={{ opacity: 0, y: -20 }}
				transition={{ ease: "easeInOut", duration: 0.5 }}

			>
				<TaglineTxt >{words[index % words.length]}</TaglineTxt>
			</motion.div>
		</AnimatePresence >
	)
}
