import React from 'react';
import './App.css';
import {Header} from './components/Header.js';
import {Hero} from './components/Hero.js';
import OurServices from './components/OurServices.js';
import Steps from './components/Steps.js';
import Brands from './components/Brands.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';


function App() {

  return (
    <React.Fragment>
      <Header />
      <Hero />
      <OurServices />
      <Steps />
      <Brands />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;