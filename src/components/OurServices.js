import React from 'react';
import InfoParagraph from './utilities/InfoParagraph';
import ArrowCta from './utilities/ArrowCta';


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
            title: "Desarrollo a medida",
            info: "Adapta tu modelo de negocio por completo en una plataforma personalizada y escalable."
        },
        {
            title: "Desarrollo de aplicación móvil",
            info: "Lleva tu modelo de negocio al siguiente nivel desarrollando una app para iOS y Android"
        },
        {
            title: "Desarrollo de código abierto",
            info: "Integra tu tienda virtual con WooCommerce, Magento, Prestashop, Shopify, Wordpress."
        },
        {
            title: "Experiencia de cliente(CX)",
            info: "Atiende mejor a tu cliente en todo el recorrido de la compra aumentando tu funnel con un enfoque omnicanal."
        },
        {
            title: "Diseño visual web y app",
            info: "Alinea la identidad de tu marca creando tu propia guía de estilos visuales en ordenador y móvil."
        },
        {
            title: "Sistema de diseño",
            info: "Aprende cómo crecer con tu producto digital creando un repositorio virtual de UX, desarrollo y branding."
        },
    ]

    const classes = {
        textClass:" lg:text-sm w-11/12",
        containerClass:"text-white my-3"
    }

    return (
        <React.Fragment>
            <section id="services" className="block md:bg-black px-4 py-5 md:pl-16 lg:pt-4 lg:pb-32 w-full">
                <div className="text-white mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl">Servicios<br></br>ecommerce</h2>
                </div>
                <div className="md:flex md:flex-wrap">
                    {showServices(data,classes)}
                </div>
            </section>
            <div className="md:mx-auto md:my-40 md:w-9/12 w-full px-4 md:px-0 text-center">
                <h4 className="text-xl text-bolder mb-10 lg:mb-24">Nuestra Fórmula</h4>
                <h2 className="text-semibig sm:text-3xl md:text-4xl xl:text-5xl">Te ayudamos a entender tu ecommerce con un enfoque omnicanal</h2>
                <div className="arrows min-w-0 flex">
                  <div className="w-4/12 xl:w-4/12 ml-auto hidden lg:block mr-8">
                    <ArrowCta  title="OMITIR LOS PASOS" src="images/omitir.png" containerClass="md:w-11/12 rounded-md px-2 my-20 py-3 pt-3 text-shadow-second" ctaClass="ml-5 text-blue" adapt={true} route='skip'/>
                  </div>
                  <div className="min-w-0 md:w-6/12 lg:w-4/12 xl:w-4/12 mx-auto lg:mr-auto lg:ml-8">
                  <ArrowCta  title="CONVERSEMOS" id="services-button" containerClass="rounded-md mx-auto md:mx-0 sm:ml-6 mt-16 bg-blue mt-20 pb-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
                  </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default OurService;
