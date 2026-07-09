'use client'

import styled from "styled-components"

export const BackgroundLayer = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	overflow: hidden;
	filter: blur(60px);
	background: ${(props) => props.theme.lightShade};
`
