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

// const HeroInfo = ()=>{

// }

const ArrowCta = (props)=>{

    const title = <h4>{props.title}</h4>     
    const titleImg = (
        <div id="arrowTitleImg" className="">
            {title}
            <div className="arrow-container ml-auto">
                <img src="images/arrow_meet.png" alt="Arrow"/>
            </div>
        </div>

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
        <section className="hero-principal">
            {/* <HeroInfo />    */}
            <ArrowCta  title="CONOZCÁMONOS" info="Solicite una evaluación de digital gratuita y agenda una videollamada"/>
        </section>
    )
}

export default HeroPrincipal