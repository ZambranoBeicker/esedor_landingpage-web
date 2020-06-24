import React from "react";
import InfoParagraph from "./InfoParagraph";
import ArrowCta  from "./ArrowCta";

const HeroInfo = (props)=>{
    return (
        <div className="mx-auto max-w-xs sm:max-w-none px-5 hero-info--max-370-p-0 relative my-index sm:w-6/12 md:ml-10 md:mr-10 lg:ml-16 sm:pr-10 sm:pl-2 hero-info--big-desktop">
            <h1 className="text-2xl font-semibold sm:mb-4 lg:mt-32 lg:mb-8 sm:text-3xl lg:text-5xl sm:font-medium w-full">Estás listo para vender por tu tienda virtual?</h1>
            <InfoParagraph info="Creamos soluciones ecommerce en todas las industrias para  empresas grandes, pequeñas y startups."/>
            <ArrowCta  title="Llámanos por" containerClass="rounded-md hidden md:flex lg:w-32 mx-auto md:mx-0 sm:ml-6 my-10 bg-blue text-shadow " ctaClass="mr-auto" adapt={false} route="llamada"/>

        </div>
    )
}

export default HeroInfo;
