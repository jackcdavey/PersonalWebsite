import jackProfile from "../assets/images/me.jpg";
import resume from "../assets/images/ResumeApril2022.png";
import styled from "styled-components";
import gitLogo from '../assets/images/github.png'

import AnimatedTitle from "../hooks/revealText";

// import tinycolor from 'tinycolor2';


import React, { Component } from "react";

import {
  SectionWrap,
  SectionRow,
  ContentColumn,
  ContentRow,
  ContentBox,
  ChipContainer,
  SectionTitle,
  ProfileImageWrap,
  ProjectCard,
  ProjectTitle,
  ProjectImage,
  ProjectLink,
} from "../styles/stylesheet.js";
import { COLORS } from "../styles/colors";

var tinycolor = require("tinycolor2");

export default function Projects() {
  const ProjWrap = styled(SectionWrap)`
    // background-color: ${COLORS.lightShade};
    background-color: tinycolor("#D1D3C4ff");
  `;

  return (
    <ProjWrap>
      <SectionRow>
        <SectionTitle>
          {" "}
          <AnimatedTitle {..."Projects"} />{" "}
        </SectionTitle>
      </SectionRow>
      <SectionRow>
        <ProjectLink href={"https://github.com/jackcdavey/WageWizardApp"}>
        <ProjectCard>
          
            <ProjectTitle>
              Wage Wizard
            </ProjectTitle>
          
          </ProjectCard>
        </ProjectLink>
        <ProjectLink href={"https://github.com/jackcdavey"}>
        <ProjectCard>
          
            <ProjectImage src={gitLogo} alt="GitHub Logo" />
            <ProjectTitle>
              
              GitHub
            </ProjectTitle>
          
          </ProjectCard>
          </ProjectLink>
      </SectionRow>
    </ProjWrap>
  );
}
