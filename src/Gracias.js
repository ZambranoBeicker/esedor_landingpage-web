import React from "react";
import ArrowCta from "./components/utilities/ArrowCta";
import Group3d from "./components/utilities/Group3d";


const Gracias = ()=>{

  return(
    <div className="overflow-hidden relative w-full my-index bg-blue-third px-4 md:pt-20 xl:pl-48 h-screen">
      <Group3d cart='cart-gracias' polygon="polygon-gracias" mushroom="mushroom-gracias"/>
      <div className=" relative my-index sm:ml-32 sm:w-8/12 md:w-8/12 md:px-0 md:ml-48 pt-10">
        <h1 className="mb-4 md:mb-0 text-4xl md:text-5xl lg:text-6xl font-medium">¡Muchas gracias!</h1>
        <h3 className="text-lg sm:text-xl font-light md:text-2xl lg:text-4xl text-gray-secondary mb-5">Recibimos tu mensaje con éxito</h3>
        <p className="text-sm md:text-base text-gray-second mb-4 lg:mb-20">Nos pondremos en contacto muy pronto para ayudarte en lo que necesitas. Te invitamos a seguir explorando más de lo que hacemos</p>
      </div>

      <ArrowCta  title="Seguir explorando" containerClass="ml-0 relative my-index sm:mt-16 rounded-md w-40 lg:w-2/12 my-10 bg-blue sm:ml-32 md:ml-48 text-shadow " ctaClass="mx-auto" adapt={true} route="gracias"/>
    </div>
  )
}

export default Gracias;
