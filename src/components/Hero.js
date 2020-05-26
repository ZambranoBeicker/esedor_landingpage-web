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
        <div className="ml-16 mr-20 w-8/12">
            <h1 className="text-6xl font-medium w-full">Estás listo para ser parte de la nueva era digital?</h1>
            <InfoParagraph info="Creamos soluciones en todas las industrias para empresas grandes, pequeñas y startups"/>
        </div>
    )
}

const ArrowCta = (props)=>{

    const title = <h4 className="mr-5">{props.title}</h4>
    const titleImg = (
        <React.Fragment>
            {title}
            <div className="arrow-cta__container ml-auto mr-5">
                <img className="arrow-cta__arrow-image" src="images/arrow_meet.png" alt="Arrow"/>
            </div>
        </React.Fragment>

    )
const info = <p className="text-sm max-w-full leading-loose">{props.info}</p>

    return (
        <div className="arrow-cta bg-black text-white w-3/12 mr-5 mt-8 pr-2 px-5 rounded-md">
            <DynamicFlex flex={true}>
                {titleImg}
            </DynamicFlex>
            {info}
        </div>
        )
}

const Hero = () =>{

    return(
        <section className="h-screen flex pt-24 mb-32">
            <HeroInfo />
            <ArrowCta  title="CONOZCÁMONOS" info="Solicite una evaluación digital gratuita y agenda una videollamada"/>
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph}
