'use client'

import styled from "styled-components"
import { Link } from "react-scroll"
import { media } from "./breakpoints"

export const NavBar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.9rem clamp(1rem, 4vw, 3rem);
	/* Hex-alpha over the theme color keeps the animated backdrop visible */
	background: ${(props) => props.theme.lightShade}CC;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border-bottom: 1px solid ${(props) => props.theme.darkShade}14;
	box-sizing: border-box;

	${media.sm} {
		padding: 0.6rem 1rem;
	}
`

export const NavWordmark = styled(Link)`
	font-family: var(--font-display), serif;
	font-size: 1.15rem;
	font-weight: 600;
	color: ${(props) => props.theme.mainBrand};
	cursor: pointer;

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	.full {
		display: inline;
	}
	.short {
		display: none;
	}

	${media.sm} {
		.full {
			display: none;
		}
		.short {
			display: inline;
		}
	}
`

export const NavLinks = styled.div`
	display: flex;
	align-items: center;
	gap: clamp(0.75rem, 3vw, 2rem);
`

export const NavLink = styled(Link)`
	font-family: var(--font-body), sans-serif;
	font-size: 0.9rem;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: ${(props) => props.theme.darkShade};
	cursor: pointer;
	padding-bottom: 2px;
	border-bottom: 2px solid transparent;
	transition: color 0.2s ease, border-color 0.2s ease;

	&.active {
		color: ${(props) => props.theme.darkAccent};
		border-bottom-color: ${(props) => props.theme.mainBrand};
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	${media.sm} {
		font-size: 0.8rem;
	}
`

export const StylesMenu = styled.div`
	position: relative;
`

export const StylesButton = styled.button`
	font-family: var(--font-body), sans-serif;
	font-size: 0.9rem;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	color: ${(props) => props.theme.darkShade};
	background: none;
	border: none;
	cursor: pointer;
	padding: 0 0 2px 0;
	display: flex;
	align-items: center;
	gap: 0.3rem;

	svg {
		transition: transform 0.2s ease;
	}

	&[aria-expanded="true"] svg {
		transform: rotate(180deg);
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}

	${media.sm} {
		font-size: 0.8rem;
	}
`

export const StylesDropdown = styled.div`
	position: absolute;
	top: calc(100% + 0.75rem);
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	min-width: 8rem;
	padding: 0.9rem 1.1rem;
	border-radius: 0.75rem;
	background: ${(props) => props.theme.lightShade}E6;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border: 1px solid ${(props) => props.theme.darkShade}14;

	a {
		font-family: var(--font-body), sans-serif;
		font-size: 0.95rem;
		color: ${(props) => props.theme.darkShade};

		&:hover {
			color: ${(props) => props.theme.darkAccent};
		}

		&:focus-visible {
			outline: 2px solid ${(props) => props.theme.darkAccent};
			outline-offset: 2px;
		}
	}
`
