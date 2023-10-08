import jackProfile from "../assets/images/me.jpg"
import resume from "../assets/images/Resume.png"
import AnimatedTitle from "../hooks/revealText"

import {
	SectionWrap,
	SectionRow,
	ContentColumn,
	ContentRow,
	ContentBox,
	ChipContainer,
	ChipLabel,
	SectionTitle,
	ProfileImageWrap,
	ResumeDownload,
	ProjectLink,
	ProfileImage,
	GraphicPath,
} from "../styles/stylesheet.js"

const containerVariants = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const chipVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
};

export default function AboutMe() {
	const skills = ["Creative Cloud", "Professional Writing", "UI / UX", "SolidWorks", "Graphic Design", "Electronics Repair", "Figma", "Git"]

	const technologies = ["React", "NextJS", "TypeScript", "JavaScript", "Swift", "C", "PHP", "SQL", "Ruby", "Python", "SiwftUI", "Tailwind"]
	return (
		<SectionWrap>
			<SectionRow>
				<SectionTitle>
					<AnimatedTitle {...{ "title": "About Me" }} />
				</SectionTitle>
			</SectionRow>
			<SectionRow>
				<ProfileImageWrap>
					<ProfileImage
						src={jackProfile}
						id="aboutMePic"
						alt="Jack Davey"
						style={{
							maxWidth: "15rem",
						}}
					/>



					<ProjectLink href={resume} download={"resume.png"}>
						<ResumeDownload>
							Resume
							<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
								<GraphicPath d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
							</svg>



						</ResumeDownload>
					</ProjectLink>
				</ProfileImageWrap>
				<div>
					<h3>Intro</h3>
					<p>
						Led by a lifelong passion for technology and aesthetics, I graduated from Santa Clara University with a B.S. in Web Desing and Engineering in 2022, and am continuing my studies there in pursuit of an M.S. in Engineering Management with a minor in Science, Technology, and Society. Having spent my entire life in California, I grew up with an immense appreciation for the beauty and simplicity of nature. I love to tinker, design, and create, but when I’m not working away at my desk, you’ll likely
						find me hooking the majority of my shots at the driving range, or out exploring the mountains with my hammock and camera.{" "}
					</p>
					<br></br>

					<ContentBox>
						<ContentRow>
							<ContentColumn>
								<h3>Technologies</h3>
							</ContentColumn>
							<ContentColumn>
								<h3>Skills</h3>
							</ContentColumn>
						</ContentRow>
						<ContentRow>
							<ContentColumn>
								<ContentBox
									variants={containerVariants}
									initial="initial"
									viewport={{ once: true }}
									whileInView="animate"
								>
									{technologies.map((tech) => (
										<ChipContainer
											key={tech}
											variants={chipVariants}
										>
											<ChipLabel>{tech}</ChipLabel>
										</ChipContainer>
									))}
								</ContentBox>
							</ContentColumn>
							<ContentColumn>
								<ContentBox
									variants={containerVariants}
									initial="initial"
									viewport={{ once: true }}
									whileInView="animate"
								>
									{skills.map((skill) => (
										<ChipContainer
											key={skill}
											variants={chipVariants}
										>
											<ChipLabel>{skill}</ChipLabel>
										</ChipContainer>
									))}
								</ContentBox>
							</ContentColumn>
						</ContentRow>
					</ContentBox>
				</div>
			</SectionRow>
		</SectionWrap>
	)
}
