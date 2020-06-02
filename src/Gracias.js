import React from "react";
import {ArrowCta} from "./components/Hero";

const Gracias = ()=>{

  return(
    <div className="w-full bg-blue-third px-4 lg:pl-10 h-screen">
      <div className="w-8/12 px-4 lg:pl-10">
        <h1 className="text-6xl font-medium">¡Muchas gracias!</h1>
        <h3 className="text-4xl text-gray-secondary mb-5">Recibimos tu mensaje con éxito</h3>
        <p className="text-gray-second ml-1 mb-4 lg:mb-20">Nos pondremos en contacto muy pronto para ayudarte en lo que necesitas. Te invitamos a seguir explorando más de lo que hacemos</p>
      </div>

      <ArrowCta  title="Seguir explorando" containerClass="rounded-md w-40 lg:w-2/12 mx-auto md:mx-0 sm:ml-6 my-10 bg-blue lg:ml-10 text-shadow " ctaClass="mx-auto" adapt={true} route="gracias"/>
    </div>
  )
}

export default Gracias;
