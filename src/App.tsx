import { useRef, useEffect, useState } from "react"
import "./App.css"
import Splash from "./components/Splash"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import FramerBG from "./components/FramerBG"
import { AppContainer } from "./styles/stylesheet.js"
// import { motion, useCycle } from "framer-motion"
import Contact from "./components/Contact"
import { ThemeProvider } from "./styles/theme.jsx"

// import { NavMenu } from "./components/navmenu/navmenu"

import { Element } from "react-scroll"



function App() {
	return (
		<ThemeProvider>
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
				<Element name="contact" >
					<Contact />
				</Element>
			</AppContainer >
		</ThemeProvider>
	)

}


export default App
