import styled from "styled-components"
import { LIGHTCOLORS, DARKCOLORS } from "../styles/colors"
import { motion } from "framer-motion"


import "./fonts.css"

const COLORS = window.matchMedia("(prefers-color-scheme: dark )").matches ? DARKCOLORS : LIGHTCOLORS

// const TitleFont = "jeanne-moderno-geometrique, sans-serif"
// const TextFont = "minion-pro-condensed-caption, serif"

export const AppContainer = styled.div`
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
`

export const Word = styled(motion.span)`
	display: inline-block;
	margin-right: 0.25em;
	white-space: nowrap;
`

export const Character = styled(motion.span)`
	display: inline-block;
	margin-right: -0.05em;
`

export const SplashWrap = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	height: 100vh;
	min-height: 30rem;
	width: 100vw;
	background: ${COLORS.lightShade};
	opacity: 0.5;
	padding-left: 10vw;
	padding-top: 10vw;
	// overflow: hidden;
	
`

export const SplashTitleWrap = styled.h1`
	font-size: 7em;
	font-family: jeanne-moderno-geometrique, sans-serif;
	text-align: left;
	grid-column: 1 / 3;
	grid-row: 1;
	color: ${COLORS.mainBrand};

	@media (max-width: 710px) {
		font-size: 4.5em;
		padding-bottom: 10vh;
	}

	@media (max-height: 710px) {
		font-size: 4.5em;
		padding-bottom: 10vh;
	}
`

export const SplashTaglineWrap = styled.div`
	margin-left: auto;
	margin-right: auto;
	grid-column: 2 / 4;
	grid-row: 2 / 3;
	padding: 3vw;



	@media (max-width: 710px) {
		padding-right: 15%;
	}

	@media (max-width: 500px) {
		padding-right: 20%;
	}


`

export const ScrollArrowSegment = styled.div`
		// border-color: ${COLORS.red} !important;
		
`



export const TransparentSectionWrap = styled.div`
	display: flex;
	flex-direction: column;
	
	justify-content: center;
	align-items: center;
	z-index: 10;
	min-height: 30vh;
	margin-bottom: 3rem;
	
	// color: ${COLORS.darkShade};

`

export const SectionWrap = styled(TransparentSectionWrap)`
	background-color: ${COLORS.lightAccent};
	color: ${COLORS.darkShade};
`


export const TaglineTxt = styled.h2`
	font-size: 2.5em;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	text-align: center;
	text-overflow: ellipsis;
	color: ${COLORS.darkShade};
	direction: rtl;
	max-width: 30vw;

	@media (max-width: 710px) {
		font-size: 2em;
	}

	@media (max-height: 710px) {
		font-size: 2em;
	}
`

export const SectionTitle = styled.h1`
	text-align: left;
	width: 100%;
	padding-left: 3%;
	padding-top: 3%;
	font-family: jeanne-moderno-geometrique, sans-serif;
	color: ${COLORS.mainBrand};
`

export const SectionRow = styled(motion.div)`
	display: flex;
	width: 95%;
	max-width: 70rem;
	justify-content: center;
	align-items: center;

	@media (max-width: 710px) {
		flex-direction: column;
	}
`

export const ContentColumn = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: center;
	margin: 0 2% 0 2%;
	width: 100%;
`

export const ContentRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const ContentBox = styled(motion.div)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	padding: 1%;
	justify-content: center;
`

export const ChipContainer = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 2%;
	padding: 1rem 1.5rem;
	border-radius: 2rem;
	
	background: ${COLORS.lightShade};
	transition: 0.4s;

	//Too confusing, implies a link
	// :hover {
	// 	box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
	// }

	@media (max-width: 710px) {
		margin: 1%;
		padding: 0.7rem 1.2rem;
	}
`

export const ChipLabel = styled.h3`
	font-size: 1em;
	font-family: Raileway, sans-serif;
	font-weight: 400;
	color: ${COLORS.mainBrand};
`

export const ProfileImageWrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 3%;
	justify-content: center;
	align-items: center;
`
export const ProfileImage = styled.img`
	border-radius: 1.5rem !important;
	width: 20vw;
	
	
	@media (max-width: 710px) {
		width: 40vw;
	}	
`

export const ResumeDownload = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10%;
	margin-top: 1.5vh;
	margin-bottom: 1.5vh;
	border-radius: 3rem;
	background: ${COLORS.mainBrand};
	transition: 0.2s;
	text-align: center;
	font-family: Raileway, sans-serif;
	font-weight: bold;
	color: ${COLORS.lightAccent};
	font-size: 1em;

	:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
		color: ${COLORS.lightShade};
	}
`


export const FramerContainer = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	filter: blur(20px);
	background: ${COLORS.lightShade};
`




////// PROJECT SECTION STYLES //////

export const ProjectCard = styled.div`
	background: ${COLORS.mainBrand};
	/* Eventually add custom colors for each project */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	transition: 0.3s;
	width: 20rem;
	height: 15rem;
	border-radius: 15px;
	margin: 5%;
	color: ${COLORS.lightShade};

	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
		color: ${COLORS.lightAccent};
	}

	@media (max-width: 710px) {
		margin-top: 5rem;
		width: 80vw;
		max-width: 20rem;
	}
`

export const ProjectTitle = styled.h2`
	font-family: jeanne-moderno-geometrique, sans-serif;
	font-size: 1.5em;
	
	text-align: center;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 1vw;
	padding-right: 1vw;
`


export const ProjectGraphic = styled.svg`
	max-width: 100%;
	max-height: 40%;
	// A hacky compromise to get the SVG to center, only looks off on extremely narrow screens
	margin-left: 65%;
	`

export const GraphicPath = styled.path`
	fill: currentColor;

	
	`

export const ProjectLink = styled.a`
	align-items: center;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	
`
export const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
  font-size: 1em;
  color: ${COLORS.darkShade};
  text-align: center;
  width: 100%;
  position: relative; // Added for pseudo-element positioning

  span {
    position: relative; // Added for pseudo-element positioning
    z-index: 1; // Make sure the text appears above the background
	padding: 5%;

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${COLORS.lightShade};
      mix-blend-mode: soft-light; 
      opacity: 0.4; 
      z-index: -1; 
      border-radius: 1rem;
	  
    }
  }
`;

export const ProjectCategoryChip = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 0.5rem 1rem;
	border-radius: 1.5rem;
	margin: 2rem;
	font-family: Raileway, sans-serif;
	font-size: 0.9em;
	color: ${COLORS.mainBrand};
`

export const ProjRowLeft = styled(SectionRow)`
		justify-content: flex-start;
		align-items: center;
		flex-direction: row !important;
		width: 100%;
		margin-left: 2rem;

		@media (max-width: 710px) {
			justify-content: center !important;
			flex-wrap: wrap;
			margin-left: 0rem;
		}
	`

	export const ProjRowRight = styled(SectionRow)`
		justify-content: flex-end;
		align-items: center;
		flex-direction: row !important;
		width: 100%;
		margin-right: 2rem;

		@media (max-width: 710px) {
			flex-wrap: wrap;
			flex-direction: column-reverse !important;
			justify-content: center !important;
			margin-right: 0rem;
		}
	`



////// END PROJECT SECTION STYLES //////

export const ContactForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	// padding: 1%;
	padding-bottom: 5%;
	font-family: Raleway, sans-serif;
	color: ${COLORS.darkShade};
	width: 100%;

	@media (max-width: 710px) {
		flex-direction: column;
	}
`

export const ContactFormWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 80%;

	@media (max-width: 710px) {
		width: 100%;
`

export const InnerContactFormWrap = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;

	h4 {
		text-align: left;
		padding: 0% 0% 0% 20%;
	}

	@media (max-width: 710px) {
		flex-direction: column;

		h4 {
			text-align: center;
			padding: 0% 0% 0% 0%;
		}
	}
`

export const EmailInput = styled.input`
	height: 3rem;
	width: 60%;
	border-radius: 1rem;
	border: none;
	padding-left: 10%;
	margin-top: 3%;
	font-family: Raleway, sans-serif;
	font-size: 1em;
	color: ${COLORS.darkShade};
	background-color: ${COLORS.lightShade};
	transition: 0.3s;

	:focus {
		outline: none;
	}

	@media (max-width: 710px) {
		width: 85%;
	}
`

export const MessageInput = styled.textarea`
	height: 5rem;
	width: 80%;
	border-radius: 1rem;
	border: none;
	padding: 3%;
	margin-top: 1%;
	font-family: Raleway, sans-serif;
	font-size: 1em;
	color: ${COLORS.darkShade};
	background-color: ${COLORS.lightShade};
	transition: 0.3s;
	resize: vertical;

	:focus {
		outline: none;
	}

	@media (max-width: 710px) {
		width: 90%;
	}
`

export const ContactLabel = styled.label`
	width: 100%;

	@media (max-width: 710px) {
	h4 {
		padding-left: 0 !important;
		padding-top: 5% !important;
	}
}
`

export const ContactSubmit = styled.button`
	
	border-radius: 25px;
	border: none;
	padding: 1rem 1.5rem;
	align-items: center;
	justify-content: center;
	font-family: Raleway, sans-serif;
	font-size: 2.5em;
	color: ${COLORS.lightAccent};
	background-color: ${COLORS.mainBrand};
	transition: 0.3s;
	cursor: pointer;
	

	:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
		color: ${COLORS.lightShade};
	}

	@media (max-width: 710px) {
		margin-top: 3%;
	}
`
