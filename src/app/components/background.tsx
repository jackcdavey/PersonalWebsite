'use client'

import styled, { keyframes } from "styled-components"
import { BackgroundLayer } from "../styles/background.styles"
import { BALL_COLORS } from "../styles/colors"

// Slow corner-anchored drift: a few vw of travel and a gentle swell,
// GPU-composited, zero JS per frame.
const drift = keyframes`
    from { transform: translate(0, 0) scale(1); }
    to { transform: translate(var(--dx), var(--dy)) scale(1.08); }
`

const Blob = styled.div<{ $dur: number; $delay: number }>`
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    animation: ${drift} ${(props) => props.$dur}s ease-in-out infinite alternate;
    animation-delay: ${(props) => -props.$delay}s;

    @media (prefers-reduced-motion: reduce) {
        animation-play-state: paused;
    }
`

// Offsets pull each blob partly off-canvas so only a soft field is visible
const BLOBS = [
    { size: "min(70vw, 45rem)", top: "-20%", left: "-15%", dx: "6vw", dy: "4vh", dur: 90, delay: 15 },
    { size: "min(60vw, 40rem)", top: "25%", right: "-20%", dx: "-5vw", dy: "6vh", dur: 120, delay: 45 },
    { size: "min(65vw, 42rem)", bottom: "-25%", left: "5%", dx: "4vw", dy: "-5vh", dur: 150, delay: 70 },
]

export default function Background({ theme }: { theme?: string }) {
    const colors = theme === "dark" ? BALL_COLORS.dark : BALL_COLORS.light

    return (
        <BackgroundLayer aria-hidden="true">
            {BLOBS.map((blob, i) => (
                <Blob
                    key={i}
                    $dur={blob.dur}
                    $delay={blob.delay}
                    style={{
                        "--size": blob.size,
                        "--dx": blob.dx,
                        "--dy": blob.dy,
                        top: blob.top,
                        left: blob.left,
                        right: blob.right,
                        bottom: blob.bottom,
                        background: `radial-gradient(circle at 30% 30%, ${colors[i]}, transparent 70%)`,
                    } as React.CSSProperties}
                />
            ))}
        </BackgroundLayer>
    )
}
