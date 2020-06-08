import React from 'react';
import { useState, useEffect } from 'react'
import HeroInfo from "./utilities/HeroInfo";
import HeroForm from "./utilities/HeroForm";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(()=>{

      const handleScroll = ()=> {
        const serviceSection = document.getElementById('services')
        const steps = document.getElementById('stepsSection')
        const currentScrollTop = document.documentElement.scrollTop
        const serivceSectionInit = serviceSection.offsetTop
        const serviceSectionEnd = serivceSectionInit + serviceSection.clientHeight
        const currentWindowHeight = document.documentElement.clientHeight
        const stepsSectionInit = steps.offsetTop
        const stepsSectionEnd = stepsSectionInit + steps.clientHeight
        // console.log(steps.offsetTop,currentScrollTop)
      getBgColorHero(serivceSectionInit, serviceSectionEnd, currentWindowHeight, currentScrollTop)
      getBgColorSteps(stepsSectionInit, stepsSectionEnd, currentWindowHeight, currentScrollTop)


    }
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                setIsMobile(true)
            }

            if(!isMobile) window.addEventListener('scroll', handleScroll)

        console.log('Hook is ready: \n' + isMobile)

        return ()=>{

            if(!isMobile) window.removeEventListener('scroll', handleScroll)

        }
    },[isMobile])




  const getBgColorHero= (init, end, windowHeight, scrollPosition) => {

    const windowPosStart = windowHeight / .78
    const changeInitStart = init - windowPosStart
    // const changeInitEnd = init
    // const changeEndStart = end
    const changeEndEnd = end - windowPosStart
    const hero = document.getElementById('hero')
    const steps = document.getElementById('stepsSection')
    // const header = document.querySelector('header')

    if(scrollPosition >= changeInitStart && scrollPosition <= changeEndEnd + 200) {
      hero.classList.add('my-black','hero-gradient')
      // steps.classList.add('my-black','hero-gradient')
      // header.classList.add('my-black')
    } else {
      hero.classList.remove('my-black','hero-gradient')
      // steps.classList.remove('my-black','hero-gradient')
      // header.classList.remove('my-black')
    }
  }
  const getBgColorSteps= (init, end, windowHeight, scrollPosition) => {

    // const windowPosStart = windowHeight / 2.7
    const changeInitStart = init * 1.7
    // const changeInitEnd = init
    // const changeEndStart = end
    // const changeEndEnd = end - windowPosStart
    const steps = document.getElementById('stepsSection')
    // const header = document.querySelector('header')
    console.log(changeInitStart,scrollPosition)
    // console.log(init,windowPosStart,scrollPosition)
    if(scrollPosition >= changeInitStart) {
      steps.classList.add('my-black','hero-gradient')
      // header.classList.add('my-black')
    } else {
      steps.classList.remove('my-black')
      // steps.classList.remove('my-black','hero-gradient')
      // header.classList.remove('my-black')
    }
  }

    return(
        <section className="pt-24 sm:flex sm:pb-24 lg:py-0 bg-blue-third duration-200 lg:pt-10" id="hero">
            <HeroInfo />
            <div className="mt-10 sm:ml-5 md:ml-0">
              <h4 className="text-bold semibig hidden lg:block mb-8 px-16">Solicita más información</h4>
              <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md" buttonId="hero-formButton"/>
            </div>
        </section>
    )
}

export default Hero;

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
