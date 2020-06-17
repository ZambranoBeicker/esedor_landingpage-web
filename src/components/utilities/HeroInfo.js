import React from "react";
import InfoParagraph from "./InfoParagraph";
import ArrowCta  from "./ArrowCta";

const HeroInfo = (props)=>{
    return (
        <div className="ml-4 relative my-index sm:w-6/12 md:ml-6 md:mr-10 lg:ml-16 md:w-6/12 lg:w-7/12 sm:pr-10 md:pr-0 lg:pl-2 lg:pr-40 hero_info-container">
            <h1 className="text-2xl font-semibold sm:mb-4 lg:mt-32 lg:mb-8 sm:text-3xl sm:font-medium w-full hero_title">Estás listo para vender por tu tienda virtual?</h1>
            <InfoParagraph info="Creamos soluciones ecommerce en todas las industrias para  empresas grandes, pequeñas y startups."/>
            <ArrowCta  title="Llámanos por" containerClass="rounded-md hidden md:flex lg:w-32 mx-auto md:mx-0 sm:ml-6 my-10 bg-blue text-shadow " ctaClass="mr-auto" adapt={false} route="llamada"/>

        </div>
    )
}

export default HeroInfo;
