import { motion } from "framer-motion"
import { MenuItem } from "./menuitem.js"

const variants = {
	open: {
		display: "block",
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		display: "none",
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

export const NavMenu = ( props ) => (
	<motion.ul variants={variants} style={{ position: "fixed" }}>
		{itemIds.map((i) => (
			<MenuItem i={i} sectionLabel={sectionLabels[i]} sectionTarget={sectionTargets[i]} forwardedRef={props} key={i} />
		))}
	</motion.ul>
)

const itemIds = [0, 1, 2, 3]
const sectionLabels = ["Top", "About Me", "Projects", "Contact"]
const sectionTargets = ["splash", "aboutme", "projects", "contact"]
