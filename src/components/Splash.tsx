import Tagline from "./Tagline"
import AnimatedTitle from "../hooks/revealText"
import { SplashTitleWrap, SplashTaglineWrap, SplashWrap, ScrollArrowSegment } from "../styles/stylesheet"
import { Link } from "react-scroll"

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
				smooth={true}
				duration={700}
				style={{
					boxSizing: "border-box",
					position: "absolute",
					left: "0rem", //Matches width of arrow segments
					top: "85%",
					width: "100%",
					height: "4rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

				}}
			>
				<ScrollArrowSegment className="arrow" />
			</Link>
		</SplashWrap>
	)
}
