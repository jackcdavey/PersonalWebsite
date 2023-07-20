import gitLogo from "../assets/images/github.png"
import AnimatedTitle from "../hooks/revealText"
import { SectionRow, SectionTitle, ProjectCard, ProjectTitle, ProjectImage, ProjectLink, TransparentSectionWrap, ProjectDescription, ProjectDescriptionBG, ProjRowLeft, ProjRowRight } from "../styles/stylesheet.js"

// var tinycolor = require("tinycolor2")

interface ProjectProps {
	title: string
	description: string
	image?: string
	link?: string
}

const projects: ProjectProps[] = [
	{
		title: "Asian & Black Alliance Website",
		description: "A website to share and store the findings of the Asian Black Alliance project at Santa Clara University.",
		link: "https://www.asianblackalliance.org",
	},
	{
		title: "Wage Wizard",
		description: "A web application that allows users to input their hourly wage and hours worked",
		link: "https://github.com/jackcdavey/WageWizardApp"
	},
	{
		title: "Bloom Space",
		description: "A Creative AI tool that utilizes OpenAI's GPT-4, CLIP, and Dall-e 2 APIs to suggest potential houseplant options based on a user's input image and criteria.",
		link: "https://github.com/jackcdavey/BloomSpace"
	},
	{
		title: "Bored at the News Bot",
		description: "A Twitter bot that uses OpenAI's GPT-3 API to comment on daily news headlines, from the perspective of a snarky, bored teenager.",
		link: "https://github.com/jackcdavey/BoredAtTheNews"
	}
]

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

			{projects.map((project, index) => {
				if (index % 2 === 0) {
					return (
						<ProjRowRight>
							<ProjectLink href={project.link} target='_blank' >
								<ProjectDescription>
									{/* <ProjectDescriptionBG /> */}
									<span style={{ width: "70%" }}>
										{project.description}
									</span>
								</ProjectDescription>
								<ProjectCard>
									<ProjectTitle>
										{project.title}
									</ProjectTitle>
								</ProjectCard>
							</ProjectLink>
						</ProjRowRight>
					)
				}
				else {
					return (
						<ProjRowLeft>
							<ProjectLink href={project.link} target='_blank' >
								<ProjectCard>
									<ProjectTitle>
										{project.title}
									</ProjectTitle>
								</ProjectCard>

								<ProjectDescription>
									{/* <ProjectDescriptionBG /> */}
									<span style={{ width: "70%" }}>
										{project.description}
									</span>
								</ProjectDescription>
							</ProjectLink>
						</ProjRowLeft>
					)
				}
			})}

		</TransparentSectionWrap>
	)
}
