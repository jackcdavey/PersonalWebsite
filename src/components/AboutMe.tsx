import styled from "styled-components";
import jackProfile from "../assets/images/me.jpg";
import resume from "../assets/images/ResumeApril2022.png";
import AnimatedTitle from "../hooks/revealText";
import { COLORS } from "../styles/colors";

import {
  SectionWrap,
  SectionRow,
  ContentColumn,
  ContentRow,
  ContentBox,
  ChipContainer,
  SectionTitle,
  ProfileImageWrap,
  ResumeDownload,
  ProjectLink,
} from "../styles/stylesheet.js";

export default function AboutMe() {
  const AbtWrap = styled(SectionWrap)`
    background-color: ${COLORS.lightAccent};
  `;

  const skills = ["Creative Cloud", 
"Professional Writing",
"UI / UX",
    "SolidWorks",
"Graphic Design",
"Electronics",
    "PC Assembly"]
  
  const technologies = ["React Native",
"ReactJS",
"JavaScript",
"Java",
"HTML",
"CSS",
"C",
"PHP",
"SQL",
"Ruby"
  ]

  return (
    <AbtWrap>
      <SectionRow>
        <SectionTitle>
          <AnimatedTitle {..."About Me"} />
        </SectionTitle>
      </SectionRow>
      <SectionRow>
        <ProfileImageWrap>
          <img
            src={jackProfile}
            id="aboutMePic"
            
            alt="Jack Davey"
          ></img>

          <ProjectLink href={resume} download={"resume.png"} >
            <ResumeDownload>
              Download my resume here!
            </ResumeDownload>
                </ProjectLink>
        </ProfileImageWrap>
        <div>
                <h3>Intro</h3>
                <p>
                  Currently pursuing a B.S. in Web Design and Engineering with a
                  minor in Innovation, Design Thinking, and the Entrepreneurial
                  Mindset at Santa Clara University. Having spent my entire life
                  in California, I grew up with an immense appreciation for the
                  beauty and simplicity of nature. I love to tinker, design, and
                  create, but when I’m not working away at my desk, you’ll
                  likely find me at the driving range or exploring the mountains
                  with my hammock and camera.{" "}
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
                    <ChipContainer>{tech}</ChipContainer>
                  ))}
                </ContentBox>
              </ContentColumn>
              <ContentColumn>
                <ContentBox>
                  {skills.map((skill) => (
                    <ChipContainer>{skill}</ChipContainer>
                  ))}
                </ContentBox>
              </ContentColumn>
            </ContentRow>
          </ContentBox>
        </div>
      </SectionRow>
    </AbtWrap>
  );
}
