import React from 'react'
import ArrowCta from "./utilities/ArrowCta.js";
import InfoParagraph from "./utilities/InfoParagraph.js";
import Slider from 'react-slick';


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

  class StepsMobile extends React.Component{




    counter=0;
    state = {

      clicks: 0,
    }

    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    next() {
      this.slider.slickNext();
    }
    previous() {
      this.slider.slickPrev();
    }

    prevItem = ()=>{
      if(this.counter > 0 && this.counter < 5){
        this.counter--
      }else if(this.counter < 0){

        this.counter = 0
      }
      this.setState({clicks: this.counter},(c)=>{return {clicks: this.counter}})
    }
    nextItem = ()=>{
      if(this.counter > -1 && this.counter < 4){
        this.counter++
      }else if(this.counter > 1){
        this.counter = 0
      }
      this.setState({clicks: this.counter},(c)=>{return {clicks: this.counter}})
    }

        stepsNames = ["PRIMER","SEGUNDO","TERCER","CUARTO","QUINTO"]

        mobileSteps = this.props.data.map((obj,index) =>{

          return {

            component: (
              <div className='min-h-screen'>
            <div className="w-full mt-20 mb-10 sm:my-16"><h4 className='w-full font-bold absolute h-slider-steps'>{this.stepsNames[index] + " PASO"}</h4><p className='w-full absolute p-slider-steps'>{index+1 + "/5"}</p><img className="w-full" src={obj.img} alt={obj.stepTitle}/></div>
            <h2 className=" w-11/12 mx-auto text-semibig sm:mb-4 sm:text-3xl md:mx-0">{obj.infoTitle}</h2>
            <InfoParagraph info={obj.info} containerClass="'w-11/12 sm:min-w-0 my-3 md:my-5'" textClass="mx-auto md:mx-0 w-11/12 text-xs sm:text-base md:text-lg"/>
            <ArrowCta  title="CONVERSEMOS" id={"responsiveSteps-FirstThree-" + this.state.clicks} containerClass="rounded-md ml-3 md:mx-0 sm:ml-6 my-5 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>

          </div>
        ),
        stepsTitle:<h4 className="text-xs w-2/3 pt-3 mx-auto md:text-sm text-center font-bold">{obj.stepTitle + ' PASO'}</h4>,
      }
    })

    lastMobileSteps = this.props.lastData.map((obj,index) =>{

      return {

        component: (
          <div className='min-h-screen pb-10'>
            <div className={obj.imgClass + " mt-20 mb-10 sm:my-16"}><h4 className='w-full font-bold absolute h-slider-steps'>{this.stepsNames[index + 3] + " PASO"}</h4><p className='w-full absolute p-slider-steps'>{index + 4 + "/5"}</p><img className="w-full" src={obj.img} alt={obj.stepTitle}/></div>
            <h2 className=" w-11/12 mx-auto text-semibig sm:mb-4 sm:text-3xl md:mx-0">{obj.infoTitle}</h2>
            <InfoParagraph info={obj.info} containerClass="'w-11/12 sm:min-w-0 my-3 md:my-5'" textClass="mx-auto md:mx-0 w-11/12 text-xs sm:text-base md:text-lg"/>
            <ArrowCta  title="CONVERSEMOS" id={"responsiveSteps-LastTwo-" + this.state.clicks} containerClass="rounded-md ml-3 md:mx-0 sm:ml-6 my-5 bg-blue py-3 pt-3 px-2 text-shadow " ctaClass="ml-5" src="images/arrow_meet.png" adapt={true}/>
          </div>
        ),
        stepsTitle:<h4 className="text-xs w-2/3 pt-3 mx-auto md:text-sm text-center font-bold">{obj.stepTitle + ' PASO'}</h4>,
      }
    })

    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight:true,
      // className:'max-h-85'
    };


    render(){

      return (

        <div className="my-8 text-black">
        <div className="mx-auto">
             <div className="absolute w-full top-0-cont z-50 flex h-10">
                <button className="mx-auto h-10" onClick={this.previous}>
                <img className="w-10 h-10 rota-180 " src="images/steps_arrows.png" alt="nada"/>
                </button>
                <div>
                </div>
                <button className="mx-auto h-10" onClick={this.next}>
                <img className="w-10 h-10" src="images/steps_arrows.png" alt="steps"/>
                </button>
              </div>
          <Slider
          {...this.settings}
          ref={c => {this.slider = c}}
          >
          {this.mobileSteps[0].component}
          {this.mobileSteps[1].component}
          {this.mobileSteps[2].component}
          {this.lastMobileSteps[0].component}
          {this.lastMobileSteps[1].component}

          </Slider>

            </div>
        </div>
        )
      }
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
                        <img src={steps.img} alt="imagen"/>
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


    const data = [
        {
            info: "Identificamos cuando, donde y como compra tu cliente usando un set de disciplinas de investigación CX.",
            stepTitle:"PRIMER",
            infoTitle:"Agregamos valor a tu negocio y ofrecemos experiencias excepcionales",
            img:"images/first-step.svg",
            containerClass:"mt-40 mb-56 ml-auto w-11/12 py-24 mr-10 lg:mx-auto relative container ",
            orientate:true,
            imgClass:"img-primer",
            id:"primero"

          },
          {
            info:["Creamos versiones interactivas de escritorio, tablet y dispositivo móvil de tu tienda virtual, plasmados en el prototipo de UX en ",<strong id="strong1" key={Math.floor(Math.random() * 10 + 97)}>Figma</strong>],
            stepTitle:"SEGUNDO",
            infoTitle:"Pensamos en la lógica y creamos un prototipo",
            img:"images/second-step.svg",
            imgClass:"absolute img-segundo",
            containerClass:"w-11/12 py-48 mx-auto container",
            orientate:false,
            id:"segundo"

          },
        {
          info: ["Le damos la identidad visual de tu marca creando una guía de estilos visuales y si deseas escalar implementamos un ",<strong id="strong" key={Math.floor(Math.random() * 9 + 97)}>sistema de diseño</strong>],
          stepTitle:"TERCER",
          infoTitle:"Diseñamos tu nueva tienda virtual y alineamos la estética",
          img:"images/third-step.svg",
          imgClass:"absolute img-tercer",
          containerClass:"mt-56 mb-48 w-11/12 mx-auto relative container ",
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
          imgClass:"block w-full lg:h-screen bg-black lg:bg-transparent lg:pt-10 lg:w-5/12 lg:ml-auto",
          orientate:true,
          id:"cuarto"
        },
        {

          info: ["Ya sea una app, ecommerce o sistema web, te ayudamos a realizar un seguimiento de tus usuarios usando ",<strong id="strong3" key={'strong3'}>google analitycs</strong>," y ",<strong id="strong4" key={'strong4'}>fullstory</strong>],
          stepTitle:"QUINTO",
          infoTitle:"Lanzamos al mercado tu producto digital y optimizamos el rendimiento",
          img:"images/fifth_step.png",
          imgClass:"block w-full lg:h-screen bg-black lg:bg-transparent lg:pt-10 lg:w-6/12 lg:ml-auto",
          containerClass:"w-full lg:pb-20 lg:pl-20 bg-black lg:text-white",
          orientate:true,
          id:"quinto"
        }
    ]



    return(
        <section id="stepsSection" className="relative overflow-hidden duration-200 md:px-16 lg:px-0">
            <div className="lg:hidden">
              {<StepsMobile data={data} lastData={lastData} />}
            </div>
            <div className="hidden lg:block geometric-spin steps-octagon absolute w-4/12">
              <img src="images/poligono_steps.png" alt="octagono"/>
            </div>
            <div className="hidden lg:block geometric-spin steps-second-square absolute w-4/12">
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
