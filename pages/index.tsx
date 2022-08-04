import React from "react";
import styled, { css } from "styled-components";
import { AppContainer } from "../styles/stylesheet";
import AboutMe from "./landingSections/AboutMe";
import Projects from "./landingSections/Projects";
import Splash from "./landingSections/Splash";

import { useEffect } from "react";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Contact from "./landingSections/Contact";

const DynamicBG = dynamic(() => import('./landingSections/FramerBG'), {
  ssr: false,
  //Disable ssr so animation boundaries can be set by client window size
})

const StyledComponents = () => {

  return (

    <AppContainer>
      <DynamicBG />
      <Splash />
      <AboutMe />
      <Projects />
      <Contact />
    </AppContainer>


  );
};

export default StyledComponents;

const MyCustomBtn = () => <Button darkBtn={false}>Custom Btn Button</Button>;

// Creating Simple button with props, checkout button component in elements folder for more advanced stuff about button
type buttonProps = {
  active?: boolean; // making this props optional
  darkBtn: boolean;
};

const Button = styled.button<buttonProps>`
  background-color: ${({ darkBtn }) =>
    darkBtn
      ? "black"
      : "cyan"}; // i am destructing here, instead of using as prop.darkBtn
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border: none;

  &:hover {
    background: rebeccapurple;
  }

  /* if you want to place multiple lines of css, you can import {css}  */
  ${({ active }) =>
    active &&
    css`
      border: 2px solid gold;
      background-color: darkcyan;
      color: white;
    `}
`;

const MyContainer: React.FC = ({ children }) => (
  <Container>
    <div className="content">
      <ul>
        <li>First list</li>
        <li>second list</li>
        <li>third list</li>
        <li>fourth list</li>
      </ul>
      {children}
    </div>
  </Container>
);

const Container = styled.div`
  width: 80%;

  .content {
    padding: 2rem;

    ul {
      margin-bottom: 5rem;
      li {
        &:not(:last-child) {
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;
