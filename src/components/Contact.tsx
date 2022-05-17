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

export default function Contact() {
  const ContWrap = styled(SectionWrap)`
    background-color: ${COLORS.lightAccent};
    padding: 0;
    margin: 0;
  `;

  return (
    <ContWrap>
      <SectionRow>
        <SectionTitle>
          {" "}
          <AnimatedTitle {..."Contact Me!"} />{" "}
        </SectionTitle>
      </SectionRow>
      <SectionRow>
        <p> It'll go here i guess</p>
      </SectionRow>
    </ContWrap>
  );
}
