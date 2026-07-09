'use client'

import Tagline from "../components/tagline"
import AnimatedTitle from "../hooks/revealText"
import { SplashTitleWrap, SplashTaglineWrap, SplashWrap, ScrollArrowSegment } from "../styles/stylesheet"
import { Link } from "react-scroll"

const isSafari: boolean = typeof window !== "undefined" && /Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent);

const prefersReducedMotion: boolean = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;


export default function Splash() {
    return (
        <SplashWrap>
            <SplashTitleWrap>
                <AnimatedTitle {...{ "title": "Hey, I'm Jack" }} />
            </SplashTitleWrap>

            <SplashTaglineWrap>
                <Tagline />
            </SplashTaglineWrap>
            <Link
                activeClass="active"
                to="aboutme"
                spy={true}
                smooth={!isSafari && !prefersReducedMotion}
                duration={700}
                className="scroll-link"
                href="#aboutme"
                aria-label="Scroll to About Me section"
            >
                <ScrollArrowSegment className="arrow" />
            </Link>
        </SplashWrap>
    )
}
