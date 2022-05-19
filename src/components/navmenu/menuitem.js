import * as React from "react"
import { motion } from "framer-motion"
import Scroll from "react-scroll"
import { Element, Link } from "react-scroll"
import { TaglineTxt } from "../../styles/stylesheet"

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,

		transition: {
			y: { stiffness: 1000, velocity: 100 },
		},
	},
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i, sectionLabel, sectionTarget }) => {
	const style = { color: `${colors[i]}`, zIndex: 1 }
	return (
		<motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
			<Link activeClass="active" to={sectionTarget} spy={true} smooth={true} duration={700} style={{ zIndex: 10, display: "flex", alignItems: "center" }}>
				<div className="icon-placeholder" style={style} />
				<div className="text-placeholder" style={style}>
					<TaglineTxt>{sectionLabel}</TaglineTxt>
				</div>
			</Link>
		</motion.li>
	)
}
