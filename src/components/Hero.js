import React from 'react';
import { Link } from 'react-router-dom';

const DynamicFlex = (props)=>{

    let container = null;
    if(props.flex){
        container = <div className="flex my-2 max-w-full">{props.children}</div>
    }else{
        container = <div className="block my-2 max-w-full">{props.children}</div>
    }


    return(
        <div>
          {container}
        </div>
    )
}

const InfoParagraph = ({info,textClass = 'text-xs sm:text-sm sm:pr-4 md:text-lg lg:text-xl xl:text-2xl md:ml-2 text-gray-secondary', containerClass = 'w-11/12 md:w-10/12 my-3 md:my-5'})=>{
    return(

        <div className={containerClass}>
            <p className={textClass}>{info}</p>
        </div>
    )
}

const HeroInfo = (props)=>{
    return (
        <div className="ml-4 md:ml-16 md:mr-20 md:w-8/12 lg:w-7/12 sm:pr-4">
            <h1 className="text-2xl font-semibold sm:mb-4 lg:mb-8 sm:text-3xl lg:text-5xl xl:text-6xl sm:font-medium w-full">Estás listo para vender por tu tienda virtual?</h1>
            <InfoParagraph info="Creamos soluciones ecommerce en todas las industrias para  empresas grandes, pequeñas y startups."/>
        </div>
    )
}

const ArrowCta = ({title,adapt,ctaClass = '',src,containerClass = 'bg-black rounded-md',textClass = ''})=>{
    let titleImg;
    // const titulo = <h5 className={"mr-0 " + ctaClass}>{title}</h5>

    const titulo = <Link className={"mr-0 " + ctaClass} to="/gracias">{title}</Link>


      titleImg = (
        <React.Fragment>
            {titulo}
            <div className="arrow-cta__container ml-auto mr-5">
                <img className="arrow-cta__arrow-image" src={src} alt={src && "Arrow"}/>
            </div>
        </React.Fragment>
      )


    return (
        <div className={"arrow-container pt-1 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
            <DynamicFlex flex={adapt}>
                {titleImg}
            </DynamicFlex>
        </div>
        )
    }

const HeroForm = ({formClass, containerForm = "form-container"}) =>{

const data = [
    {
      label:'Nombre',
    },
    {
      label:'Correo',
    },
    {
      label:'Celular',
    },
    {
      label:'Mensaje',
    }
  ]

  return(
    <div className={"px-4 " + containerForm}>
      <form className={formClass + " sm:w-56"}>
        {data.map(({label},index)=>{

          return(
            <div key={index * (10 * 2)} className="input-container relative container-none my-4">
              <label className="absolute text-xs">{label}</label>
              <input className="block mx-auto rounded-t-md w-11/12 h-12 text-xs pl-2 mt-6 pt-4"/>
            </div>
          )
        })}
      </form>
        <ArrowCta title="CONOZCÁMONOS" src="images/arrow_meet.png" containerClass="bg-blue py-2 pt-2 pl-5 sm:w-56 rounded-b-md" adapt={true} cta="ml-1"/>
    </div>
  )
}

const Hero = () =>{

    return(
        <section className="min-h-0 sm:flex sm:pt-16 sm:pb-24 xl:pt-16 lg:h-screen bg-blue-third">
            <HeroInfo />
            <div>
              <HeroForm formClass="bg-black min-h-0 sm:mx-4 py-1 px-2 rounded-t-md"/>
            </div>
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph,HeroForm}
