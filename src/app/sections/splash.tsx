'use client'

import Tagline from "../components/tagline"
import AnimatedTitle from "../hooks/revealText"
import { smoothScrollEnabled } from "../hooks/env"
import {
    SplashWrap,
    SplashTitle,
    SplashTaglineRow,
    ScrollCueLink,
    ScrollCueLabel,
    ScrollCueLine,
} from "../styles/splash.styles"

export default function Splash() {
    return (
        <SplashWrap>
            <SplashTitle>
                <AnimatedTitle {...{ "title": "Hey, I'm Jack" }} />
            </SplashTitle>

            <SplashTaglineRow>
                <Tagline />
            </SplashTaglineRow>

            <ScrollCueLink
                to="aboutme"
                smooth={smoothScrollEnabled}
                duration={700}
                offset={-72}
                href="#aboutme"
                aria-label="Scroll to About Me section"
            >
                <ScrollCueLabel>Scroll</ScrollCueLabel>
                <ScrollCueLine />
            </ScrollCueLink>
        </SplashWrap>
    )
}
