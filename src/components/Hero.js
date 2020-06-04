import React from 'react';
import {useState} from 'react';

import { Redirect, Link } from 'react-router-dom';

const InfoParagraph = ({indexKey,info,textClass = 'text-xs sm:text-sm sm:pr-4 md:p-0 md:text-base lg:text-lg md:ml-2 text-gray-secondary', containerClass = 'w-11/12 md:w-full my-3 md:my-5'})=>{
    return(

        <div key={indexKey + 1} className={containerClass}>
            <p key={indexKey + 2} className={textClass}>{info}</p>
        </div>
    )
}

const HeroInfo = (props)=>{
    return (
        <div className="ml-4 md:ml-10 md:mr-10 lg:ml-16 md:w-9/12 lg:w-7/12 sm:pr-4 lg:pr-40">
            <h1 className="text-2xl font-semibold sm:mb-4 lg:mt-32 lg:mb-8 sm:text-3xl lg:text-5xl sm:font-medium w-full">Estás listo para vender por tu tienda virtual?</h1>
            <InfoParagraph info="Creamos soluciones ecommerce en todas las industrias para  empresas grandes, pequeñas y startups."/>
            <ArrowCta  title="Llámanos (+51)773 8905" containerClass="rounded-md hidden lg:flex lg:w-32 mx-auto md:mx-0 sm:ml-6 my-10 bg-blue text-shadow " ctaClass="mr-auto" src="images/llamada.png" adapt={false} route="gracias"/>

        </div>
    )
}

const ArrowCta = ({title,adapt,ctaClass = '',src,containerClass = 'bg-black rounded-md',textClass = '', route = "base",onClick})=>{
    let titleImg;
    const titulo = <h4 className={"mr-0 font-bold " + ctaClass}> {title}</h4>

     let cel = title.match('..[0-9]+.([0-9]+) ([0-9]+)')

    if(adapt){

      titleImg = (
        <React.Fragment>
            {titulo}
            <div className="arrow-cta__container ml-auto mr-5">
                <img className="arrow-cta__arrow-image" src={src} alt={src && "Arrow"}/>
            </div>
        </React.Fragment>
      )
    }else{
      titleImg = (
        <React.Fragment>
            <div className="arrow-cta__container ml-auto mr-5">
                <img className="arrow-cta__arrow-image" src={src} alt={src && "Arrow"}/>
            </div>
            {titulo}
        </React.Fragment>
      )

    }

      if(cel){
        return (

        <a href={"tel:" + cel[0]} id="link2" className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
            {titleImg}
        </a>
        )
      
    }else if(route === "base"){

    return (
            <Link onClick={onClick } to="/" id="link1" className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </Link>
        )
    }else if(route === "gracias"){
      return (
            <Link onClick={onClick} to={ route} id="link2" className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </Link>
        )


    }
}

const HeroForm = ({formClass, containerForm = "form-container"}) =>{

  const [ruta, setRuta] = useState('base')
  const [failed, setFailed] = useState(false)



const data = [
    {
      label:'Nombre',
      value: ''
    },
    {
      label:'Correo',
      value: ''
    },
    {
      label:'Celular',
      value: ''
    },
    {
      label:'Mensaje',
      value: ''
    }
  ]


  const handleSubmit = async (formData) =>{

    const endpoint = 'https://esedor-1.nocrm.io/api/v2/leads'

    const dataSubmit = {
        'api_key': '5f3e4af53e0dd0c536a1b4555cea5f3d284dfb0bbb785df9',
        'title': formData[0].value,
        'description': `Email: ${formData[1].value}, Teléfono: ${formData[2].value}, Mensaje: ${formData[3].value}`
    }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSubmit)
        };

        // this.setState({ isLoading: true })

        await fetch(endpoint, requestOptions)
            .then(async response => {

              console.log(response)
              const dataFetch = await response.json();
              console.log(dataFetch)

              setRuta('base')

                // setState({ isLoading: false })
                // setState({ firstname: '' })
                // setState({ email: '' })
                // Redireccionar a gracias
                return <Redirect />
            })
            .catch(error => {
                // setState({ isLoading: false })
                console.log(error)
                setRuta('gracias')
                setFailed(true)
                console.log('Listo')
                

            });

      }

      return( //data[index].value = e.target.value;
        <div className={"px-4 " + containerForm} action="?" method="POST" >
      <form className={formClass + " sm:w-56 relative"} onSubmit={(e) => e.preventDefault( )}>
        {data.map(({label}, index)=>{

          return(
            <div key={index * (10 * 2)} className="input-container relative container-none my-4">
              <label className="absolute text-xs">{label}</label>
              <input
                onChange={(e) => {data[index].value = e.target.value; console.log(data[index].value)} }
                className="block mx-auto rounded-t-md w-full h-12 text-sm pl-2 mt-6 pt-4"/>
            </div>
          )
        })}
        {failed && <h4 className="text-xs text-yellow-700 ml-3 -mt-3 mb-4">Ocurrió un error</h4>}
        <div id="recaptcha_image" className="g-recaptcha" data-sitekey="6LcTh_8UAAAAAOHlUrf8L26iAVs-8AoJR1N4UAkY">
        </div>
      </form>
      <ArrowCta onClick={()=> handleSubmit(data)} title="CONVERSEMOS" src="images/arrow_meet.png" containerClass="bg-blue py-2 pt-2 pl-5 sm:w-56 rounded-b-md" adapt={true} cta="ml-1" route={ruta}/>
    </div>
  )
  }


const Hero = () => {

    return(
        <section className="min-h-0 sm:flex sm:pt-16 sm:pb-24 lg:py-0 lg:h-screen bg-blue-third">
            <HeroInfo />
            <div className="mb-40">
              <h4 className="text-bold semibig hidden lg:block mb-8 px-16">Solicita más información</h4>
              <HeroForm formClass="bg-black min-h-0 sm:mx-4 py-1 px-2 rounded-t-md"/>
            </div>
        </section>
    )
}

export {Hero,ArrowCta,InfoParagraph,HeroForm};

// Conceptos: data binding
// https://reactjs.org/docs/two-way-binding-helpers.html
// const sendForm = (formData) => {
//   const endpoint = 'https://esedor-1.nocrm.io/api/v2/leads'

//   const data = {
//       'api_key': '5f3e4af53e0dd0c536a1b4555cea5f3d284dfb0bbb785df9',
//       'title': formData[0].value,
//       'description': `Email: ${formData[2].value}, Teléfono: ${form.phone}, Mensaje: ${form.message}`
//   }

//   const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data)
//   };

//   this.setState({ isLoading: true })

//   fetch(endpoint, requestOptions)
//       .then(async response => {
//           const data = await response.json();
//           setState({ isLoading: false })
//           setState({ firstname: '' })
//           setState({ email: '' })
//           // Redireccionar a gracias
//       })
//       .catch(error => {
//           setState({ isLoading: false })
//           // Mostrar mensaje de error
//       });
// }


// created() {
//   if(process.client) {
//     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//       this.isMobile = true
//     }

//     if(!this.isMobile) window.addEventListener('scroll', this.handleScroll)
//   }
// }

// destroyed() {
//   if(process.client) {
//     if(!this.isMobile) window.removeEventListener('scroll', this.handleScroll)
//   }
// }

// methods: {
//   handleScroll() {
//     const whySection = document.getElementById('why-us')
//     const currentScrollTop = document.documentElement.scrollTop
//     const whySectionInit = whySection.offsetTop
//     const whySectionEnd = whySectionInit + whySection.clientHeight
//     const currentWindowHeight = document.documentElement.clientHeight
//     this.getBgColor(whySectionInit, whySectionEnd, currentWindowHeight, currentScrollTop)
//   },
//   getBgColor (init, end, windowHeight, scrollPosition) {
//     const windowPosStart = windowHeight / 2
//     const changeInitStart = init - windowPosStart
//     const changeInitEnd = init
//     const changeEndStart = end
//     const changeEndEnd = end - windowPosStart

//     if(scrollPosition >= changeInitStart && scrollPosition <= changeEndEnd) {
//       document.body.classList.add('primary')
//     } else {
//       document.body.classList.remove('primary')
//     }
//   }
