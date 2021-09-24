import gitLogo from './images/github.png'


export default function Projects(){
  return(
  <div class="col-sm-12 container project-section">
      <div class="row">
        <h1 class="sectionHeader"> Projects </h1> 
      </div>
      <div class="row project-wrap">
        {/*<a href="hubMgmtInterface/hub.html">*/}
          <div class="project-card col-sm-2">
            <div class="project"> 
              <h5>House Grocery &amp; Bill Management App</h5>

            </div>
          </div>
        {/*</a>*/}
        {/*<a href="" onclick="return false;">*/}
        <div class="project-card col-sm-2 blocked">
          <div class="project"> 
            <h5>The Emergency Exit Band Website</h5>
          </div>
        </div>
        {/*</a>*/}

        {/*<a href="" onclick="return false;">*/}
          <div class="project-card col-sm-2 blocked">
            <div class="project"> 
              <h5>Some Other Project</h5>
            </div>
          </div>
        {/*</a>*/}
        {/*<a href="" onclick="return false;">*/}
          <div class="project-card col-sm-2 blocked">
            <div class="project"> 
              <h5>And Another Project</h5>
            </div>
          </div>
        {/*</a>*/}
        {/*<a href="https://github.com/jackcdavey">*/}
          <div class="project-card col-sm-2 blocked">
            <div class="project">
              <img src={gitLogo} id="githubimg"class="img-fluid rounded center-block" alt="GitHub Logo"></img>
              <h5> GitHub </h5>
            </div>

          </div>
        {/*</a>*/}
      </div>
    </div>
    );
}