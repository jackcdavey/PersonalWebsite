import About from "./components/About";
import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AlertBar from "./components/AlertBar";


import React, {Component, useRef, useEffect, forwardRef} from 'react'

import Scroll from 'react-scroll'
import Link from 'react-scroll'

import './App.css';




function App() {

  return (
    <div className="App">
      
      <AlertBar />
      <Splash />
      <About id="aboutsection"/>
      <Projects/>
      <Contact/>

    </div>
  );
}
//<button onClick={}>Clickme dammit </button>

export default App;
