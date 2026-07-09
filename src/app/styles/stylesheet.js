'use client'

import styled from "styled-components"
import { motion } from "framer-motion"
import { media } from "./breakpoints"

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
	height: 1em;
`

export const SplashWrap = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 100vh;
    min-height: 30rem;
    width: 100%;
    /* Hex-alpha lets the blurred background show through without dimming content */
    background: ${(props) => props.theme.lightShade}B3;
    padding-left: 10vw;
    padding-top: 6rem;
    box-sizing: border-box;

    ${media.sm} {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding-left: 5vw;
        padding-top: 4rem;
    }
`;

export const SplashTitleWrap = styled.h1`
    font-size: clamp(3rem, 9vw, 7rem);
    font-family: jeanne-moderno-geometrique, sans-serif;
    text-align: left;
    grid-column: 1 / 3;
    grid-row: 1;
    color: ${(props) => props.theme.mainBrand};
    line-height: 1.2;
`

export const SplashTaglineWrap = styled.div`
    margin-left: auto;
    margin-right: auto;
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    padding: 3vw;
    line-height: 1.2;

    ${media.sm} {
        grid-column: 1 / 2;
        padding-right: 10%;
    }
`

export const ScrollArrowSegment = styled.div`
	color: ${(props) => props.theme.darkAccent};
`

export const TransparentSectionWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 10;
	min-height: 30vh;
	margin-bottom: 3rem;
	overflow: hidden;
`

export const SectionWrap = styled(TransparentSectionWrap)`
	background-color: ${(props) => props.theme.lightAccent};
	color: ${(props) => props.theme.darkShade};
    width: 100%;
`

export const TaglineTxt = styled.h2`
	font-size: clamp(1.5rem, 4vw, 2.5rem);
	font-family: Raleway, sans-serif;
	font-weight: 400;
	text-align: center;
	color: ${(props) => props.theme.darkShade};
	max-width: 100%;
	overflow-wrap: break-word;
`

export const SectionTitle = styled.h1`
	text-align: left;
	width: 100%;
	padding-left: 3%;
	padding-top: 3%;
	font-family: jeanne-moderno-geometrique, sans-serif;
	color: ${(props) => props.theme.mainBrand};
`

export const SectionRow = styled(motion.div)`
	display: flex;
	width: 95%;
	max-width: 70rem;
	justify-content: center;
	align-items: center;

	${media.sm} {
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
	background: ${(props) => props.theme.lightShade};
	transition: 0.4s;

	${media.sm} {
		margin: 1%;
		padding: 0.7rem 1.2rem;
	}
`

export const ChipLabel = styled.h3`
	font-size: 1em;
	font-family: Raleway, sans-serif;
	font-weight: 400;
	color: ${(props) => props.theme.darkAccent};
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
	width: 18vw;
	max-width: 15rem;
	height: auto;

	${media.sm} {
		width: 40vw;
	}
`

export const ResumeDownload = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 2rem;
	margin-top: 1.5vh;
	margin-bottom: 1.5vh;
	border-radius: 3rem;
	background: ${(props) => props.theme.mainBrand};
	transition: 0.2s;
	text-align: center;
	font-family: Raleway, sans-serif;
	font-weight: 700;
	color: ${(props) => props.theme.lightShade};
	font-size: 1.2em;

	&:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
	}
`


export const FramerContainer = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	filter: blur(20px);
	background: ${(props) => props.theme.lightShade};
`




////// PROJECT SECTION STYLES //////

export const ProjectCard = styled.div`
	background: ${(props) => props.theme.mainBrand};
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
    z-index: 1;
	color: ${(props) => props.theme.lightShade};

	&:hover {
		box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 1);
	}

	${media.sm} {
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
	width: 4rem;
	height: auto;
	max-height: 40%;
`

export const GraphicPath = styled.path`
	fill: currentColor;
`

export const ProjectLink = styled.a`
	align-items: center;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
		border-radius: 15px;
	}
`
export const ProjectDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Raleway, sans-serif;
  font-size: 1em;
  color: ${(props) => props.theme.darkShade};
  text-align: center;
  width: 100%;
  position: relative;

  span {
    position: relative;
    z-index: 1;
	padding: 5%;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${(props) => props.theme.lightShade};
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
	font-family: Raleway, sans-serif;
	font-size: 0.9em;
	font-weight: 700;
	color: #FFFFFF;
`

export const ProjRowLeft = styled(SectionRow)`
		justify-content: flex-start;
		align-items: center;
		flex-direction: row !important;
		width: 100%;
		margin-left: 2rem;

		${media.sm} {
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

		${media.sm} {
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
	padding-bottom: 5%;
	font-family: Raleway, sans-serif;
	color: ${(props) => props.theme.darkShade};
	width: 100%;

	${media.sm} {
		flex-direction: column;
	}
`

export const ContactFormWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 80%;

	${media.sm} {
		width: 100%;
	}
`

export const InnerContactFormWrap = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;

	${media.sm} {
		flex-direction: column;
	}
`

export const ContactLabelText = styled.span`
	display: block;
	text-align: left;
	font-weight: 700;
	font-size: 1rem;
	padding: 0.75rem 0 0.25rem 20%;

	${media.sm} {
		text-align: center;
		padding-left: 0;
	}
`

// The message input is wider (80%), so its label aligns to a 10% inset
export const MessageLabelText = styled(ContactLabelText)`
	padding-left: 10%;

	${media.sm} {
		padding-left: 0;
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
	color: ${(props) => props.theme.darkShade};
	background-color: ${(props) => props.theme.lightShade};
	transition: 0.3s;

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	${media.sm} {
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
	color: ${(props) => props.theme.darkShade};
	background-color: ${(props) => props.theme.lightShade};
	transition: 0.3s;
	resize: vertical;

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	${media.sm} {
		width: 90%;
	}
`

export const ContactLabel = styled.label`
	width: 100%;
`

export const ContactSubmit = styled.button`
	border-radius: 25px;
	border: none;
	padding: 1rem 1.5rem;
	align-items: center;
	justify-content: center;
	font-family: Raleway, sans-serif;
	font-size: 2.5em;
	color: ${(props) => props.theme.lightShade};
	background-color: ${(props) => props.theme.mainBrand};
	transition: 0.3s;
	cursor: pointer;

	&:hover {
		box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	${media.sm} {
		margin-top: 3%;
	}
`
