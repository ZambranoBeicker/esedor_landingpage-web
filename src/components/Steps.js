import React, { useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import ArrowCta from "./utilities/ArrowCta.js";
import InfoParagraph from "./utilities/InfoParagraph.js";

const setTitles = ({stepTitle, infoTitle, info},textClass,containerClass,index,id)=>{

    return (
            <div className={containerClass} key={index * 7 +2}>
                <div key={(index * 2 - 3)}>
                    <h4 className="mb-5 text-sm xl:text-base font-bold">{stepTitle + ' PASO'}</h4>
                    <h2 className="text-3xl xl:text-4xl w-full">{infoTitle}</h2>
                </div>
                <InfoParagraph indexKey={index * (10 - 1 * 3)} info={info} textClass={textClass}/>

                <ArrowCta  title="CONVERSEMOS" id={"desktopSteps-step-" + id} containerClass="rounded-md mx-auto md:mx-0 sm:ml-6 mt-16 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
            </div>
    )
  }

  const StepsMobile = ({data})=>{

    const [clicks, setClicks] = useState(0)
    anime({
      target: document.getElementById('stepsAnimeted-' + clicks),
      keyFrames: [
        {opacity: 0},
        {opacity: 1},
      ],
      duration: 400,
      loop:1,
    })

    useEffect(()=>{
    },[])

    const mobileSteps = data.map((obj,index) =>{

        return {

          texts: {
            stepsTitle:<h4 className="text-xs w-2/3 pt-3 mx-auto md:text-sm text-center font-bold">{obj.stepTitle + ' PASO'}</h4>,
            info: <InfoParagraph info={obj.info} containerClass="'w-11/12 sm:min-w-0 my-3 md:my-5'" textClass="mx-auto md:mx-0 w-11/12 text-xs sm:text-base md:text-lg"/>,
            title: <h2 className=" w-11/12 mx-auto text-semibig sm:mb-4 sm:text-2xl md:text-3xl md:mx-0">{obj.infoTitle}</h2>
            },
          image:<div className="w-full my-10 sm:my-16"><img className="w-full" src={obj.img} alt={obj.stepTitle}/></div>,
          index: index,
        }
      })

      return (

        <div className="relative py-20 my-56 text-black">
          <div className="mx-auto">
            <div className="flex h-6">
                <button className="mx-auto" onClick={()=> {console.log(clicks);setClicks(clicks + 1) }}>
                  <img className="w-10 h-10 rota-180 " src="images/steps_arrows.png" alt="steps"/>
                </button>
                {mobileSteps[clicks].texts.stepTitle}
                <button className="mx-auto">
                  <img className="w-10 h-10" src="images/steps_arrows.png" alt="steps"/>
                </button>
            </div>
              <div id={"stepsAnimeted-" + mobileSteps[clicks].index}>
                {mobileSteps[clicks].image}
                {mobileSteps[clicks].texts.title}
                {mobileSteps[clicks].texts.info}
              </div>
            <ArrowCta  title="CONVERSEMOS" id={"responsiveSteps-step-1" + clicks} containerClass="rounded-md mx-auto md:mx-0 sm:ml-6 my-10 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
          </div>
        </div>
        )
}


const stepsContent = (data)=>{


    const content = data.map((steps,index)=>{

        if(steps.orientate){

            return(
                <div key={index * 3} className={"flex " + steps.containerClass}>
                    {setTitles(steps,"text-md leading-loose", steps.stepTitle.toLowerCase() + " w-6/12",index,steps.id)}
                   <div className={steps.imgClass}>
                        <img src={steps.img} alt={steps.stepTitle}/>
                    </div>
                </div>
                )
            }else{
            return(
                <div key={index * 4} className={"relative flex py-20 " + steps.containerClass}>
                    <div className={steps.imgClass}>
                        <img src={steps.img} alt={steps.stepTitle}/>
                    </div>
                    {setTitles(steps,"text-md leading-loose",steps.stepTitle.toLowerCase() + " mb-20 w-4/12 ml-auto relative z-50",index,steps.id)}
                </div>
                )

            }
    })

    return (
      [content]
      )
  }


  const Steps = () =>{
    // const [isMobile, setIsMobile] = useState(false)

    const data = [
        {
            info: "Identificamos cuando, donde y como compra tu cliente usando un set de disciplinas de investigación CX.",
            stepTitle:"PRIMER",
            infoTitle:"Agregamos valor a tu negocio y ofrecemos experiencias excepcionales",
            img:"images/man_top.png",
            containerClass:"mt-40 mb-56 ml-auto w-11/12 py-10 mr-10 lg:mx-auto relative ",
            orientate:true,
            imgClass:"img-primer",
            id:"primero"

          },
          {
            info:["Creamos versiones interactivas de escritorio, tablet y dispositivo móvil de tu tienda virtual, plasmados en el prototipo de UX en ",<strong key={Math.floor(Math.random() * 10 + 97)}>Figma</strong>],
            stepTitle:"SEGUNDO",
            infoTitle:"Pensamos en la lógica y creamos un prototipo",
            img:"images/man_left.png",
            imgClass:"absolute img-segundo",
            containerClass:"w-11/12 py-20 ml-10",
            orientate:false,
            id:"segundo"

          },
        {
          info: ["Le damos la identidad visual de tu marca creando una guía de estilos visuales y si deseas escalar implementamos un ",<strong id="strong" key={Math.floor(Math.random() * 9 + 97)}>sistema de diseño</strong>],
          stepTitle:"TERCER",
          infoTitle:"Diseñamos tu nueva tienda virtual y alineamos la estética",
          img:"images/man_bottom.png",
          imgClass:"absolute img-tercer",
          containerClass:"mt-56 mb-20 w-11/12 ml-auto mr-10 relative ",
          orientate:true,
          id:"tercero"

        },
      ]

      const lastData = [
        {

          info: "Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando google analitycs y fullstory.",
          stepTitle:"CUARTO",
          infoTitle:"Definimos la tecnologia y empezamos a implementar",
          img:"images/four_step.png",
          containerClass:"w-full py-20 pl-20 bg-black text-white",
          imgClass:"block h-screen pt-10 w-5/12 ml-auto",
          orientate:true,
          id:"cuarto"
        },
        {

          info: ["Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando ",<strong key={'strong3'}>google analitycs</strong>," y ",<strong key={'strong4'}>fullstory</strong>],
          stepTitle:"QUINTO",
          infoTitle:"Lanzamos al mercado tu producto digital y optimizamos el rendimiento",
          img:"images/fifth_step.png",
          imgClass:"block h-screen w-6/12 ml-auto",
          containerClass:"w-full pb-20 pl-20 bg-black text-white",
          orientate:true,
          id:"quinto"
        }
    ]


    return(
        <section id="stepsSection" className="relative overflow:hidden duration-200 min-h-screen md:px-16 lg:px-0">
            <div className="lg:hidden">
              {<StepsMobile data={data} />}
            </div>
            <div className="hidden lg:block steps-octagon absolute w-4/12">
              <img src="images/poligono_steps.png" alt="octagono"/>
            </div>
            <div className="hidden lg:block steps-first-square absolute w-4/12">
              <img src="images/square.png" alt="Sq-1"/>
            </div>
            <div className="hidden lg:block steps-second-square absolute w-4/12">
              <img src="images/square.png" alt="Sq-2"/>
            </div>
            <div className="hidden lg:block">
            {stepsContent(data)}
            {stepsContent(lastData)}
            </div>
        </section>
    )
}

export default Steps;
