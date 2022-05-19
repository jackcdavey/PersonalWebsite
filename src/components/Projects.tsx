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
        <ProjectCard>
          <a href={"https://github.com/jackcdavey/WageWizardApp"}>
            <div className="project">
              <h4>Wage Wizard</h4>
            </div>
          </a>
        </ProjectCard>
        <ProjectCard>
          <a href={"https://github.com/jackcdavey"}>
            <div className="project" id="gitHubCard">
              <img src={gitLogo} id="githubimg" className="img-fluid rounded center-block" alt="GitHub Logo"></img>
              <h5 > GitHub </h5>
            </div>
          </a>
        </ProjectCard>
      </SectionRow>
    </ProjWrap>
  );
}
