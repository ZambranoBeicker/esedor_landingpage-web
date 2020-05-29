import React from 'react';
import {InfoParagraph,ArrowCta,HeroForm} from './Hero.js';


const Projects = () =>{
    
      return (

        <React.Fragment>
          <section className="min-h-0 container-none flex relative">

            <div className="bg-black w-11/12 px-16 pt-10">
              <div className="text-white w-1/3">
                <h4 className="text-sm">Proyectos selecionados</h4>
                <h2 className="text-5xl mt-5">NIUBIZ</h2>
                <InfoParagraph
                  info="Est occaecat cillum sit dolor anim esse elit adipisicing pariatur cillum ex aliquip esse aute. Velit tempor nisi qui cupidatat aliquip veniam id laborum cupidatat et. Incididunt fugiat aliquip et ut fugiat enim."
                  textClass="text-sm leading-8 max-w-full"
                  containerClass="pr-4 my-10 mr-auto"
                  />
              </div>
              <div className="mt-40">
                <ArrowCta title="SIGUIENTE" src="images/arrow-2.png" adapt={false} containerClass="w-3/12" ctaClass="projects__arrow-cta text-lg arrow-cta"/>
              </div>
            </div>
              <div className="projects__image absolute w-8/12 right-0">
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
