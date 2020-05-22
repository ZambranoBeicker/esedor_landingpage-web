import React from 'react';

const DynamicFlex = (props)=>{
    
    let container = null;
    if(props.flex){
        container = <div className="flex">{props.children}</div>
    }else{
        container = <div className="block">{props.children}</div>
    }

 
    return(
        <div>
           {container}
        </div>
    )

}

const InfoParagraph = (props)=>{
    return(
        <div className="w-10/12">
            <p className="text-2xl ml-2">{props.info}</p>
        </div>
    )
}

const HeroInfo = (props)=>{
    return (
        <div className="ml-20 w-8/12">
            <h1 className="text-6xl">Estás listo para ser parte de la nueva era digital?</h1>
            <InfoParagraph info="Creamos soluciones en todas las industrias para empresas grandes, pequeñas y startups"/>
        </div>
    )
}

const ArrowCta = (props)=>{

    const title = <h4>{props.title}</h4>     
    const titleImg = (
        <React.Fragment>
            {title}
            <div className="arrow-container ml-auto">
                <img src="images/arrow_meet.png" alt="Arrow"/>
            </div>
        </React.Fragment>    

    )
const info = <p className="">{props.info}</p>


 
    return (
            <DynamicFlex flex={true}>
                {titleImg}
                {info}
            </DynamicFlex>
        )
}

const HeroPrincipal = () =>{
 
    return(
        <section className="flex">
            <HeroInfo />   
            <ArrowCta  title="CONOZCÁMONOS" info="Solicite una evaluación de digital gratuita y agenda una videollamada"/>
        </section>
    )
}

export {HeroPrincipal,ArrowCta,InfoParagraph}