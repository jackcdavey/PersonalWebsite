'use client'

import styled from "styled-components"
import { motion } from "framer-motion"

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

// Full-width section band. $band paints the lightAccent background;
// transparent sections let the animated backdrop show through.
export const SectionShell = styled.section<{ $band?: boolean; $last?: boolean }>`
	width: 100%;
	box-sizing: border-box;
	padding: clamp(4rem, 10vh, 8rem) clamp(1.25rem, 6vw, 6rem);
	margin-bottom: ${(props) => (props.$last ? "0" : "3rem")};
	background-color: ${(props) =>
		props.$band ? props.theme.lightAccent : "transparent"};
	color: ${(props) => props.theme.darkShade};
	overflow: hidden;
`

export const SectionInner = styled.div`
	max-width: 72rem;
	margin-inline: auto;
`

export const SectionHeading = styled.h2`
	font-family: var(--font-display), serif;
	font-size: clamp(2.5rem, 6vw, 4.5rem);
	font-weight: 500;
	line-height: 1.05;
	letter-spacing: -0.01em;
	color: ${(props) => props.theme.mainBrand};
	margin-bottom: clamp(2rem, 5vh, 3.5rem);
`

export const Eyebrow = styled.span`
	display: block;
	font-family: var(--font-body), sans-serif;
	font-size: 0.8rem;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${(props) => props.theme.darkAccent};
	margin-bottom: 0.75rem;
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

// Shared motion vocabulary: restrained fades and short rises only.
export const EASE = [0.22, 1, 0.36, 1]

export const revealProps = {
	initial: { opacity: 0, y: 24 },
	whileInView: { opacity: 1, y: 0 },
	transition: { duration: 0.5, ease: EASE },
	viewport: { once: true },
}
