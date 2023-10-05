import styled from "styled-components"
import { LIGHTCOLORS, DARKCOLORS } from "../styles/colors"
import { motion } from "framer-motion"


import "./fonts.css"

const COLORS = window.matchMedia("(prefers-color-scheme: dark )").matches ? DARKCOLORS : LIGHTCOLORS

// const TitleFont = "jeanne-moderno-geometrique, sans-serif"
// const TextFont = "minion-pro-condensed-caption, serif"

export const AppContainer = styled.div``

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
	background: ${COLORS.lightShade};
	opacity: 0.5;
	padding-left: 10vw;
	padding-top: 10vw;
`

export const SplashTitleWrap = styled.h1`
	font-size: 7em;
	font-family: jeanne-moderno-geometrique, sans-serif;
	text-align: left;
	grid-column: 1 / 3;
	grid-row: 1;
	color: ${COLORS.mainBrand};

	@media (max-width: 710px) {
		font-size: 5em;
		padding-bottom: 10vh;
`

export const SplashTaglineWrap = styled.div`
	margin-left: auto;
	margin-right: auto;
	grid-column: 2 / 4;
	grid-row: 2 / 3;
	padding: 3vw;


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
`

export const TaglineTxt = styled.h2`
	font-size: 2.5em;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	text-align: center;
	text-overflow: ellipsis;

	@media (max-width: 710px) {
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
	padding: 5%;
	margin: 2%;
	border-radius: 25px;
	background: ${COLORS.lightShade};
	transition: 0.4s;

	:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
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
	
	
	@media (max-width: 510px) {
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
	border-radius: 25px;
	background: ${COLORS.mainBrand};
	transition: 0.2s;
	text-align: center;
	font-family: Raileway, sans-serif;
	font-weight: bold;
	color: ${COLORS.lightShade};
	font-size: 1em;

	:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
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

export const FramerObject = styled.div`
	background: black;
	border-radius: 75px;
	width: 150px;
	height: 150px;
`




////// PROJECT SECTION STYLES //////

export const ProjectCard = styled.div`
	background: ${COLORS.mainBrand};
	/* Eventually add custom colors for each project */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	width: 20rem;
	height: 15rem;
	border-radius: 15px;
	margin: 5%;

	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
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
	color: ${COLORS.lightShade};
	text-align: center;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 1vw;
	padding-right: 1vw;
`


export const ProjectGraphic = styled.svg`
	max-width: 100%;
	max-height: 100%;
	// A hacky compromise to get the SVG to center, only looks off on extremely narrow screens
	margin-left: 65%;
	`

export const ProjectGraphicPath = styled.path`
	fill: ${COLORS.lightShade};
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
	// padding-left: 5%;
	// padding-right: 5%;
	text-align: center;
	width: 100%;
	// background-color: ${COLORS.lightShade};
	// overflow: hidden;
	
`


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
	height: 5vh;
	width: 60%;
	border-radius: 1rem;
	border: none;
	padding-left: 10%;
	margin-top: 3%;
	font-family: minion-pro-condensed-caption, serif;
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
	height: 10vh;
	width: 80%;
	border-radius: 1rem;
	border: none;
	padding: 3%;
	margin-top: 1%;
	font-family: minion-pro-condensed-caption, serif;
	font-size: 1em;
	color: ${COLORS.darkShade};
	background-color: ${COLORS.lightShade};
	transition: 0.3s;
	resize: none;

	:focus {
		outline: none;
	}

	@media (max-width: 710px) {
		width: 90%;
	}
`

export const ContactLabel = styled.label`
	width: 100%;
`

export const ContactSubmit = styled.button`
	min-width: 10%;
	border-radius: 25px;
	border: none;
	padding: 0 2% 0 2%;
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
	}

	@media (max-width: 710px) {
		margin-top: 3%;
	}
`
