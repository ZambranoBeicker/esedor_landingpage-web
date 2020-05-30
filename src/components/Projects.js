import React from 'react';
import {InfoParagraph,HeroForm} from './Hero.js'; /*Acomodar el padding-left de los elementos en tamaño 'md'*/


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

          <div className="w-full md:flex lg:justify-around pt-10 pb-6 lg:py-20 bg-blue-secondary">
            <h4 className="w-9/12 mx-auto md:w-6/12 text-smibig mt-4 mb-12 sm:text-2xl md:text-3xl lg:text-5xl lg:mx-auto lg:w-6/12 xl:ml-auto xl:mr-0 xl:text-left xl:pl-24 xl:pr-24 xl:w-5/12 sm:w-8/12">Estás listo para vender por tu tienda virtual?</h4>
              <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md " containerForm="form-container md:px-0 mx-auto lg:w-auto lg:ml-0 lg:mr-16 sm:w-56"/>
          </div>

        </React.Fragment>
      )



}

export default Projects
