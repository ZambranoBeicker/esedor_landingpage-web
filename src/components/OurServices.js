import React from 'react';
import {useState} from 'react';
import {InfoParagraph,ArrowCta} from './Hero.js';


const showServices = (data,classes)=>{

    const services = data.map( (value,index) =>{
        return(
            <div key={index} className="w-4/12 my-10 mr-0">
                <h3 className="text-white text-xl font-bold">{value.title}</h3>
                <InfoParagraph info={value.info} containerClass={classes.containerClass} textClass={classes.textClass}/>
            </div>
        )
    })
    return services
}

const OurService = () =>{
    const [style,setStyle] = useState('arrow-cta')

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
        textClass:"text-sm w-11/12",
        containerClass:"text-white my-3"
    }

    const handleScroll = ()=>{

      console.log('\n' + window.scrollY)
      if(window.scrollY === 0){
        console.log('We are in the Top')

        setStyle('arrow-cta')
      }else{

        setStyle('arrow-contract')
      }
      console.log(style)
    }

    window.addEventListener('scroll',handleScroll)



    return (
        <React.Fragment>
            <section className="block bg-black pl-16 pt-10 pb-32 w-full">
                <div className="text-white mb-10">
                    <h2 className="text-5xl">Nuestros Servicios</h2>
                </div>
                <div className="flex flex-wrap">
                    {showServices(data,classes)}
                </div>
            </section>
            <div className="mx-auto my-40 w-9/12 text-center">
                <h2 className="text-5xl">Aprendemos lo antes posible <br/>las lecciones que nos permitirán crear <br/>una solución para tu negocio.</h2>
                <div className="fixed-container fixed w-4/12 px-12">
                  <ArrowCta  title="CONOZCÁMONOS" containerClass={"w-11/12 py-2 " + style} ctaClass="ml-5" src="images/arrow_meet.png" info="Solicite una evaluación digital gratuita y agenda una videollamada." adapt={true}/>
                </div>

            </div>
        </React.Fragment>
    )
}

export default OurService;
