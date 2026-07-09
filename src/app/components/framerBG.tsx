'use client'

import styled, { keyframes } from "styled-components"
import { FramerContainer } from "../styles/stylesheet"
import { BALL_COLORS } from "../styles/colors"

// DVD-logo drift: one axis per wrapper, GPU-composited, zero JS per frame.
const driftX = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(calc(100vw - var(--size))); }
`

const driftY = keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(calc(100vh - var(--size))); }
`

const BallTrackX = styled.div<{ $dur: number; $delay: number }>`
    position: absolute;
    top: 0;
    left: 0;
    animation: ${driftX} ${(props) => props.$dur}s linear infinite alternate;
    animation-delay: ${(props) => -props.$delay}s;

    @media (prefers-reduced-motion: reduce) {
        animation-play-state: paused;
    }
`

const Ball = styled.div<{ $dur: number; $delay: number }>`
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    animation: ${driftY} ${(props) => props.$dur}s linear infinite alternate;
    animation-delay: ${(props) => -props.$delay}s;

    @media (prefers-reduced-motion: reduce) {
        animation-play-state: paused;
    }
`

// Prime-ish durations so the paths don't visibly repeat
const BALLS = [
    { size: "min(45vw, 26rem)", durX: 23, durY: 17, delayX: 5, delayY: 11 },
    { size: "min(32vw, 19rem)", durX: 29, durY: 19, delayX: 13, delayY: 3 },
    { size: "min(22vw, 13rem)", durX: 31, durY: 13, delayX: 21, delayY: 7 },
]

export default function FramerBG({ theme }: { theme?: string }) {
    const colors = theme === "dark" ? BALL_COLORS.dark : BALL_COLORS.light

    return (
        <FramerContainer aria-hidden="true">
            {BALLS.map((ball, i) => (
                <BallTrackX
                    key={i}
                    $dur={ball.durX}
                    $delay={ball.delayX}
                    style={{ "--size": ball.size } as React.CSSProperties}
                >
                    <Ball
                        $dur={ball.durY}
                        $delay={ball.delayY}
                        style={{ background: colors[i] }}
                    />
                </BallTrackX>
            ))}
        </FramerContainer>
    )
}
