import jackProfile from "../assets/images/me.jpg";
import resume from "../assets/images/ResumeApril2022.png";

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

export default function Projects() {
  return (
    <SectionWrap>
      <SectionRow>
        <SectionTitle>
          {" "}
          <AnimatedTitle {..."Projects"} />{" "}
        </SectionTitle>
      </SectionRow>
      <SectionRow>
        <p> Yup</p>
      </SectionRow>
    </SectionWrap>
  );
}
