import jackProfile from "../assets/images/me.jpg";
import resume from "../assets/images/ResumeApril2022.png";
import styled from "styled-components";
import gitLogo from '../assets/images/github.png'

import AnimatedTitle from "../hooks/revealText";

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
} from "../styles/stylesheet.js";
import { COLORS } from "../styles/colors";

export default function Projects() {
  const ProjWrap = styled(SectionWrap)`
    background-color: ${COLORS.lightShade};
    opacity: 0.5;
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
        <div className="project-card">
          <a href={"https://github.com/jackcdavey/WageWizardApp"}>
            <div className="project">
              <h4>Wage Wizard</h4>
            </div>
          </a>
        </div>
        <div className="project-card">
          <a href={"https://github.com/jackcdavey"}>
            <div className="project" id="gitHubCard">
              <img src={gitLogo} id="githubimg" className="img-fluid rounded center-block" alt="GitHub Logo"></img>
              <h5 > GitHub </h5>
            </div>
          </a>
        </div>
      </SectionRow>
    </ProjWrap>
  );
}
