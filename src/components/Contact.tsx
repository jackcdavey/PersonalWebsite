import jackProfile from "../assets/images/me.jpg"
import resume from "../assets/images/ResumeApril2022.png"
import styled from "styled-components"

import AnimatedTitle from "../hooks/revealText"

import React, { Component } from "react"

import { SectionWrap, SectionRow, ContentColumn, ContentRow, ContentBox, ChipContainer, SectionTitle, ProfileImageWrap } from "../styles/stylesheet.js"

export default function Contact() {
	return (
		<SectionWrap>
			<SectionRow>
				<SectionTitle>
					{" "}
					<AnimatedTitle {..."Contact Me!"} />{" "}
				</SectionTitle>
			</SectionRow>
			<SectionRow>
				<p> It'll go here i guess</p>
			</SectionRow>
		</SectionWrap>
	)
}
