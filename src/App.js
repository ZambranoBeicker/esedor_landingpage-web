import React from 'react';
import './App.css';
import {Header} from './components/Header.js';
import {Hero} from './components/Hero.js';
import OurServices from './components/OurServices.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <OurServices />
    </React.Fragment>
  );
}

export default App;
