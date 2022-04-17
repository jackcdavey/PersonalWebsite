import jackProfile from '../assets/images/me.jpg'
import resume from '../assets/images/ResumeApril2022.png'

import React, { Component } from 'react'

export default function About() {
  return (
    <div id="aboutSection" className="col-sm-12 container about-section">
      <div className="row">
        <h1 className="sectionHeader"> About Me </h1>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div id="aboutMePicWrap">
            <img src={jackProfile} id="aboutMePic" className="img-fluid rounded center-block" alt="Jack Davey"></img>
          </div>
        </div>

        <div className="col-sm-9" id="introFacts">
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <h3>Intro</h3>
                <p>Currently pursuing a B.S. in Web Design and Engineering with a minor in
                  Innovation, Design Thinking, and the Entrepreneurial Mindset at Santa Clara University.
                  Having spent my entire life in California, I grew up with an immense appreciation for
                  the beauty and simplicity of nature. I love to tinker, design, and create, but when I’m
                  not working away at my desk, you’ll likely find me at the driving range or exploring
                  the mountains with my hammock and camera. </p>
                <br></br>

                <a href={resume} download={'resume.png'}><b> Download my resume here!</b></a>
              </div>
            </div>
          </div>

          {/*Maybe implement some interactivity with these in the futre,
          like slow floating movement & hover action*/}

          {/* Also switch these from a copy/paste mess to an array ffs */}

          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <h3>Technologies</h3>
              </div>
              <div className="row">
                <div className="box">
                  <div className="chip">React Native</div>
                  <div className="chip">ReactJS</div>
                  <div className="chip">JavaScript</div>
                  <div className="chip">Java</div>
                  <div className="chip">HTML</div>
                  <div className="chip">CSS</div>
                  <div className="chip">C</div>
                  <div className="chip">PHP</div>
                  <div className="chip">SQL</div>
                  <div className="chip">Ruby</div>
                </div>
              </div>
            </div>
            <div id="skillOverview" className="col-sm-6">
              <div className="row">
                <h3>Skills</h3>
              </div>
              <div className="row">
                <div className="box">
                  <div className="chip">Creative Cloud</div>
                  <div className="chip">Professional Writing</div>
                  <div className="chip">UI / UX</div>
                  <div className="chip">SolidWorks</div>
                  <div className="chip">Graphic Design</div>
                  <div className="chip">Electronics</div>
                  <div className="chip">PC Assembly</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}