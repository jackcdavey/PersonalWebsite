'use client'

import styled from "styled-components"
import { motion } from "framer-motion"
import { media } from "./breakpoints"

export const ProjectIndex = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`

// The whole row is the link
export const ProjectRow = styled(motion.a)`
	display: grid;
	grid-template-columns: 4.5rem 1fr auto;
	column-gap: clamp(1rem, 3vw, 2.5rem);
	align-items: baseline;
	padding: clamp(1.5rem, 4vh, 2.5rem) clamp(0.5rem, 2vw, 1.5rem);
	border-top: 1px solid ${(props) => props.theme.darkShade}26;
	text-decoration: none;
	transition: background 0.25s ease;

	&:last-of-type {
		border-bottom: 1px solid ${(props) => props.theme.darkShade}26;
	}

	&:hover {
		background: ${(props) => props.theme.lightAccent}99;

		.arrow-glyph {
			transform: translateX(4px);
		}

		h3 {
			color: ${(props) => props.theme.darkAccent};
		}
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: -2px;
	}

	${media.sm} {
		grid-template-columns: 3rem 1fr;
		row-gap: 0.75rem;
	}
`

export const ProjectNumber = styled.span`
	font-family: var(--font-display), serif;
	font-size: clamp(1.1rem, 2vw, 1.5rem);
	color: ${(props) => props.theme.darkShade}59;
`

export const ProjectName = styled.h3`
	font-family: var(--font-display), serif;
	font-size: clamp(1.6rem, 3.5vw, 2.75rem);
	font-weight: 500;
	line-height: 1.1;
	color: ${(props) => props.theme.darkShade};
	transition: color 0.25s ease;
`

export const ProjectMeta = styled.span`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	.arrow-glyph {
		display: inline-block;
		font-size: 1.25rem;
		color: ${(props) => props.theme.darkAccent};
		transition: transform 0.25s ease;
	}

	${media.sm} {
		grid-column: 2;
		grid-row: 2;
	}
`

export const ProjectCategoryChip = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0.3rem 0.75rem;
	border-radius: 1.5rem;
	font-family: var(--font-body), sans-serif;
	font-size: 0.75rem;
	font-weight: 700;
	color: #FFFFFF;
`

export const ProjectBlurb = styled.p`
	grid-column: 2;
	font-size: 1rem;
	line-height: 1.6;
	color: ${(props) => props.theme.darkShade}D9;
	max-width: 58ch;
	margin-top: 0.5rem;

	${media.sm} {
		grid-row: 3;
	}
`

export const GithubOutro = styled(motion.a)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	padding: clamp(2rem, 6vh, 3.5rem) 1rem;
	font-family: var(--font-display), serif;
	font-size: clamp(1.3rem, 2.5vw, 1.9rem);
	color: ${(props) => props.theme.darkAccent};
	text-decoration: none;
	transition: color 0.25s ease;

	svg {
		width: 1.5rem;
		height: auto;
	}

	&:hover {
		color: ${(props) => props.theme.mainBrand};
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}
`
