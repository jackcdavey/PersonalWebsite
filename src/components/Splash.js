import React, { useRef } from "react";
import {ScrollArrow} from "../App.js";
import Tagline from "./Tagline";


export default function Splash(){
  return(
      <div id="hero-grid">
        <div class="titleWrap">
          <h1 class="title">Hey, I'm Jack</h1>
        </div>
        <div class="infoWrap">
          <Tagline />
        </div>
        <ScrollArrow/>
      </div>
    );
}