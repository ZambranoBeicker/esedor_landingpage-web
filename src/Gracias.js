import React from "react";
import {ArrowCta} from "./components/Hero";

const Gracias = ()=>{

  return(
    <div className="w-6/12 px-4 lg:pl-10">
      <h1 className="text-6xl font-light mt-20 mb-8 text-gray-secondary">Tu consulta fue enviada con éxito</h1>
      <p className="text-gray-second ml-1">Pronto uno de nuestros asesores se pondrá en contacto contigo o puedes agendar una videollamada</p>

      <ArrowCta  title="(+51)773 8905" containerClass="rounded-md lg:w-2/12 mx-auto md:mx-0 sm:ml-6 my-10 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5 text-bold" src="images/arrow_meet.png" adapt={true}/>
    </div>
  )
}

export default Gracias;
