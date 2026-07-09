'use client'

import styled from "styled-components"
import { motion } from "framer-motion"
import { media } from "./breakpoints"

export const AboutGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(14rem, 1fr) 2fr;
	gap: clamp(2rem, 5vw, 5rem);
	align-items: start;

	${media.md} {
		grid-template-columns: 1fr;
	}
`

export const PortraitColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	${media.md} {
		max-width: 20rem;
		margin-inline: auto;
	}
`

export const Portrait = styled.img`
	width: 100%;
	height: auto;
	border-radius: 1rem;
	border: 1px solid ${(props) => props.theme.darkShade}1A;
`

export const ResumeButton = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.7rem 1.4rem;
	border-radius: 999px;
	background: ${(props) => props.theme.mainBrand};
	color: ${(props) => props.theme.lightShade};
	font-family: var(--font-body), sans-serif;
	font-size: 0.95rem;
	font-weight: 600;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
	}
`

export const BioColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`

export const BioLede = styled.p`
	font-family: var(--font-display), serif;
	font-size: clamp(1.4rem, 2.6vw, 2rem);
	line-height: 1.3;
	color: ${(props) => props.theme.darkShade};
`

export const BioBody = styled.p`
	font-size: 1.1rem;
	line-height: 1.7;
	max-width: 62ch;
	color: ${(props) => props.theme.darkShade};
`

export const ChipSection = styled.div`
	margin-top: clamp(2.5rem, 6vh, 4rem);
	display: flex;
	flex-direction: column;
	gap: 2rem;
`

export const ChipGroup = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
`

export const Chip = styled(motion.span)`
	padding: 0.45rem 0.95rem;
	border-radius: 999px;
	border: 1px solid ${(props) => props.theme.darkAccent}66;
	background: transparent;
	color: ${(props) => props.theme.darkAccent};
	font-family: var(--font-body), sans-serif;
	font-size: 0.9rem;
	font-weight: 400;
`
