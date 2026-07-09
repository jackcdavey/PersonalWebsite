'use client'

import { useState, useEffect, useRef } from 'react'
import { smoothScrollEnabled } from '../hooks/env'
import {
    NavBar,
    NavWordmark,
    NavLinks,
    NavLink,
    StylesMenu,
    StylesButton,
    StylesDropdown,
} from '../styles/nav.styles'

const NAV_OFFSET = -72;

const sections = [
    { to: 'aboutme', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
]

const scrollProps = {
    spy: true,
    smooth: smoothScrollEnabled,
    duration: 600,
    offset: NAV_OFFSET,
}

export default function Nav() {
    const [stylesOpen, setStylesOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setStylesOpen(false)
            }
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setStylesOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
    }, [])

    return (
        <NavBar aria-label="Main navigation">
            <NavWordmark
                to="splash"
                smooth={smoothScrollEnabled}
                duration={600}
                href="#splash"
                aria-label="Scroll to top"
            >
                <span className="full">Jack Davey</span>
                <span className="short">JD</span>
            </NavWordmark>

            <NavLinks>
                {sections.map((section) => (
                    <NavLink
                        key={section.to}
                        to={section.to}
                        activeClass="active"
                        href={`#${section.to}`}
                        {...scrollProps}
                    >
                        {section.label}
                    </NavLink>
                ))}

                <StylesMenu ref={menuRef}>
                    <StylesButton
                        type="button"
                        onClick={() => setStylesOpen(!stylesOpen)}
                        aria-expanded={stylesOpen}
                        aria-label="Other versions of this site"
                    >
                        Styles
                        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </StylesButton>
                    {stylesOpen && (
                        <StylesDropdown>
                            <a href="https://jackcdavey.github.io/" title="First version of my portfolio">V0.1</a>
                            <a href="https://terminal-demo-two.vercel.app/" title="A CLI-based website">CLI</a>
                        </StylesDropdown>
                    )}
                </StylesMenu>
            </NavLinks>
        </NavBar>
    )
}
