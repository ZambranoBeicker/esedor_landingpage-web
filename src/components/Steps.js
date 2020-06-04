import React from "react";
import Slider from "infinite-react-carousel";
import ArrowCta from "./utilities/ArrowCta.js";
import InfoParagraph from "./utilities/InfoParagraph.js";

const setTitles = ({stepTitle, infoTitle, info},textClass,containerClass,index)=>{

    return (
            <div className={containerClass} key={index * 7 +2}>
                <div key={(index * 2 - 3)}>
                    <h4 className="text-sm xl:text-base font-bold">{stepTitle + ' PASO'}</h4>
                    <h2 className="text-3xl xl:text-4xl w-full">{infoTitle}</h2>
                </div>
                <InfoParagraph indexKey={index * (10 - 1 * 3)} info={info} textClass={textClass}/>

                <ArrowCta  title="CONVERSEMOS" containerClass="rounded-md mx-auto md:mx-0 sm:ml-6 my-10 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
            </div>
    )
}

const stepsContent = (data)=>{


    const content = data.map((steps,index)=>{

        if(steps.orientate){

            return(
                <div key={index * 3} className={"flex mt-40 mb-20 " + steps.containerClass}>
                    {setTitles(steps,"text-md leading-loose", steps.stepTitle.toLowerCase() + " w-6/12",index)}
                   <div className={steps.imgClass}>
                        <img src={steps.img} alt={steps.stepTitle}/>
                    </div>
                </div>
                )
            }else{
            return(
                <div key={index * 4} className={"relative flex py-20 mt-40 mb-20 " + steps.containerClass}>
                    <div className={steps.imgClass}>
                        <img src={steps.img} alt={steps.stepTitle}/>
                    </div>
                    {setTitles(steps,"text-md leading-loose",steps.stepTitle.toLowerCase() + " mb-20 w-4/12 ml-auto relative z-50",index)}
                </div>
                )

            }
    })

    const contentResponsive = (

        <div className="relative py-20 my-56 ">
          <div className="mx-auto">
            <div className="flex h-6">
                <img className="w-10 h-10 rota-180 mx-auto" src="images/steps_arrows.png" alt="steps"/>
                <h4 className="text-xs w-2/3 pt-3 mx-auto md:text-sm text-center font-bold">{data[0].stepTitle + ' PASO'}</h4>
                <img className="w-10 h-10 mx-auto" src="images/steps_arrows.png" alt="steps"/>
            </div>
              <img className="w-full my-10 sm:my-16" src={data[0].img} alt={data[0].stepTitle}/>
              <h2 className=" w-11/12 mx-auto text-semibig sm:mb-4 sm:text-2xl md:text-3xl md:mx-0">{data[0].infoTitle}</h2>
          </div>
          <InfoParagraph info={data[0].info} containerClass="'w-11/12 sm:min-w-0 my-3 md:my-5'" textClass="mx-auto md:mx-0 w-11/12 text-xs sm:text-base md:text-lg"/>
          <ArrowCta  title="CONVERSEMOS" containerClass="rounded-md mx-auto md:mx-0 sm:ml-6 my-10 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
        </div>
        )


    if(window.innerWidth >= 1024){
      return content

    }else {
      return contentResponsive
    }
}


const Steps = () =>{

    const data = [
        {
            info: "Identificamos cuando, donde y como compra tu cliente usando un set de disciplinas de investigación CX.",
            stepTitle:"PRIMER",
            infoTitle:"Agregamos valor a tu negocio y ofrecemos experiencias excepcionales",
            img:"images/man_top.png",
            containerClass:"ml-auto w-11/12 py-10 mr-10 lg:mx-auto relative ",
            orientate:true,
            imgClass:"img-primer"

        },
        {
            info:["Creamos versiones interactivas de escritorio, tablet y dispositivo móvil de tu tienda virtual, plasmados en el prototipo de UX en ",<strong key={Math.floor(Math.random() * 10 + 97)}>Figma</strong>],
            stepTitle:"SEGUNDO",
            infoTitle:"Pensamos en la lógica y creamos un prototipo",
            img:"images/man_left.png",
            imgClass:"absolute img-segundo",
            containerClass:"w-11/12 py-10 ml-10",
            orientate:false,

        },
        {
            info: ["Le damos la identidad visual de tu marca creando una guía de estilos visuales y si deseas escalar implementamos un ",<strong key={Math.floor(Math.random() * 9 + 97)}>sistema de diseño</strong>],
            stepTitle:"TERCER",
            infoTitle:"Diseñamos tu nueva tienda virtual y alineamos la estética",
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
            containerClass:"w-full py-20 pl-20 bg-black text-white",
            imgClass:"block h-screen w-5/12 ml-auto",
            orientate:true,
        },
        {

            info: ["Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando ",<strong key={'strong3'}>google analitycs</strong>," y ",<strong key={'strong4'}>fullstory</strong>],
            stepTitle:"QUINTO",
            infoTitle:"Lanzamos al mercado tu producto digital y optimizamos el rendimiento",
            img:"images/fifth_step.png",
            imgClass:"block h-screen w-6/12 ml-auto",
            containerClass:"w-full py-20 pl-20 bg-black text-white",
            orientate:true,
        }
    ]


    return(
        <section id="steps" className="min-h-0 md:px-16 lg:px-0">
            {stepsContent(data)}
            <Slider
            className="bg-black pt-2"
            duration={200}
            autoplay={true}
            dotsScroll={2}
            arrows={false}
            autoplaySpeed={4000}
            >
            <div className={"flex " + lastData[0].containerClass}>
                <div className="flex">
                    {setTitles(lastData[0],"text-md leading-loose lg:mb-24", lastData[0].stepTitle.toLowerCase() + " w-6/12",(15))}
                    <div className={lastData[0].imgClass}>
                        <img src={lastData[0].img} alt={lastData[0].stepTitle}/>
                    </div>
                </div>
            </div>
            <div className={"flex " + lastData[1].containerClass}>
                <div className="flex">
                    {setTitles(lastData[1],"text-md leading-loose lg:mb-24", lastData[1].stepTitle.toLowerCase() + " w-6/12",(14))}
                    <div className={lastData[1].imgClass}>
                        <img src={lastData[1].img} alt={lastData[1].stepTitle}/>
                    </div>
                </div>
            </div>
            </Slider>
        </section>
    )
}

export default Steps;
