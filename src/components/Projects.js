import React from 'react';
import {InfoParagraph} from './Hero.js';


const Projects = () =>{

  return (

    <React.Fragment>
      <section className="h-screen container-none flex relative">

        <div className="bg-black w-9/12 p-16">
          <div className="text-white w-1/3">
            <h4 className="text-sm">Proyectos selecionados</h4>
            <h2 className="text-5xl mt-5">NIUBIZ</h2>
            <InfoParagraph
              info="Est occaecat cillum sit dolor anim esse elit adipisicing pariatur cillum ex aliquip esse aute. Velit tempor nisi qui cupidatat aliquip veniam id laborum cupidatat et. Incididunt fugiat aliquip et ut fugiat enim."
              textClass="text-sm leading-8 max-w-full"
              containerClass="pr-4 my-10 mr-auto"
              />
          </div>
        </div>
          <div className="projects__image absolute w-8/12 right-0">
            <img className="min-w-0" src="images/projects.png" alt="Proyectos"/>
          </div>
      </section>

      <div className="my-56 text-center">
        <h2 className="text-6xl">¿Listo para conocernos?</h2>
        <div className="my-20">
          <a href="#this" className="text-white opacity-75 hover:opacity-100 duration-200 px-12 py-6 mx-auto rounded-md bg-blue">CONTÁCTANOS</a>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Projects
