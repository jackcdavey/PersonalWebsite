import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { COLORS } from '../styles/colors';

export const AppContainer = styled.div`
  
  `;


export const SplashWrap = styled.section`
  height: 100vh;
  background: ${COLORS.lightAccent};
  opacity: 0.5;
  marginTop: 0;
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


export const ProfileImageWrap = styled.div`
display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3%;
  margin-bottom: 15px;
  `;