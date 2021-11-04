import Tagline from "./Tagline";

import React from 'react';

import {Link} from 'react-scroll';


export default function Splash(){
  return(
      <div id="hero-grid">
        <div class="titleWrap">
          <h1 class="title">Hey, I'm Jack</h1>
        </div>
        <div class="infoWrap">
          <Tagline />
        </div>
        <Link activeClass="active" to="aboutSection" spy={true} smooth={true} duration={1000}>
          <div class="arrow"></div>
        </Link>
      </div>
    );
}