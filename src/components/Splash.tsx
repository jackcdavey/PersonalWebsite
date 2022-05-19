import Tagline from "./Tagline";
import AnimatedTitle from "../hooks/revealText";
import React from "react";

//import { Link } from "react-scroll";
import { SplashTitleWrap, SplashTaglineWrap, SplashWrap } from "../styles/stylesheet";

import Scroll from "react-scroll";
import Link from "react-scroll"
//var scroll = Scroll.animateScroll;
var scroller = Scroll.scroller;


export default function Splash() {
  return (
    <SplashWrap>
        <SplashTitleWrap>
          <AnimatedTitle {..."Hey, I'm Jack"} />
        </SplashTitleWrap>

        {/* <AnimatedTitle {..."testing this"} /> */}
      <SplashTaglineWrap>
        <Tagline />
      </SplashTaglineWrap>
      {/* <Link activeclass="active" to="aboutSection" spy={true} smooth={true} duration={700}> */}
      <div className="arrow"></div>
      {/* </Link> */}
    </SplashWrap>
  );
}
