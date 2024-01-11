'use client'

import Image from 'next/image'
import { Element } from 'react-scroll'
import dynamic from 'next/dynamic'
import styles from './styles/page.module.css'
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
  return (
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
  )
}
