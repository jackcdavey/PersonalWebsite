'use client'

import AnimatedTitle from "../hooks/revealText"
import dynamic from 'next/dynamic'

import { SectionRow, SectionTitle, ProjectCard, ProjectTitle, ProjectGraphic, ProjectDescription, GraphicPath, ProjectLink, TransparentSectionWrap, ProjectCategoryChip, ProjRowLeft, ProjRowRight } from "../styles/stylesheet.js"


const isSafari: boolean = /Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent);

const projectOffset = 200;

// const isSafari: boolean = false;

interface ProjectProps {
    title: string
    description: string
    graphic?: boolean
    svgPath?: string
    link?: string
    type?: string
}

const projects: ProjectProps[] = [

    {
        title: "Relyion Energy Site Rebuild",
        description: "A rebuild and redesign of the Relyion Energy website, built with React, TypeScript, and Next.js. Broken into separate investor and customer-facing sites, to reduce content overload and improve user experience and retention.",
        link: "https://www.relyionenergy.com/",
        type: "Website"
    },
    {
        title: "Asian & Black Alliance Website",
        description: "A website to share and store the findings of the Asian Black Alliance project at Santa Clara University.",
        link: "https://www.asianblackalliance.org",
        type: "Website"
    },
    {
        title: "Wage Wizard",
        description: " Wage Wizard is a mobile application for iOS and Andoid, designed by students of Santa Clara University in collaboration with the SCU Frugal Design Hub and Santa Clara Wage Theft Coalition, to help individual workers easily, securly, and verifiably log their time spent working, and combat wage theft. ",
        link: "https://github.com/jackcdavey/WageWizardApp",
        type: "Mobile App"
    },
    {
        title: "City Bites",
        description: "A small demo site for browsing & liking top restaurants in a given city, built with React, TypeScript, and the Yelp Fusion API.",
        link: "https://city-bites.vercel.app/",
        type: "Website"
    },
    {
        title: "Bloom Space",
        description: "A Creative AI tool that utilizes OpenAI's GPT-4, CLIP, and Dall-e 2 APIs to suggest potential houseplant options based on a user's input image and criteria.",
        link: "https://github.com/jackcdavey/BloomSpace",
        type: "Web App"
    },
    {
        title: "Bored at the News Bot",
        description: "A Twitter bot that uses OpenAI's GPT-3 API to comment on daily news headlines, from the perspective of a snarky, bored teenager.",
        link: "https://github.com/jackcdavey/BoredAtTheNews",
        type: "Web App"
    },
    {
        title: "GitHub",
        description: "Check out all my other work and projects over on GitHub!",
        link: "https://github.com/jackcdavey",
        svgPath: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
        graphic: true,
    }
]


// Chip Variations
const Website = () => {
    return (
        <div>
            <ProjectCategoryChip
                style={{
                    backgroundColor: '#d04a4a',
                    fontWeight: 'bold',
                    justifySelf: 'flex-end'
                }}
            >
                Website
            </ProjectCategoryChip>
        </div>
    )
}

const MobileApp = () => {
    return (
        <div>
            <ProjectCategoryChip
                style={{
                    backgroundColor: '#d04a8f',
                    fontWeight: 'bold'
                }}
            >
                Mobile App
            </ProjectCategoryChip>
        </div>
    )
}

const WebApp = () => {
    return (
        <div>
            <ProjectCategoryChip
                style={{
                    backgroundColor: '#4f4ad0',
                    fontWeight: 'bold'
                }}
            >
                Web App
            </ProjectCategoryChip>
        </div>
    )
}



export default function Projects() {

    return (
        <TransparentSectionWrap>
            <SectionRow>
                <SectionTitle>
                    {" "}
                    <AnimatedTitle {...{ "title": "Work & Projects" }} />{" "}
                </SectionTitle>
            </SectionRow>

            {projects.map((project, index) => {
                if (index % 2 === 0) {
                    return (
                        <ProjRowRight
                            key={index}
                            initial={{
                                y: projectOffset
                            }}
                            whileInView={{
                                y: 0
                            }}
                            transition={{
                                type: isSafari ? "tween" : "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            viewport={{ once: true }}
                        >
                            <ProjectDescription>
                                <span style={{ width: "70%" }}>
                                    {project.description}
                                </span>
                            </ProjectDescription>

                            <ProjectLink href={project.link} target='_blank'  >

                                <ProjectCard >

                                    <ProjectTitle>
                                        {project.title}
                                    </ProjectTitle>
                                    {project.type === "Website" &&
                                        <Website />
                                    }
                                    {project.type === "Mobile App" &&
                                        <MobileApp />
                                    }
                                    {project.type === "Web App" &&
                                        <WebApp />
                                    }
                                    {project.graphic &&
                                        <ProjectGraphic>
                                            <GraphicPath d={project.svgPath} />
                                        </ProjectGraphic>
                                    }
                                </ProjectCard>
                            </ProjectLink>
                        </ProjRowRight>
                    )
                }
                else {
                    return (
                        <ProjRowLeft
                            key={index}
                            initial={{
                                y: projectOffset
                            }}
                            whileInView={{
                                y: 0
                            }}
                            transition={{
                                type: isSafari ? "tween" : "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            viewport={{ once: true }}
                        >
                            <ProjectLink href={project.link} target='_blank' >
                                <ProjectCard>

                                    <ProjectTitle>
                                        {project.title}
                                    </ProjectTitle>
                                    {project.type === "Website" &&
                                        <Website />
                                    }
                                    {project.type === "Mobile App" &&
                                        <MobileApp />
                                    }
                                    {project.type === "Web App" &&
                                        <WebApp />
                                    }
                                    {project.graphic &&
                                        <ProjectGraphic>
                                            <GraphicPath d={project.svgPath} />
                                        </ProjectGraphic>
                                    }
                                </ProjectCard>
                            </ProjectLink>

                            <ProjectDescription>
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
