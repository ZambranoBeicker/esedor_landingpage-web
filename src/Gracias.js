import React from "react";
import ArrowCta from "./components/utilities/ArrowCta";
import Group3d from "./components/utilities/Group3d";


const Gracias = ()=>{

  return(
    <div className="overflow-hidden relative w-full bg-blue-third px-4 lg:pl-10 h-screen">
      <Group3d />
      <div className="relative my-index md:w-8/12 sm:px-4 lg:pl-10 pt-10">
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">¡Muchas gracias!</h1>
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-secondary mb-5">Recibimos tu mensaje con éxito</h3>
        <p className="text-sm md:text-base text-gray-second mb-4 lg:mb-20">Nos pondremos en contacto muy pronto para ayudarte en lo que necesitas. Te invitamos a seguir explorando más de lo que hacemos</p>
      </div>

      <ArrowCta  title="Seguir explorando" containerClass="rounded-md w-40 lg:w-2/12 mar-l-none  my-10 bg-blue lg:ml-10 text-shadow " ctaClass="mx-auto" adapt={true} route="gracias"/>
    </div>
  )
}

export default Gracias;