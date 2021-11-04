import Tagline from "./Tagline";

import React from 'react';

import {Link} from 'react-scroll';


export default function Splash(){
  return(
      <div id="hero-grid">
        <div className="titleWrap">
          <h1 className="title">Hey, I'm Jack</h1>
        </div>
        <div className="infoWrap">
          <Tagline />
        </div>
        <Link activeclass="active" to="aboutSection" spy={true} smooth={true} duration={700}>
          <div className="arrow"></div>
        </Link>
      </div>
    );
}