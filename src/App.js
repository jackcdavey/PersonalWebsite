import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//import AlertBar from "./components/AlertBar";


import React, {Component, useRef, useEffect, forwardRef} from 'react'

import Scroll from 'react-scroll'
import Link from 'react-scroll'

import './App.css';


//<AlertBar />

function App() {

  

  return (
    <div className="App">
      
      <NavMenu/>
      <Splash />
      <About id="aboutsection"/>
      <Projects id="projectSection"/>
      <Contact id="contactSection"/>

    </div>
  );
}
//<button onClick={}>Clickme dammit </button>

export default App;
