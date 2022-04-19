import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { COLORS } from '../styles/colors';
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
export const Wrapper = styled.section`
  padding: 4em;
  height: 100vh;
  background: papayawhip;
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

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${COLORS.mainBrand};
  background-image: url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(50px);
  z-index: -1;
`;

