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

const InfoParagraph = ({info,textClass = 'text-2xl ml-2', containerClass = 'w-10/12 my-5'})=>{
    return(
        <div className={containerClass}>
            <p className={textClass}>{info}</p>
        </div>
    )
}

const HeroInfo = (props)=>{
    return (
        <div className="ml-16 mr-20 w-8/12 pr-4">
            <h1 className="text-6xl font-medium w-full">Estás listo para ser parte de la nueva era digital?</h1>
            <InfoParagraph info="Creamos soluciones en todas las industrias para empresas grandes, pequeñas y startups"/>
        </div>
    )
}

const ArrowCta = ({title,info,adapt,ctaClass,src,containerClass})=>{
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
const text = <p className="ml-5 text-sm max-w-full text-left leading-loose">{info}</p>

    return (
        <div className={"arrow-cta bg-black text-white mr-5 mt-8 rounded-md " + containerClass}>
            <DynamicFlex flex={adapt}>
                {titleImg}
            </DynamicFlex>
            {text}
        </div>
        )
}

const Hero = () =>{

    return(
        <section className="h-screen flex pt-24 mb-32">
            <HeroInfo />
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph}
