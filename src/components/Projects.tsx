import jackProfile from "../assets/images/me.jpg";
import resume from "../assets/images/ResumeApril2022.png";
import styled from "styled-components";

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
        <p> Yup</p>
      </SectionRow>
    </ProjWrap>
  );
}
