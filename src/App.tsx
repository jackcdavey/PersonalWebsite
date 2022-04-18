import React from 'react';
import './App.css';
import { Wrapper, Title, BlurBackground } from './styles/stylesheet';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import { COLORS } from './styles/colors';
import Canvas, { resizeCanvasToDisplaySize } from './components/Canvas.js';

function App() {

  const draw = (ctx: any, frameCount: number) => {
    resizeCanvasToDisplaySize(ctx.canvas);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(ctx.canvas.width / 2 * Math.sin(frameCount * 0.01) * 1.1 + ctx.canvas.width / 2, ctx.canvas.height / 2 * Math.sin(frameCount * 0.01) * 1.1 + ctx.canvas.height / 2, 150, 0, 2 * Math.PI)
    ctx.fill()
  }


  console.log(COLORS.mainBrand);
  return (
    <div className="App">
      <Splash />
      <AboutMe />
      <Canvas draw={draw} />
    </div>
  );
}

export default App;
