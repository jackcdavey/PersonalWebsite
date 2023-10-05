import Tagline from "./Tagline"
import AnimatedTitle from "../hooks/revealText"
import { SplashTitleWrap, SplashTaglineWrap, SplashWrap } from "../styles/stylesheet"
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
					//For some reason the link does not align properly, so I'm using a lil inline style hack
					boxSizing: "border-box",
					position: "absolute",
					left: "0.3rem", //Matches width of arrow segments
					top: "85%",
					width: "100%",
					height: "4rem",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="arrow"></div>
			</Link>
		</SplashWrap>
	)
}
