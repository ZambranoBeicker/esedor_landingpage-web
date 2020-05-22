import React from 'react';
import './App.css';
import {Header} from './components/Header.js';
import {HeroPrincipal} from './components/Hero.js';


function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroPrincipal />
    </React.Fragment>
  );
}

export default App;
