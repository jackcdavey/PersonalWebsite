import jackProfile from './images/me.jpg'

export default function About(){
  return(
  <div class="col-sm-12 container about-section">
      <div class="row">
        <h1 class="sectionHeader"> About Me </h1>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div id="aboutMePicWrap">
            <img src={jackProfile} id="aboutMePic" class="img-fluid rounded center-block" alt="Jack Davey"></img>
          </div>
        </div>

        <div class="col-sm-9" id="introFacts">
          <div class="row">
            <div class="col-sm-12">
              <div class="row">
                <h3>Intro</h3>
                <p>Currently pursuing a B.S. in Web Design and Engineering with a minor in Innovation, Design Thinking, and the Entrepreneurial Mindset at Santa Clara University. Having spent my entire life in California, I grew up with an immense appreciation for the beauty and simplicity of nature. I love to tinker, design, and create, but when I’m not working away at my desk, you’ll likely find me at the driving range or exploring the mountains with my hammock and camera. </p>
                <br></br>
                <a href="ResumeMar2021.jpg" download="resume"><b> Download my resume here!</b></a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <h3>Technologies</h3>
              </div>
              <div class="row">
                <div class="box">
                  <div class="chip">JavaScript</div>
                  <div class="chip">ReactJS</div>
                  <div class="chip">HTML5</div>
                  <div class="chip">CSS3</div>
                  <div class="chip">Java</div>
                  <div class="chip">C</div>
                  <div class="chip">PHP</div>
                  <div class="chip">SQL</div>
                  <div class="chip">Bootstrap 3</div>
                </div>
              </div>
            </div>
            <div id="skillOverview" class="col-sm-6">
              <div class="row">
                <h3>Skills</h3>
              </div>
              <div class="row">
                <div class="box">
                  <div class="chip">Creative Cloud</div>
                  <div class="chip">UI / UX</div>
                  <div class="chip">SolidWorks</div>
                  <div class="chip">Professional Writing</div>
                  <div class="chip">Leadership</div>
                  <div class="chip">Organization</div>
                  <div class="chip">Design</div>
                  <div class="chip">Wiring</div>
                  <div class="chip">Soldering</div>
                  <div class="chip">PC Assembly</div>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
    );
}