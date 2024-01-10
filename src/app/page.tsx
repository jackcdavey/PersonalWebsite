import Image from 'next/image'
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
      <Splash />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  )
}
