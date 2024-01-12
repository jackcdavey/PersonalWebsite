'use client'

import Image from 'next/image'
import { Element } from 'react-scroll'
import dynamic from 'next/dynamic'
import styles from './styles/page.module.css'
// import { ThemeProvider } from './styles/themeContext.js'
import { ThemeProvider } from 'styled-components'
import { useState, useEffect } from 'react'
import { DARKCOLORS, LIGHTCOLORS } from './styles/colors'
// import AboutMe from './sections/aboutMe'
// import Splash from './sections/splash'
// import Projects from './sections/projects'
// import Contact from './sections/contact'
// import FramerBG from './components/framerBG'
import MenuSwitcher from './components/switcher'

const FramerBG = dynamic(() => import('./components/framerBG'), { ssr: false })
const AboutMe = dynamic(() => import('./sections/aboutMe'), { ssr: false })
const Splash = dynamic(() => import('./sections/splash'), { ssr: false })
const Projects = dynamic(() => import('./sections/projects'), { ssr: false })
const Contact = dynamic(() => import('./sections/contact'), { ssr: false })



export default function Home() {
  const [theme, setTheme] = useState('');  // Initialize theme to null

  useEffect(() => {
    // Set theme based on user's preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');

    // Listen for changes in the preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light');
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return (
    <ThemeProvider theme={theme === 'dark' ? DARKCOLORS : LIGHTCOLORS}>
      <main className={styles.main}>
        <MenuSwitcher />
        <FramerBG />
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
    </ThemeProvider>
  )
}
