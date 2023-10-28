import Tagline from "./Tagline"
import AnimatedTitle from "../hooks/revealText"
import { SplashTitleWrap, SplashTaglineWrap, SplashWrap, ScrollArrowSegment } from "../styles/stylesheet"
import { Link } from "react-scroll"

const isSafari: boolean = /Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent);


export default function Splash() {
	return (
		<SplashWrap>
			<SplashTitleWrap>
				<AnimatedTitle {...{ "title": "Hey, I'm Jack" }} />
			</SplashTitleWrap>

			<SplashTaglineWrap>
				<Tagline />
			</SplashTaglineWrap>
			<Link
				activeClass="active"
				to="aboutme"
				spy={true}
				smooth={!isSafari}
				duration={700}
				className="scroll-link"
			>
				<ScrollArrowSegment className="arrow" />
			</Link>
		</SplashWrap>
	)
}
