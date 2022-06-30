import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { TaglineTxt } from "../../styles/stylesheet"
import { useRef } from "react"

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

const colors = window.matchMedia("(prefers-color-scheme:  )").matches ? ["#5d1731", "#5a4045", "#60625b", "#617b68"] : ["#5d1731", "#5a4045", "#60625b", "#617b68"]

export const MenuItem = ({ i, sectionLabel, sectionTarget, forwardedRef }) => {
	const style = { color: `${colors[i]}` }
	return (
		<motion.li  variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ref={forwardedRef}>
			<Link className="nav-link" activeClass="active" to={sectionTarget} spy={true} smooth={true} duration={700} style={{ zIndex: 10, display: "flex", alignItems: "center" }}>
				<div style={style}>
					<TaglineTxt>{sectionLabel}</TaglineTxt>
				</div>
			</Link>
		</motion.li>
	)
}
