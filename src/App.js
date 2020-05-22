import React from 'react';
import './App.css';
import {Header} from './components/Header.js';
import {Hero} from './components/Hero.js';
import OurServices from './components/OurServices.js';
import Steps from './components/Steps.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <OurServices />
      <Steps />
    </React.Fragment>
  );
}

export default App;
