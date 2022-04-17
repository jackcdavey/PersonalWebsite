import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PicGallery from "./components/Gallery";
//import AlertBar from "./components/AlertBar";


import React, { Component, useRef, useEffect, forwardRef } from 'react'

import Scroll from 'react-scroll'
import Link from 'react-scroll'

import './App.css';


//<AlertBar />

function App() {



  return (
    <div className="App">

      <Splash />
      <About id="aboutsection" />
      <Projects id="projectSection" />
      {/* <PicGallery /> */}
      <Contact id="contactSection" />

    </div>
  );
}
//<button onClick={}>Clickme dammit </button>

export default App;
