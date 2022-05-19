import Tagline from "./Tagline"
import AnimatedTitle from "../hooks/revealText"
import React from "react"

import { SplashTitleWrap, SplashTaglineWrap, SplashWrap } from "../styles/stylesheet"

import Scroll from "react-scroll"
import { Link } from "react-scroll"

export default function Splash() {
	return (
		<SplashWrap>
			<SplashTitleWrap>
				<AnimatedTitle {..."Hey, I'm Jack"} />
			</SplashTitleWrap>

			<SplashTaglineWrap>
				<Tagline />
			</SplashTaglineWrap>
			<Link activeClass="active" to="aboutme" spy={true} smooth={true} duration={700}>
				<div className="arrow"></div>
			</Link>
		</SplashWrap>
	)
}
