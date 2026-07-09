'use client'

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Word, Character } from "../styles/shared"

export default function AnimatedTitle(props) {
	const text = props.title ?? ""

	const ctrls = useAnimation()

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})

	useEffect(() => {
		if (inView) {
			ctrls.start("visible")
		}

		if (!inView) {
			ctrls.start("hidden")
		}
	}, [ctrls, inView])

	const wordAnimation = {
		hidden: {},
		visible: {},
	}

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `1em`,
		},

		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 0.5,
				ease: [0.1, 0.5, 0.2, 0.7],
			},
		},
	}

	return (
		// The per-character spans are aria-hidden, so expose the full title here
		<span aria-label={text} role="text">
			{text.split(" ").map((word, index) => {
				return (
					<Word
						ref={ref}
						aria-hidden="true"
						key={index}
						initial="hidden"
						animate={ctrls}
						variants={wordAnimation}
						transition={{
							delayChildren: index * 0.25,
							staggerChildren: 0.05,
						}}
					>
						{word.split("").map((character, index) => {
							return (
								<Character
									aria-hidden="true"
									key={index}
									variants={characterAnimation}
								>
									{character}
								</Character>
							)
						})}
					</Word>
				)
			})}
		</span>
	)
}
