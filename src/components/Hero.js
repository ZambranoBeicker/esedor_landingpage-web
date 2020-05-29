import React from 'react';

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

const InfoParagraph = ({info,textClass = 'text-xs md:text-2xl md:ml-2', containerClass = 'w-11/12 md:w-10/12 my-3 md:my-5'})=>{
    return(

        <div className={containerClass}>
            <p className={textClass}>{info}</p>
        </div>
    )
}

const HeroInfo = (props)=>{
    return (
        <div className="ml-4 md:ml-16 md:mr-20 md:w-8/12 md:pr-4">
            <h1 className="text-2xl font-semibold md:text-6xl md:font-medium w-full">Estás listo para vender por tu tienda virtual?</h1>
            <InfoParagraph info="Creamos soluciones ecommerce en todas las industrias para  empresas grandes, pequeñas y startups."/>
        </div>
    )
}

const ArrowCta = ({title,info,adapt,ctaClass = '',src,containerClass = 'bg-black rounded-md',textClass = ''})=>{
    let titleImg;
    const titulo = <h5 className={"mr-0 " + ctaClass}>{title}</h5>
  
    if(info){

      titleImg = (
        <React.Fragment>
            {titulo}
            <div className="arrow-cta__container ml-auto mr-5">
                <img className="arrow-cta__arrow-image" src={src} alt="Arrow"/>
            </div>
        </React.Fragment>
      )
    }else{
      titleImg = (
        <React.Fragment>
            <div className="arrow-cta__container">
                <img className="w-full h-6" src={src} alt="Arrow"/>
            </div>
            {titulo}
        </React.Fragment>
      )

    }
const text = <p className={"ml-5 text-sm max-w-full text-left leading-loose hidden md:block" + textClass}>{info}</p>

    return (
        <div className={"text-white md:mr-5 md:mt-8 text-shadow " + containerClass}>
            <DynamicFlex flex={adapt}>
                {titleImg}
            </DynamicFlex>
            {text}
        </div>
        )
    }

const HeroForm = ({formClass}) =>{

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
    <form className={formClass}>
      {data.map(({label},index)=>{

        return(
          <div key={index * (10 * 2)} className="input-container relative container-none my-4">
            <label className="absolute text-xs">{label}</label>
            <input className="block mx-auto rounded-t-md w-11/12 h-10 text-xs pl-2 pt-4"/>
          </div>
        )
      })}
    </form>
  )
}

const Hero = () =>{

    return(
        <section className="h-screen md:flex md:pt-24 md:mb-32">
            <HeroInfo />
              <HeroForm formClass="bg-black md:hidden min-h-0 mx-4 py-1 rounded-t-md"/>
            <div className="w-full px-4">
              <ArrowCta title="CONOZCÁMONOS" src="images/arrow_meet.png" containerClass="bg-blue py-1 pl-2 w-full rounded-b-md" adapt={true} info='hñlsdkvasd' cta="mx-1" textClass=' hidden'/>
            </div>
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph,HeroForm}
