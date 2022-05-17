import styled from "styled-components";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { COLORS } from "../styles/colors";

//let fonts = require("https://use.typekit.net/pzl7jlg.css");

export const AppContainer = styled.div``;

export const SplashWrap = styled.section`
  height: 90vh;
  background: ${COLORS.lightShade};
  opacity: 0.5;
  padding-left: 10vw;
  padding-top: 10vw;
`;

export const SplashTitle = styled.h1`
  font-size: 5em;
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
`;

export const SectionTitle = styled.h1`
  text-align: left;
  width: 100%;
  padding: 1%;
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
`;

export const ProjectCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImageWrap = styled.div`
display: flex;
justify - content: center;
align - items: flex - start;
padding: 3 %;
margin - bottom: 15px;
`;

export const FramerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(10px);
`;

export const FramerObject = styled.div`
  background: black;
  border-radius: 75px;
  width: 150px;
  height: 150px;
`;
