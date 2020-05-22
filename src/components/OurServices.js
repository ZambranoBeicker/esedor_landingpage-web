import React from 'react';
import {InfoParagraph} from './Hero.js';


const showServices = (data,classes)=>{
    
    const services = data.map( (value,index) =>{
        return(
            <div key={index} className="w-4/12 my-10">
                <h3 className="text-white text-xl font-bold">{value.title}</h3>
                <InfoParagraph info={value.info} containerClass={classes.containerClass} textClass={classes.textClass}/>
            </div>
        )
    })
    return services
}

const OurService = () =>{

    const data = [
        {
            title: "Nuevas realidades digitales",
            info: "lorem ipsum consecuenti"
        },
        {
            title: "Experiencia de usuario",
            info: "Investigación, definición de experiencia y diseño de interacción."
        },
        {
            title: "Desarrollo y diseño web",
            info: "Páginas visuales, código creativo, frontend, diseño multidispositivo"
        },
        {
            title: "Ecommerce y móvil app",
            info: "Omnicanalidad, recorrido de cliente, pasarela de pago, configuración y seguimiento de funnel."
        },
        {
            title: "Fabrica de software",
            info: "Desarrollo Andriod y iOS, Sistemas ERP      CRM - Gestión de relaciones con clientes    CI/CD - Despliegue e integración continua."
        },
        {
            title: "Sistemas de diseño",
            info: "Auditoria UI, guía de estilos, componentes y repositorio online"
        },
    ]

    const classes = {
        textClass:"text-sm w-9/12",
        containerClass:"text-white my-3"
    }
    
    return (
        <React.Fragment>
            <section className="services block bg-black px-16 pt-10 pb-20 w-full">
                <div className="text-white">
                    <h2 className="text-5xl">Nuestros Servicios</h2>
                </div>
                <div className="flex flex-wrap">
                    {showServices(data,classes)}
                </div>
                {/* <div className="text-white">
                    <p className="text-sm">Realidad aumentada(AR), realidad virtual(VR), Goby</p>
                </div>             */}
                <div className="mx-auto my-40 w-6/12 text-center">
                    <h2 className="text-4xl">Aprendemos lo antes posible <br/>las lecciones que nos permitirán crear <br/>una solución para tu negocio.</h2>
                </div>
            </section>
        </React.Fragment>
    )
}

export default OurService;