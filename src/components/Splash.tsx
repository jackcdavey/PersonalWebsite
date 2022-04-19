import Tagline from "./Tagline";

import React from 'react';

import { Link } from 'react-scroll';
import { SplashTitle, SplashWrap } from "../styles/stylesheet";

export default function Splash() {


    return (
        <SplashWrap>
            <div className="titleWrap">
                <SplashTitle>Hey, I'm Jack</SplashTitle>
            </div>
            <div className="infoWrap">
                <Tagline />
            </div>
            {/* <Link activeclass="active" to="aboutSection" spy={true} smooth={true} duration={700}> */}
            <div className="arrow"></div>
            {/* </Link> */}
        </SplashWrap>
    );
}