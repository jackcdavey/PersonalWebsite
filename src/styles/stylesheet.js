import styled from "styled-components"
import { LIGHTCOLORS, DARKCOLORS } from "../styles/colors"
import { motion } from "framer-motion"

import "./fonts.css"

const COLORS = window.matchMedia("(prefers-color-scheme: dark )").matches ? DARKCOLORS : LIGHTCOLORS

const TitleFont = "jeanne-moderno-geometrique, sans-serif"
const TextFont = "minion-pro-condensed-caption, serif"

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
	height: 90vh;
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
	width: 100vw;
	justify-content: center;
	align-items: center;
	z-index: 10;
	min-height: 30vh;
	margin-right: 15vw;
`

export const SectionWrap = styled(TransparentSectionWrap)`
	background-color: ${COLORS.lightAccent};
`

export const TaglineTxt = styled.h2`
	font-size: 2.5em;
	font-family: minion-pro-condensed-caption, serif;
	text-align: left;
`

export const SectionTitle = styled.h1`
	text-align: left;
	width: 100%;
	padding-left: 3%;
	padding-top: 3%;
	font-family: jeanne-moderno-geometrique, sans-serif;
	color: ${COLORS.mainBrand};
`

export const SectionRow = styled.div`
	display: flex;
	width: 95vw;
	justify-content: center;
	align-items: center;

	@media (max-width: 500px) {
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

export const ContentBox = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	padding: 1%;
	justify-content: center;
`

export const ChipContainer = styled.div`
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
	font-family: minion-pro-condensed-caption, serif;
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
	border-radius: 3% !important;
	width: 20vw;
	
	
	@media (max-width: 500px) {
		width: 40vw;
	}	
`

export const ResumeDownload = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 80%;
	padding: 5%;
	margin-top: 1.5vh;
	margin-bottom: 1.5vh;
	border-radius: 25px;
	background: ${COLORS.mainBrand};
	transition: 0.2s;
	text-align: center;
	font-family: minion-pro-condensed-caption, serif;
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

export const ProjectCard = styled.div`
	background: ${COLORS.mainBrand};
	/* Eventually add custom colors for each project */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: 0.3s;
	width: 30vw;
	height: 25vh;
	border-radius: 15px;
	margin: 5%;

	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
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

export const ProjectImage = styled.img`
	max-width: 50%;
	max-height: 50%;
	padding: 10%;
`

export const ProjectLink = styled.a`
	align-items: center;
	display: inline-flex;
	text-decoration: none;
`

export const ProjectDescription = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: minion-pro-condensed-caption, serif;
	font-size: 1em;
	color: ${COLORS.darkShade};
	padding-left: 5%;
	padding-right: 5%;
	text-align: center;
`

export const ProjectDescriptionBG = styled.div`
	background-color: ${COLORS.lightShade};
	color: red;
	position: absolute;
	z-index: -1;
	filter: blur(20px);
	border-radius: 25px;
	width: 50%;
	height: 100px;
`

export const ContactForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 1%;
	padding-bottom: 5%;
	font-family: minion-pro-condensed-caption, serif;
	width: 90vw;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`

export const ContactFormWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 80%;
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

	@media (max-width: 500px) {
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
	border-radius: 25px;
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
`

export const MessageInput = styled.textarea`
	height: 10vh;
	width: 80%;
	border-radius: 25px;
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
	font-family: minion-pro-condensed-caption, serif;
	font-size: 2.5em;
	color: ${COLORS.lightAccent};
	background-color: ${COLORS.mainBrand};
	transition: 0.3s;

	:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
	}

	@media (max-width: 500px) {
		margin-top: 3%;
	}
`
