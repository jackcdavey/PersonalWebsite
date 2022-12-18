import gitLogo from "../assets/images/github.png"
import AnimatedTitle from "../hooks/revealText"
import { SectionRow, SectionTitle, ProjectCard, ProjectTitle, ProjectImage, ProjectLink, TransparentSectionWrap, ProjectDescription, ProjectDescriptionBG, ProjRowLeft, ProjRowRight } from "../styles/stylesheet.js"

// var tinycolor = require("tinycolor2")

export default function Projects() {


	//Rearrange so that each project is 100 vw wide, and alternate between left and right alignment
	//Also add descriptions and photos

	return (
		<TransparentSectionWrap>
			<SectionRow>
				<SectionTitle>
					{" "}
					<AnimatedTitle {...{ "title": "Projects" }} />{" "}
				</SectionTitle>
			</SectionRow>
			<ProjRowRight>
				<ProjectLink href={"https://www.asianblackalliance.org"} target='_blank' >
					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>A website to share and store the findings of the Asian Black Alliance project at Santa Clara University.</span>
					</ProjectDescription>
					<ProjectCard>
						<ProjectTitle>Asian & Black Alliance Website</ProjectTitle>
					</ProjectCard>
				</ProjectLink>
			</ProjRowRight>
			<ProjRowLeft>
				<ProjectLink href={"https://github.com/jackcdavey/WageWizardApp"} target='_blank' >
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
				<ProjectLink href={"https://github.com/jackcdavey/HubHouseMgmtSys"} target='_blank' >
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
				<ProjectLink href={"https://theemergencyexit.net/"} target='_blank' >
					<ProjectCard>
						<ProjectTitle>The Emergency Exit Band Website</ProjectTitle>
					</ProjectCard>

					<ProjectDescription>
						<ProjectDescriptionBG />
						<span style={{ width: "70%" }}>This is where I'll write a long description about my dad and his band and the website that I'm building for them.</span>
					</ProjectDescription>
				</ProjectLink>
			</ProjRowLeft>
			<ProjRowRight>
				<ProjectLink href={"https://github.com/jackcdavey"} target='_blank' >
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
