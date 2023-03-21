import jackProfile from "../assets/images/me.jpg"
import resume from "../assets/images/ResumeApril2022.png"
import styled from "styled-components"
import gitLogo from "../assets/images/github.png"

import AnimatedTitle from "../hooks/revealText"

// import tinycolor from 'tinycolor2';

import React, { Component } from "react"

import { SectionRow, SectionTitle, ProjectCard, ProjectTitle, ProjectImage, ProjectLink, TransparentSectionWrap, ProjectDescription, ProjectDescriptionBG } from "../styles/stylesheet.js"

var tinycolor = require("tinycolor2")

export default function Projects() {
	const ProjRowLeft = styled(SectionRow)`
		justify-content: flex-start;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	`

	const ProjRowRight = styled(SectionRow)`
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	`

	//Rearrange so that each project is 100 vw wide, and alternate between left and right alignment
	//Also add descriptions and photos

	return (
		<TransparentSectionWrap>
			<SectionRow>
				<SectionTitle>
					{" "}
					<AnimatedTitle {...{ text: "Projects" }} />{" "}
				</SectionTitle>
			</SectionRow>
			<ProjRowLeft>
				<ProjectLink href={"https://github.com/jackcdavey/WageWizardApp"}>
					<ProjectCard>
						<ProjectTitle>Wage Wizard</ProjectTitle>
					</ProjectCard>

					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>A web application that allows users to input their hourly wage and hours worked</span>
					</ProjectDescription>
				</ProjectLink>
			</ProjRowLeft>
			<ProjRowRight>
				<ProjectLink href={"https://github.com/jackcdavey/HubHouseMgmtSys"}>
					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>An all in one utility built to make splitting costs and recording monthly payments easier for my housemates and I.</span>
					</ProjectDescription>
					<ProjectCard>
						<ProjectTitle>House Split</ProjectTitle>
					</ProjectCard>
				</ProjectLink>
			</ProjRowRight>
			<ProjRowLeft>
				<ProjectLink href={"https://github.com"}>
					<ProjectCard>
						<ProjectTitle>The Emergency Exit – Band Website</ProjectTitle>
					</ProjectCard>

					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>This is where I'll write a long description about my dad and his band and the website that I totally have built for them.</span>
					</ProjectDescription>
				</ProjectLink>
			</ProjRowLeft>
			<ProjRowRight>
				<ProjectLink href={"https://github.com/jackcdavey"}>
					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>Check out all my other work and projects over on GitHub!</span>
					</ProjectDescription>
					<ProjectCard>
						<ProjectImage src={gitLogo} alt="GitHub Logo" />
						<ProjectTitle>GitHub</ProjectTitle>
					</ProjectCard>
				</ProjectLink>
			</ProjRowRight>
		</TransparentSectionWrap>
	)
}
