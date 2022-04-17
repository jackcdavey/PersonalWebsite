import gitLogo from '../assets/images/github.png'


export default function Projects() {
  return (
    <div id="projectSection" class="col-sm-12 container project-section">
      <div class="row">
        <h1 class="sectionHeader"> Projects </h1>
      </div>
      <div class="row project-wrap">
        {/*         
        <div class="project-card col-sm-2">
          <a href={"projects/HubHouseMgmt/index.html"}>
            <div class="project">
              <h5>House Grocery &amp; Bill Management App</h5>
            </div>
          </a>
        </div>
        <div class="project-card col-sm-2 blocked">
          <a href={""}>
            <div class="project">
              <h5>The Emergency Exit Band Website</h5>
            </div>
          </a>
        </div>

        <div class="project-card col-sm-2 blocked">
          <a href={""}>
            <div class="project">
              <h5>ReactJS Minigames</h5>
            </div>
          </a>
        </div> */}
        <div class="project-card col-sm-2 blocked">
          <a href={"https://github.com/jackcdavey/WageWizardApp"}>
            <div class="project">
              <h4>Wage Wizard</h4>
            </div>
          </a>
        </div>
        <div class="project-card col-sm-2 blocked">
          <a href={"https://github.com/jackcdavey"}>
            <div class="project" id="gitHubCard">
              <img src={gitLogo} id="githubimg" class="img-fluid rounded center-block" alt="GitHub Logo"></img>
              <h5 > GitHub </h5>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
