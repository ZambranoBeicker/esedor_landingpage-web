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

  const [active, setActive] = useState('hide')
  const [activeApp, setActiveApp] = useState('')
  const contexts = {
    active:setActive,
    app: setActiveApp,
  }
  return (
    <React.Fragment>

      <ShowModal.Provider value={contexts}>
      <ModalForm display={active}/>
      <div className={activeApp + " duration-200"}>
      <Header />
        <Hero />
        <OurServices />
        <Steps />
      <Brands />
      <Projects />
      <Footer />
      </div>
      </ShowModal.Provider>
    </React.Fragment>
  );
}

export {App,ShowModal};
