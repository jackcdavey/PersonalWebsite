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
} from "../styles/stylesheet.js"

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
						<ResumeDownload>Download my resume here!</ResumeDownload>
					</ProjectLink>
				</ProfileImageWrap>
				<div>
					<h3>Intro</h3>
					<p>
						Led by a lifelong passion for technology and aesthetics, I graduated from Santa Clara University with a B.S. in Web Desing and Engineering in 2022, and am continuing my studies there in pursuit of an M.S. in Engineering Management with a minor in Science, Technology, and Society. Having spent my entire life in California, I grew up with an immense appreciation for the beauty and simplicity of nature. I love to tinker, design, and create, but when I’m not working away at my desk, you’ll likely
						find me hooking the majority of my shots at the driving range, or out exploring the mountains with my hammock and camera.{" "}
					</p>
					<br></br>
					{/*Maybe implement some interactivity with these in the futre,
          like slow floating movement & hover action*/}

					{/* Also switch these from a copy/paste mess to an array ffs */}

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
								<ContentBox>
									{technologies.map((tech) => (
										<ChipContainer key={tech}>
											<ChipLabel>{tech}</ChipLabel>
										</ChipContainer>
									))}
								</ContentBox>
							</ContentColumn>
							<ContentColumn>
								<ContentBox>
									{skills.map((skill) => (
										<ChipContainer key={skill}>
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
