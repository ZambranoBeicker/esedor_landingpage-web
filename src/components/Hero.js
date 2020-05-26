import React from 'react';

const DynamicFlex = (props)=>{

    let container = null;
    if(props.flex){
        container = <div className="flex my-4 max-w-full">{props.children}</div>
    }else{
        container = <div className="block my-4 max-w-full">{props.children}</div>
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
        <div className="mx-20 w-7/12">
            <h1 className="text-6xl w-11/12">Estás listo para ser parte de la nueva era digital?</h1>
            <InfoParagraph info="Creamos soluciones en todas las industrias para empresas grandes, pequeñas y startups"/>
        </div>
    )
}

const ArrowCta = (props)=>{

    const title = <h4>{props.title}</h4>
    const titleImg = (
        <React.Fragment>
            {title}
            <div className="arrow-cta__container ml-auto">
                <img className="arrow-cta__arrow-image" src="images/arrow_meet.png" alt="Arrow"/>
            </div>
        </React.Fragment>

    )
const info = <p className="max-w-full">{props.info}</p>

    return (
        <div className="arrow-cta bg-black text-white w-3/12 ml-auto mr-20 mt-8 pt-5 pb-2 px-5 h-40 rounded-md">
            <DynamicFlex flex={true}>
                {titleImg}
            </DynamicFlex>
            {info}
        </div>
        )
}

const Hero = () =>{

    return(
        <section className="h-screen flex pt-32">
            <HeroInfo />
            <ArrowCta  title="CONOZCÁMONOS" info="Solicite una evaluación de digital gratuita y agenda una videollamada"/>
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph}
