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

import { Element, Link } from "react-scroll";

import { ColorToggle } from "../components/colorToggle";

// const DynamicBG = dynamic(() => import('./landingSections/FramerBG'), {
//   ssr: false,
// })

//Disable ssr so animation boundaries can be set by client window size


const StyledComponents = () => {

  return (

    <AppContainer>
      {/* <DynamicBG /> */}
      <ColorToggle />
      <Splash />
      <Element name="aboutme">
        <AboutMe />
      </Element>
      <Projects />
      <Contact />
    </AppContainer>


  );
};

export default StyledComponents;
