import React from 'react';
import {InfoParagraph,ArrowCta,HeroForm} from './Hero.js';


const Projects = () =>{

  if(window.innerWidth >= 768){

    
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

          <div className="my-56 text-center">
            <h2 className="text-6xl">¿Listo para conocernos?</h2>
            <div className="my-20">
              <a href="#this" className="text-white opacity-75 hover:opacity-100 duration-200 px-12 py-6 mx-auto rounded-md bg-blue">CONTÁCTANOS</a>
            </div>
          </div>

        </React.Fragment>
      )
    }else{

      return(

        <React.Fragment>
          <section className="min-h-0 px-4 container-none">
              <div className="w-full">
                <img className="rounded-t-md" src="images/projects.png" alt="Proyectos"/>
              </div>

            <div className="bg-black p-4 rounded-b-md">
              <div className="text-white">
                <h4 className="text-sm">Proyectos selecionados</h4>
                <h2 className="text-semibig mt-4">NIUBIZ</h2>
                <InfoParagraph
                  info="Est occaecat cillum sit dolor anim esse elit adipisicing pariatur cillum ex aliquip esse aute. Velit tempor nisi qui cupidatat aliquip veniam id laborum cupidatat et. Incididunt fugiat aliquip et ut fugiat enim."
                  textClass="text-xs max-w-full"
                  containerClass="pr-4 my-5 mr-auto"
                  />
              </div>
              <div className="mt-5 ml-auto text-white w-40 text-xs text-bold text-right">
                <a href="#this" className="border-b border-black hover:border-white">VISITAR WEB</a>
              </div>
            </div>
          </section>

          <div className="w-full pt-10 pb-6 mt-10 bg-blue-secondary">
            <h4 className="text-smibig ml-8 mt-4 mb-12">Estás listo para vender por tu tienda virtual?</h4>
              <HeroForm formClass="bg-black mt-5 md:hidden min-h-0 mx-4 py-1 rounded-t-md"/>
              <div className="w-full px-4">
                <ArrowCta title="CONOZCÁMONOS" src="images/arrow_meet.png" containerClass="bg-blue py-1 pl-2 w-full rounded-b-md" adapt={true} info='hñlsdkvasd' cta="ml-1" textClass=' hidden'/>
              </div>
          </div>

        </React.Fragment>
      )

}
}

export default Projects
