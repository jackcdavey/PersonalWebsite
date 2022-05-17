import React from 'react';
import './App.css';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import FramerBG from './components/FramerBG';
import { COLORS } from './styles/colors';
import Canvas, { resizeCanvasToDisplaySize } from './components/Canvas.js';
import { AppContainer } from './styles/stylesheet.js';

function App() {

  let circles: { x: number; y: number; offset: number; radius: number; color: string; }[] = [];
  let circleInfo = function () {
    return {
      x: Math.random() * window.innerWidth / 2,
      y: Math.random() * window.innerHeight / 2,
      offset: Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : 1),
      radius: Math.random() * 150 + 50,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    }
  }

  let j;
  for (let i = 0; i < window.innerWidth / 80; i++) {
    j = circleInfo();
    console.log(j);
    circles.push(j);
  }

  // const draw = (ctx: any, frameCount: number) => {
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  //   console.log('Now drawing ' + circles.length + ' circles');
  //   for (let i = 0; i < circles.length; i++) {
  //     ctx.beginPath();
  //     ctx.arc(circles[i].x * Math.sin(frameCount * Math.abs(circles[i].offset) / 500) * circles[i].offset + ctx.canvas.width / 3, circles[i].y * Math.sin(frameCount * Math.abs(circles[i].offset) / 500) * circles[i].offset + ctx.canvas.height / 3, circles[i].radius * Math.abs(Math.sin(frameCount * Math.abs(circles[i].offset) / 500) * circles[i].offset), 0, Math.PI * 2, false);
  //     ctx.fillStyle = circles[i].color;
  //     ctx.fill();
  //     ctx.closePath();
  //   }

  //   resizeCanvasToDisplaySize(ctx.canvas);
  // }


  console.log(COLORS.mainBrand);
  return (
    <AppContainer>
      <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <FramerBG />
      </div>
      {/* <Canvas draw={draw} /> ` */}

      <Splash />
      <AboutMe />
      <Projects />
    </AppContainer>
  );
}

export default App;
