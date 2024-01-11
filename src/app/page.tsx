'use client'

import Image from 'next/image'
import { Element } from 'react-scroll'
import styles from './styles/page.module.css'
import AboutMe from './sections/aboutMe'
import Splash from './sections/splash'
import Projects from './sections/projects'
import Contact from './sections/contact'
import FramerBG from './components/framerBG'

export default function Home() {
  return (
    <main className={styles.main}>
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
  )
}
