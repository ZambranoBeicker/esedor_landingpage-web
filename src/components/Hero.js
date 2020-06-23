import React from 'react';
import HeroInfo from "./utilities/HeroInfo";
import HeroForm from "./utilities/HeroForm";
import Group3d from "./utilities/Group3d";
import {Header} from "./Header";


const Hero = () => {

    return(
        <section className="overflow-hidden relative pt-24 sm:flex sm:pb-24 lg:py-0 bg-blue-third duration-200 lg:pt-10" id="hero">
            <Header />
              <Group3d />
            <div className='container flex flex-wrap items-center mt-10 m-auto hero__main-content-big-desktop'>
              <HeroInfo />
              <div className="mt-10 mx-auto relative my-index sm:ml-5 md:mr-0 md:ml-10 hero__form-container--big-desktop">
                <h4 className="text-bold semibig hidden lg:block mb-8 px-16">Solicita más información</h4>
                <HeroForm formClass="bg-black min-h-0 py-1 px-4 rounded-t-md" buttonId="hero-formButton"/>
              </div>
            </div>
        </section>
    )
}

export default Hero;
