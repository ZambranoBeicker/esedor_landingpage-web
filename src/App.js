import React, { useState } from 'react';
import './App.css';
import {Header} from './components/Header.js';
import Hero from './components/Hero.js';
import OurServices from './components/OurServices.js';
import Steps from './components/Steps.js';
import Brands from './components/Brands.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import ModalForm from './components/utilities/ModalForm.js';


const ShowModal = React.createContext()

  function App() {

  const [active, setActive] = useState('hidden')

  return (
    <React.Fragment>
      <Header />
        <Hero />
      <ShowModal.Provider value={setActive}>
        <ModalForm display={active}/>
        <OurServices />
        <Steps />
      </ShowModal.Provider>
      <Brands />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export {App,ShowModal};
