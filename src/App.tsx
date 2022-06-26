import { useRef, useEffect, useState } from "react"
import "./App.css"
import Splash from "./components/Splash"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import FramerBG from "./components/FramerBG"
import { AppContainer } from "./styles/stylesheet.js"
import { motion, useCycle } from "framer-motion"
import { MenuToggle } from "././components/navmenu/menutoggle.js"
import { NavMenu } from "./components/navmenu/navmenu"
import Contact from "./components/Contact"

import Scroll from "react-scroll"
import { Element } from "react-scroll"


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
			type: "spring",
			stiffness: 50,
			damping: 13,
		},
	},
}

function App() {



	const [isOpen, toggleOpen] = useCycle(false, true)
	const [menuState, setMenuState] = useState(Boolean);
	
	const containerRef = useRef(null)
	const linkRef = useRef(null)
	useOutsideAlerter(containerRef)
	useOutsideAlerter(linkRef)
	const height = window.innerHeight
	console.log(isOpen)
	return (
		<AppContainer>
			<FramerBG />

			{/* <Canvas draw={draw} /> ` */}

			<motion.nav  initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} onClick={() => setMenuState(true)}>
				<motion.div className="background" variants={sidebar} style={{ zIndex: 1 }} />
				<NavMenu forwardedWrapper={linkRef} />
				<MenuToggle  toggle={() => toggleOpen()} />				
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


	function useOutsideAlerter(ref: any) {
  useEffect(() => {
    // Function for click event
	  function handleOutsideClick(event: any) {
		// alert(event.currentTarget)
		  if (ref.current && !ref.current.contains(event.target) && isOpen) 
			  toggleOpen()
    }
    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref, isOpen]);
}

}


export default App
