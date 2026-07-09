'use client'

import AnimatedTitle from "../hooks/revealText"
import { Variants } from "framer-motion"

import {
    SectionShell,
    SectionInner,
    SectionHeading,
    Eyebrow,
    ProjectLink,
    GraphicPath,
} from "../styles/shared"
import {
    AboutGrid,
    PortraitColumn,
    Portrait,
    ResumeButton,
    BioColumn,
    BioLede,
    BioBody,
    ChipSection,
    ChipGroup,
    Chip,
} from "../styles/about.styles"

const groupVariants: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const chipVariants: Variants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
};

const bioLede = "Led by a lifelong passion for technology and aesthetics, I graduated from Santa Clara University with a B.S. in Web Design and Engineering in 2022, followed by earning my M.S. in Engineering Management and Leadership in 2023."

export default function AboutMe() {
    const skills = ["Web Design", "Creative Cloud", "Professional Writing", "UI / UX", "SolidWorks", "Graphic Design", "Electronics Repair", "Figma", "Git / VCS"]

    const technologies = ["React", "Angular", "NextJS", "TypeScript", "JavaScript", "Swift", "C", "CSS3", "PHP", "SQL", "Ruby", "Python", "SwiftUI", "Tailwind", "GraphQL"]

    return (
        <SectionShell $band>
            <SectionInner>
                <Eyebrow>01 — About</Eyebrow>
                <SectionHeading>
                    <AnimatedTitle {...{ "title": "About Me" }} />
                </SectionHeading>

                <AboutGrid>
                    <PortraitColumn>
                        <Portrait
                            src="/me-large.webp"
                            srcSet="/me-small.webp 250w, /me-medium.webp 500w, /me-large.webp 1000w"
                            sizes="(max-width: 900px) 20rem, 25vw"
                            alt="Jack Davey"
                        />

                        <ProjectLink href="/Resume.png" target="_blank" rel="noopener noreferrer" download="JackDaveyResume.png">
                            <ResumeButton>
                                Resume
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" aria-hidden="true">
                                    <GraphicPath d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                                </svg>
                            </ResumeButton>
                        </ProjectLink>
                    </PortraitColumn>

                    <BioColumn>
                        <BioLede>{bioLede}</BioLede>
                        <BioBody>
                            Having spent my entire life in California, I grew up with an immense appreciation for the beauty and simplicity of nature. I&apos;ve honed my skills through my experience as a UI Developer at Relyion Energy and as a development Research Assistant at SCU, and now as a Front‑End Engineer at LPL Financial, where I build and maintain an Angular/Tailwind portal used daily by thousands of advisors, blending technical expertise with creative design. I love to tinker, design, and create, but when I&apos;m not working away at my desk, you&apos;ll likely find me hooking some shots at the driving range, or out exploring the mountains with my hammock and camera.
                        </BioBody>
                    </BioColumn>
                </AboutGrid>

                <ChipSection>
                    <div>
                        <Eyebrow>Technologies</Eyebrow>
                        <ChipGroup
                            variants={groupVariants}
                            initial="initial"
                            viewport={{ once: true }}
                            whileInView="animate"
                        >
                            {technologies.map((tech) => (
                                <Chip key={tech} variants={chipVariants}>
                                    {tech}
                                </Chip>
                            ))}
                        </ChipGroup>
                    </div>
                    <div>
                        <Eyebrow>Skills</Eyebrow>
                        <ChipGroup
                            variants={groupVariants}
                            initial="initial"
                            viewport={{ once: true }}
                            whileInView="animate"
                        >
                            {skills.map((skill) => (
                                <Chip key={skill} variants={chipVariants}>
                                    {skill}
                                </Chip>
                            ))}
                        </ChipGroup>
                    </div>
                </ChipSection>
            </SectionInner>
        </SectionShell>
    )
}
