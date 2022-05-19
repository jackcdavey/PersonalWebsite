import React from "react"
import "./App.css"
import Splash from "./components/Splash"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import FramerBG from "./components/FramerBG"
import Canvas, { resizeCanvasToDisplaySize } from "./components/Canvas.js"
import { AppContainer } from "./styles/stylesheet.js"

import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "././components/navmenu/menutoggle.js"
import { NavMenu } from "./components/navmenu/navmenu"
import Contact from "./components/Contact"

import Scroll from "react-scroll"
import { Element, Link } from "react-scroll"
//var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at 40px 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
}

function App() {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const height = window.innerHeight
	return (
		<AppContainer>
			<FramerBG />

			{/* <Canvas draw={draw} /> ` */}

			<motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
				<motion.div className="background" variants={sidebar} style={{ zIndex: 1 }} />
				<NavMenu />
				<MenuToggle toggle={() => toggleOpen()} />
			</motion.nav>
			<Element name="splash">
				<Splash />
			</Element>
			<Element name="aboutme">
				<AboutMe />
			</Element>
			<Element name="projects">
				<Projects />
			</Element>
			<Element name="contact">
				<Contact />
			</Element>
		</AppContainer>
	)
}

export default App
