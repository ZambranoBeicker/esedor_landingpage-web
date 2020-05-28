import React from 'react';
import {useState,useEffect} from 'react';
import {InfoParagraph,ArrowCta} from './Hero.js';


const showServices = (data,classes)=>{

  const services = data.map( (value,index) =>{

    return(
      <div key={index} className="w-full md:w-4/12 my-10 mr-0">
                <h3 className="text-white text-xl font-bold">{value.title}</h3>
                <InfoParagraph info={value.info} containerClass={classes.containerClass} textClass={classes.textClass}/>
            </div>
        )
    })
  const servicesResponsive = (


            <div className="w-full md:w-4/12 my-10 mr-0">
              <div className="bg-black text-center py-10 mx-auto rounded-t-md">
                <h3 className="text-white text-xl font-bold">{data[0].title}</h3>
              </div>
              <InfoParagraph info={data[0].info} containerClass="text-shadow pt-10 pb-20 px-4 border rounded-b-md" textClass="my-3 text-center text-blue"/>
            </div>
    )




    if(window.innerWidth >= 641){
      return services

    }else {
      return servicesResponsive
    }
}

const OurService = () =>{
    const [styleArrow,setStyleArrow] = useState('arrow-cta')
    const [styleContainer,setStyleContainer] = useState('fixed px-12 w-4/12 fixed-container')



    useEffect(()=>{
      window.addEventListener('scroll',handleScroll)
    },[])

    useEffect(()=>{
      if(window.scrollY < 1350){
        window.addEventListener('scroll',handleScroll)

      }

      if(window.scrollY > 1450){
        window.removeEventListener("scroll",handleScroll)

      }
    })

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

      if(window.scrollY < 100){
        setStyleArrow('arrow-cta')
        setStyleContainer('fixed px-12 w-4/12 fixed-container')


      }else if(window.scrollY > 100 && window.scrollY < 1050){
        setStyleArrow('arrow-contract contract-hover')
        setStyleContainer('fixed px-12 w-4/12 moved-container')
      }else if(window.scrollY > 1050 && window.scrollY < 1350 ){
        setStyleContainer('w-4/12 mx-auto mt-20 px-8 insert-out')



      }else if(window.scrollY > 1350){
        setStyleContainer('w-4/12 mx-auto mt-20 px-3 insert-in')

        setStyleArrow('arrow-contract')
      }else{
        setStyleContainer('fixed w-4/12 px-12')

      }
    }




    return (
        <React.Fragment>
            <section className="block sm:bg-black px-4 py-5 md:pl-16 pt-10 pb-32 w-full">
                <div className="text-white mb-10">
                    <h2 className="text-2xl md:text-5xl">Nuestros Servicios</h2>
                </div>
                <div className="md:flex md:flex-wrap">
                    {showServices(data,classes)}
                </div>
            </section>
            <div className="mx-auto my-40 w-9/12 text-center">
                <h2 className="text-5xl">Aprendemos lo antes posible <br/>las lecciones que nos permitirán crear <br/>una solución para tu negocio.</h2>
                <div className={styleContainer}>
                  <ArrowCta  title="CONOZCÁMONOS" containerClass={"w-11/12 py-2 " + styleArrow} ctaClass="ml-5" src="images/arrow_meet.png" info="Solicite una evaluación digital gratuita y agenda una videollamada." adapt={true}/>
                </div>

            </div>
        </React.Fragment>
    )
}

export default OurService;
