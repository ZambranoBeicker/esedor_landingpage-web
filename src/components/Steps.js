import React from "react";
import {InfoParagraph} from "./Hero.js";

const setTitles = ({stepTitle, infoTitle, info},textClass,containerClass,index)=>{



    return (
        <div className={containerClass} key={index * 6}>
            <div key={(index * 2)}>
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
                <div key={index * 3} className={"flex my-56 " + steps.containerClass}>
                    {setTitles(steps,"text-md leading-loose", steps.stepTitle.toLowerCase() + " w-6/12",index)}
                    <img className={steps.imgClass} src={steps.img} alt={steps.stepTitle}/>
                </div>
                )
            }else{
            return(
                <div key={index * 4} className={"relative flex py-20 my-56 " + steps.containerClass}>
                    <img className={steps.imgClass} src={steps.img} alt={steps.stepTitle}/>
                    {setTitles(steps,"text-md leading-loose",steps.stepTitle.toLowerCase() + " mb-20 w-4/12 ml-auto relative z-50",index)}
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
            containerClass:"ml-auto w-11/12 py-10 mr-10 relative ",
            orientate:true,
            imgClass:""

        },
        {
            info: ["Creamos versiones de escritorio, tablets y dispositivos móviles, plasmados en el prototipo de UX en ",<strong key={'strong1'}>Figma</strong>],
            stepTitle:"SEGUNDO",
            infoTitle:"Pensamos en la lógica y creamos un prototipo",
            img:"images/man_left.png",
            imgClass:"absolute img-segundo",
            containerClass:"w-11/12 py-10 ml-10",
            orientate:false,

        },
        {
            info: ["En esta etapa le damos personalidad a tu producto creando una guía de estilos visuales y si deseas escalar un ",<strong key={'strong2'}>sistema de diseño</strong>],
            stepTitle:"TERCER",
            infoTitle:"Diseñamos el producto digital y creamos la estetica",
            img:"images/man_bottom.png",
            imgClass:"absolute img-tercer",
            containerClass:"w-11/12 ml-auto mr-10 relative ",
            orientate:true,

        },
    ]

    const lastData = [
        {

            info: "Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando google analitycs y fullstory.",
            stepTitle:"CUARTO",
            infoTitle:"Definimos la tecnologia y empezamos a implementar",
            img:"images/four_step.png",
            containerClass:"w-full p-32 bg-black text-white",
            imgClass:"",
            orientate:true,
        },
        {

            info: ["Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando ",<strong key={'strong3'}>google analitycs</strong>," y ",<strong key={'strong4'}>fullstory</strong>],
            stepTitle:"QUINTO",
            infoTitle:"Lanzamos al mercado tu producto digital y optimizamos el rendimiento",
            img:"images/fifth_step.png",
            imgClass:"",
            containerClass:"w-full p-32 bg-black text-white",
            orientate:true,
        }
    ]


    return(
        <section id="steps" className="min-h-0">
            {stepsContent(data)}
            {stepsContent(lastData)}
        </section>
    )
}

export default Steps;
