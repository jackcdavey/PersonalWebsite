import React from 'react';
import './App.css';
import { Wrapper, Title } from './styles/stylesheet';
import AboutMe from './components/AboutMe';
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {

  return (
    <div className="App">
      <AboutMe />
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>

    </div>
  );
}

export default App;
