import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Word, Character } from "../styles/stylesheet"
export default function AnimatedTitle(props) {
	let text = ""

	let i = 0
	while (props[i]) {
		text += props[i]
		i++
	}

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
		<>
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
									whileHover={{
										scale: 1.2,
										rotate: Math.random() * 90 + 15,
										transition: { duration: 0.2 },
									}}
								>
									{character}
								</Character>
							)
						})}
					</Word>
				)
			})}
		</>
	)
}
