'use client'

import styled from "styled-components"

export const ContactColumn = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.75rem;
	width: min(100%, 38rem);
	margin-inline: auto;
`

export const ContactInvite = styled.p`
	font-size: 1.1rem;
	line-height: 1.6;
	color: ${(props) => props.theme.darkShade};
	margin-bottom: 1rem;
`

export const Field = styled.label`
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
	width: 100%;
`

export const FieldLabel = styled.span`
	font-family: var(--font-body), sans-serif;
	font-size: 0.8rem;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${(props) => props.theme.darkAccent};
	text-align: left;
`

export const TextInput = styled.input`
	background: transparent;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.darkShade}59;
	border-radius: 0;
	padding: 0.6rem 0.1rem;
	font-family: var(--font-body), sans-serif;
	font-size: 1.05rem;
	color: ${(props) => props.theme.darkShade};
	width: 100%;
	box-sizing: border-box;
	transition: border-color 0.2s ease;

	&:focus {
		border-bottom-color: ${(props) => props.theme.mainBrand};
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}
`

export const TextArea = styled.textarea`
	background: transparent;
	border: none;
	border-bottom: 1px solid ${(props) => props.theme.darkShade}59;
	border-radius: 0;
	padding: 0.6rem 0.1rem;
	font-family: var(--font-body), sans-serif;
	font-size: 1.05rem;
	color: ${(props) => props.theme.darkShade};
	width: 100%;
	box-sizing: border-box;
	min-height: 7rem;
	resize: vertical;
	transition: border-color 0.2s ease;

	&:focus {
		border-bottom-color: ${(props) => props.theme.mainBrand};
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}
`

export const SubmitButton = styled.button`
	align-self: flex-start;
	padding: 0.85rem 2.25rem;
	border: none;
	border-radius: 999px;
	font-family: var(--font-body), sans-serif;
	font-size: 1rem;
	font-weight: 600;
	color: ${(props) => props.theme.lightShade};
	background-color: ${(props) => props.theme.mainBrand};
	cursor: pointer;
	transition: transform 0.2s ease, box-shadow 0.2s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
	}

	&:focus-visible {
		outline: 2px solid ${(props) => props.theme.darkAccent};
		outline-offset: 2px;
	}
`
