import React, { useRef } from "react";
import {ScrollArrow} from "../App.js";



export default function Splash(){
  return(
      <div id="hero-grid">
        <div class="titleWrap">
          <h1 class="title">Hey, I'm Jack</h1>
        </div>
        <div class="infoWrap">
          <p class="info">Developer, Designer, and Photographer</p>
        </div>
        <ScrollArrow/>
      </div>
    );
}