import React from 'react';
import {InfoParagraph,HeroForm} from './Hero.js';


const Projects = () =>{
    
      return (

        <React.Fragment>
          <section className="min-h-0 container-none lg:flex relative">
            <div className="w-full lg:hidden">
              <img className="rounded-t-md" src="images/projects.png" alt="Proyectos"/>
            </div>


            <div className="bg-black p-4 rounded-b-md lg:w-11/12 lg:px-16 lg:pt-10">
              <div className="text-white lg:w-1/3">
                <h4 className="text-sm">Proyectos selecionados</h4>
                <h2 className="text-semibig mt-4 lg:text-5xl lg:mt-5">NIUBIZ</h2>
                <InfoParagraph
                  info="Est occaecat cillum sit dolor anim esse elit adipisicing pariatur cillum ex aliquip esse aute. Velit tempor nisi qui cupidatat aliquip veniam id laborum cupidatat et. Incididunt fugiat aliquip et ut fugiat enim."
                  textClass="md:text-sm md:leading-8 max-w-full text-xs"
                  containerClass="md:pr-4 md:my-10 mr-auto pr-4 my-5 mr-auto"
                  />
              </div>
              <div className="hidden lg:block my-32 text-white">
                <h5 className="cursor-auto projects__arrow-cta">SIGUIENTE</h5>
                <img src="images/arrow-2.png" alt="arrow-2"/>
              </div>
              <div className="mt-5 ml-auto text-white w-40 text-xs text-bold text-right lg:hidden">
                 <a href="#this" className="border-b border-black hover:border-white">VISITAR WEB</a>
              </div>
            </div>
              <div className="projects__image hidden lg:block absolute w-8/12 right-0">
                <img className="" src="images/projects.png" alt="Proyectos"/>
              </div>
          </section>

          <div className="w-full lg:flex lg_justify-around pt-10 pb-6 mt-10 bg-blue-secondary">
            <h4 className="text-smibig ml-8 mt-4 mb-12 md:text-4xl lg:pr-4 lg:ml-32 lg:w-5/12">Estás listo para vender por tu tienda virtual?</h4>
              <HeroForm formClass="bg-black min-h-0 py-1 rounded-t-md" containerForm="form-container mx-auto md:ml-auto md:mr-40 lg:w-auto lg:mr-16 sm:w-56"/>
          </div>

        </React.Fragment>
      )
    


}

export default Projects