import gitLogo from "../assets/images/github.png"
import AnimatedTitle from "../hooks/revealText"
import { SectionRow, SectionTitle, ProjectCard, ProjectTitle, ProjectImage, ProjectLink, TransparentSectionWrap, ProjectDescription, ProjRowLeft, ProjRowRight } from "../styles/stylesheet.js"

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
		description: " Wage Wizard is a mobile application for iOS and Andoid, designed by students of Santa Clara University in collaboration with the SCU Frugal Design Hub and Santa Clara Wage Theft Coalition, to help individual workers easily, securly, and verifiably log their time spent working, and combat wage theft. ",
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
	},
	{
		title: "GitHub",
		description: "Check out all my other work and projects over on GitHub!",
		link: "https://github.com/jackcdavey",
		image: gitLogo
	}
]

export default function Projects() {

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
						<ProjRowRight
							initial={{ y: 400 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.1, type: "spring", stiffness: 300, damping: 20 }}

							viewport={{ once: true }}
						>
							<ProjectDescription>
								{/* <ProjectDescriptionBG /> */}
								<span style={{ width: "70%" }}>
									{project.description}
								</span>
							</ProjectDescription>

							<ProjectLink href={project.link} target='_blank' >

								<ProjectCard>
									{project.image &&
										<ProjectImage src={project.image} />
									}
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
						<ProjRowLeft

							initial={{ y: 400 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.1, type: "spring", stiffness: 300, damping: 20 }} viewport={{ once: true }}

						>
							<ProjectLink href={project.link} target='_blank' >
								<ProjectCard>
									<ProjectTitle>
										{project.title}
									</ProjectTitle>
								</ProjectCard>
							</ProjectLink>

							<ProjectDescription>
								{/* <ProjectDescriptionBG /> */}
								<span style={{ width: "70%" }}>
									{project.description}
								</span>
							</ProjectDescription>
						</ProjRowLeft>
					)
				}
			})}

		</TransparentSectionWrap>
	)
}
