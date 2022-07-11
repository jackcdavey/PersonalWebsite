import { motion } from "framer-motion"
import { useCycle } from "framer-motion"
import { Link } from "react-scroll"


const Path = (props) => <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />

const variants = {
	open: {
		display: "block",
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		display: "none",
		transition: {staggerChildren: 0.05, staggerDirection: -1 },
	},
}

const itemVariants = {
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



const MenuItem = ({ i, sectionLabel, sectionTarget, forwardedRef }) => {
	const [isOpen, setIsOpen] = useCycle( 'open', 'closed');
	const style = { color: `${colors[i]}` }
	return (
		<motion.li id="menuListItem" variants={itemVariants} animate={isOpen} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} ref={forwardedRef}>
			<Link className="nav-link" activeClass="active" to={sectionTarget} spy={true} smooth={true} duration={700} style={{ zIndex: 10, display: "flex", alignItems: "center" }}>
				<div style={style}>
					<h1 id="menuListItem">{sectionLabel}</h1>
				</div>
			</Link>
		</motion.li>
	)
}


export const NavMenu = (props) => (
	<>
	<button id="menutoggle" style={{ zIndex: 100, position: "fixed" }} onClick={props.toggle}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</button>
	<motion.ul variants={variants} id='menuListContainer'>
			{itemIds.map((i) => (
			<div onClick={props.toggle} key={i} >
					<MenuItem i={i} sectionLabel={sectionLabels[i]} sectionTarget={sectionTargets[i]} forwardedRef={props} />	
			</div>
		))}
		</motion.ul>
	</>
)

const itemIds = [0, 1, 2, 3]
const sectionLabels = ["Top", "About Me", "Projects", "Contact"]
const sectionTargets = ["splash", "aboutme", "projects", "contact"]
