import React from "react";
import {InfoParagraph} from "./Hero.js";

const setTitles = ({stepTitle, infoTitle, info},textClass,containerClass)=>{

    

    return (
        <div className={containerClass}>
            <div>
                <h4 className="font-bold">{stepTitle + ' PASO'}</h4>
                <h2 className="text-4xl w-full">{infoTitle}</h2>
            </div>
            <InfoParagraph info={info} textClass={textClass}/>
        </div>
    )
}

const stepsContent = (data)=>{

    const content = data.map((steps,index)=>{
        
        if(steps.orientate){

            return(
                <div key={index} className={"relative flex py-10 my-56 index " + steps.containerClass}>
                    {setTitles(steps,"text-md leading-loose", steps.stepTitle.toLowerCase() + " mb-56 w-6/12")}
                    <img className={steps.imgClass} src={steps.img} alt={steps.stepTitle}/>
                </div>
                )
            }else{
            return(
                <div key={index} className={"relative flex py-20 my-56 " + steps.containerClass}>
                    <img className="absolute left-0 top-0" src={steps.img} alt={steps.stepTitle}/>
                    {setTitles(steps,"text-md leading-loose",steps.stepTitle.toLowerCase() + " mb-20 w-4/12 ml-auto relative z-50")}
                </div>
                )

            }
    })

    return content;
} 


const Steps = () =>{

    const data = [
        {
            info: "Entendemos a tu usuario usando un set de disciplinas de investigación.",
            stepTitle:"PRIMER",
            infoTitle:"Agregamos valor a tu negocio y estructuramos el problema",
            img:"images/man_top.png",
            containerClass:"ml-auto w-10/12 mr-10",
            orientate:true,
            imgClass:""
 
        },
        {
            info: "Creamos versiones de escritorio, tablets y dispositivos móviles, plasmados en el prototipo de UX en Figma",
            stepTitle:"SEGUNDO",
            infoTitle:"Pensamos en la lógica y creamos un prototipo",
            img:"images/man_left.png",
            imgClass:"",
            containerClass:"w-11/12 ml-10",
            orientate:false,
 
        },
        {
            info: "En esta etapa le damos personalidad a tu producto creando una guía de estilos visuales y si deseas escalar un sistema de diseño",
            stepTitle:"TERCER",
            infoTitle:"Diseñamos el producto digital y creamos la estetica",
            img:"images/man_bottom.png",
            imgClass:"absolute right-0 bottom-0",
            containerClass:"w-11/12 ml-auto mr-10",
            orientate:true,
 
        },
    ]
 



    return(
        <section className="min-h-0">
            {stepsContent(data)}
        </section>
    )
}

export default Steps;