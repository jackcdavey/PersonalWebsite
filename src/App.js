import About from "./components/About";
import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AlertBar from "./components/AlertBar"
import { Link } from "react-scroll";
import React, {useRef} from "react";

import './App.css';


function ScrollArrow () {
  return <div onclick={executeScroll} class="arrow"></div>;
  //Create arrow component here alongside scrolling function, import to Splash componenet and 
}

function executeScroll(){
  //something here later
}

function App() {
  const aboutRef = useRef(null)
  

  return (
    <div class="App">
      <AlertBar />
      <Link to="aboutSect" spy={true} smooth={true} offset={50} duration={500}>Test</Link>
      <Splash />
      <About id="aboutSect"/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export {ScrollArrow}
export default App;
