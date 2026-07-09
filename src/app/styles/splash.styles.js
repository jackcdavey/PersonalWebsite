'use client'

import styled, { keyframes } from "styled-components"
import { Link } from "react-scroll"
import { media } from "./breakpoints"

export const SplashWrap = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100vh;
    min-height: 100svh;
    width: 100%;
    box-sizing: border-box;
    padding: 6rem clamp(1.25rem, 8vw, 8rem) 16vh;
    /* Hex-alpha lets the blurred background show through without dimming content */
    background: ${(props) => props.theme.lightShade}B3;

    ${media.sm} {
        padding-bottom: 20vh;
    }
`

export const SplashTitle = styled.h1`
    font-family: var(--font-display), serif;
    font-size: clamp(3.25rem, 11vw, 8.5rem);
    font-weight: 500;
    line-height: 0.98;
    letter-spacing: -0.02em;
    color: ${(props) => props.theme.mainBrand};
    max-width: 12ch;
`

export const SplashTaglineRow = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin-top: 1.5rem;
    /* Fixed height so word swaps never reflow the composition */
    min-height: 2.6em;
`

export const TaglineTxt = styled.p`
    font-family: var(--font-body), sans-serif;
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 400;
    text-align: left;
    color: ${(props) => props.theme.darkShade};
    max-width: 100%;
    overflow-wrap: break-word;
`

const cueDrift = keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(6px); }
`

export const ScrollCueLink = styled(Link)`
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    cursor: pointer;

    &:focus-visible {
        outline: 2px solid ${(props) => props.theme.darkAccent};
        outline-offset: 4px;
    }

    @media screen and (max-height: 600px) {
        display: none;
    }
`

export const ScrollCueLabel = styled.span`
    font-family: var(--font-body), sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${(props) => props.theme.darkAccent};
`

export const ScrollCueLine = styled.span`
    width: 1px;
    height: 3rem;
    background: ${(props) => props.theme.darkAccent};
    animation: ${cueDrift} 2.5s ease-in-out infinite alternate;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`
