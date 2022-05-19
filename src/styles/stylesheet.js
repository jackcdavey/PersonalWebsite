import styled from "styled-components";
import { COLORS } from "../styles/colors";

import './fonts.css';

export const AppContainer = styled.div``;

export const SplashWrap = styled.section`
  height: 90vh;
  background: ${COLORS.lightShade};
  opacity: 0.5;
  padding-left: 10vw;
  padding-top: 10vw;
`;

export const SplashTitle = styled.h1`
  font-size: 7em;
  text-align: left;
  color: ${COLORS.mainBrand};
`;

export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;
  z-index: 10;
  min-height: 30vh;
  margin-right: 15vw;
`;

export const TaglineTxt = styled.h2`
  font-size: 2em;
  font-family: minion-pro-condensed-caption, serif;
  text-align: left;
  color: ${COLORS.mainBrand};
`;

export const SectionTitle = styled.h1`
  text-align: left;
  width: 100%;
  padding-left: 3%;
  padding-top: 3%;
  font-family: jeanne-moderno-geometrique, sans-serif;
  color: ${COLORS.mainBrand};
`;

export const SectionRow = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 1%;
`;

export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3%;
  margin: 3%;
  border-radius: 20px;
  background: ${COLORS.lightShade};
  transition: 0.2s;


  :hover {
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
  }
`;


export const ProfileImageWrap = styled.div`
display: flex;
flex-direction: column;
padding: 3%;
`;

export const ResumeDownload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 3%;
  margin: 5%;
  margin-top: 5vh;
  margin-bottom: 15px;
  border-radius: 20px;
  background: ${COLORS.mainBrand};
  transition: 0.2s;
  text-align: center;
  font-family: minion-pro-condensed-caption, serif;
  color: ${COLORS.lightShade};
  font-size: 1em;

  :hover {
  box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.9);
  }
`;



export const FramerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(20px);
  background: ${COLORS.lightShade};
`;

export const FramerObject = styled.div`
  background: black;
  border-radius: 75px;
  width: 150px;
  height: 150px;
`;

export const ProjectCard = styled.div`
background: ${COLORS.mainBrand};
  /* Eventually add custom colors for each project */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  width: 30vw;
  height: 30vh;
  border-radius: 15px;
  margin-bottom: 10%;
  margin-right: 3vw;

  :hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.9);
  }
`;

export const ProjectTitle = styled.h2`
  font-family: jeanne-moderno-geometrique, sans-serif;
  font-size: 1.5em;
  color: ${COLORS.lightShade};
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left:1vw;
  padding-right:1vw;
`;

export const ProjectImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  padding: 10%;
`;

export const ProjectLink = styled.a`
  align-items: center;
  justify-content: center;
  text-decoration: none;
  `;


