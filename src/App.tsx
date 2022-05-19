import React from "react"
import "./App.css"
import Splash from "./components/Splash"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import FramerBG from "./components/FramerBG"
import Canvas, { resizeCanvasToDisplaySize } from "./components/Canvas.js"
import { AppContainer } from "./styles/stylesheet.js"
import Contact from "./components/Contact"

import Scroll from "react-scroll"
import { Element, Link } from "react-scroll"
//var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller

function App() {
	return (
		<AppContainer>
			<FramerBG />

			{/* <Canvas draw={draw} /> ` */}
			<Element name="splash">
				<Splash />
			</Element>
			<Element name="aboutme">
				<AboutMe />
			</Element>
			<Projects />
			<Contact />
		</AppContainer>
	)
}

export default App
