import React from 'react';
import {InfoParagraph,ArrowCta} from './Hero.js';


const showServices = (data,classes)=>{

  const services = data.map( (value,index) =>{

    return(
      <div key={index} className=" w-full md:w-4/12 my-10 mr-0">
                <h3 className="text-white md:text-lg lg:text-xl font-bold">{value.title}</h3>
                <InfoParagraph info={value.info} containerClass={classes.containerClass} textClass={classes.textClass}/>
            </div>
        )
    })
  const servicesResponsive = (


            <div className="w-full md:w-4/12 my-10 mr-0 ">
              <div className="bg-black text-center py-10 mx-auto rounded-t-md">
                <h3 className="text-white text-xl sm:text-2xl font-bold">{data[0].title}</h3>
              </div>
              <InfoParagraph info={data[0].info} containerClass="text-shadow pt-10 pb-20 px-4 border rounded-b-md" textClass="my-3 text-sm sm:text-base text-center text-blue"/>
            </div>
    )




    if(window.innerWidth >= 768){
      return services

    }else {
      return servicesResponsive
    }
}

const OurService = () =>{

    const data = [
        {
            title: "Ecommerce y móvil app",
            info: "Omnicanalidad, recorrido de cliente, pasarela de pago, configuración y seguimiento de funnel"
        },
        {
            title: "Experiencia de usuario",
            info: "Investigación, definición de experiencia, diseño de interacción y diseño visual (UI)."
        },
        {
            title: "Desarrollo y diseño web",
            info: "Páginas visuales, código creativo, frontend, diseño multidispositivo"
        },
        {
            title: "Nuevas realidades digitales",
            info: "Realidad aumentada(AR), realidad virtual(VR), Goby"
        },
        {
            title: "Fabrica de software",
            info: "Desarrollo Andriod y iOS, Sistemas ERP y CRM, CI/CD - Despliegue e integración continua"
        },
        {
            title: "Sistemas de diseño",
            info: "Auditoria UI, guía de estilos, componentes y repositorio online"
        },
    ]

    const classes = {
        textClass:" lg:text-sm w-11/12",
        containerClass:"text-white my-3"
    }

    return (
        <React.Fragment>
            <section className="block md:bg-black px-4 py-5 md:pl-16 pt-10 pb-32 w-full">
                <div className="text-white mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl">Servicios para tu<br></br> tienda virtual</h2>
                </div>
                <div className="md:flex md:flex-wrap">
                    {showServices(data,classes)}
                </div>
            </section>
            <div className="md:mx-auto md:my-40 md:w-9/12 w-full px-4 md:px-0 text-center">
                <h2 className="text-semibig sm:text-3xl md:text-4xl xl:text-5xl">Te ayudamos a entender tu ecommerce con un enfoque omnicanal y te demostramos como funciona nuestra formula.</h2>
                <div className="arrows min-w-0 flex">
                  <div className="w-4/12 xl:w-4/12 ml-auto hidden lg:block mr-8">
                    <ArrowCta  title="OMITIR LOS PASOS" src="images/omitir.png" containerClass="md:w-11/12 rounded-md px-2 my-20 py-3 pt-3 text-shadow-second" ctaClass="ml-5 text-blue" adapt={true}/>
                  </div>
                  <div className="min-w-0 md:w-6/12 lg:w-4/12 xl:w-4/12 mx-auto lg:mr-auto lg:ml-8">
                    <ArrowCta  title="CONOZCÁMONOS" containerClass="md:w-11/12 rounded-md my-20 bg-blue px-2 py-3 pt-3 text-shadow " ctaClass="ml-5 md:mr-5" src="images/arrow_meet.png" adapt={true}/>
                  </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default OurService;
