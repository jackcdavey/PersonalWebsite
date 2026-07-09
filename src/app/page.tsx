'use client'

import { Element } from 'react-scroll'
import dynamic from 'next/dynamic'
import styles from './styles/page.module.css'
import { ThemeProvider } from 'styled-components'
import { MotionConfig } from 'framer-motion'
import { useState, useEffect } from 'react'
import { DARKCOLORS, LIGHTCOLORS } from './styles/colors'

const Nav = dynamic(() => import('./components/nav'), { ssr: false })
const Background = dynamic(() => import('./components/background'), { ssr: false })
const AboutMe = dynamic(() => import('./sections/aboutMe'), { ssr: false })
const Splash = dynamic(() => import('./sections/splash'), { ssr: false })
const Projects = dynamic(() => import('./sections/projects'), { ssr: false })
const Contact = dynamic(() => import('./sections/contact'), { ssr: false })

const getPreferredTheme = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'

export default function Home() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? DARKCOLORS : LIGHTCOLORS}>
      <MotionConfig reducedMotion="user">
        <main className={styles.main}>
          <Nav />
          <Background theme={theme} />
          <Element name="splash">
            <Splash />
          </Element>
          <Element name="aboutme">
            <AboutMe />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </main>
      </MotionConfig>
    </ThemeProvider>
  )
}
