// import { useRef, useEffect, useState } from "react"
import "./App.css"
import Splash from "./components/Splash"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import FramerBG from "./components/FramerBG"
import { AppContainer } from "./styles/stylesheet.js"
// import { motion, useCycle } from "framer-motion"
import Contact from "./components/Contact"

// import { NavMenu } from "./components/navmenu/navmenu"

import { Element } from "react-scroll"



function App() {



	// const [isOpen, toggleOpen] = useCycle('closed', 'open')
	// const [menuState, setMenuState] = useState(Boolean);

	// const height = window.innerHeight
	// console.log(isOpen)
	return (
		<AppContainer>
			<FramerBG />
			{/* Temp removal while redesigning nav 
			<NavMenu />
			 */}
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


	// function useOutsideAlerter(ref: any) {
	// 	useEffect(() => {
	// 		// Function for click event
	// 		function handleOutsideClick(event: any) {
	// 			// alert(event.currentTarget)
	// 			if (ref.current && !ref.current.contains(event.target) && isOpen)
	// 				toggleOpen()
	// 		}
	// 		// Adding click event listener
	// 		document.addEventListener("click", handleOutsideClick);
	// 		return () => document.removeEventListener("click", handleOutsideClick);
	// 	}, [ref, isOpen]);
	// }

}


export default App
