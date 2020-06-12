import React from 'react';
import { useState, useEffect } from 'react'
import HeroInfo from "./utilities/HeroInfo";
import HeroForm from "./utilities/HeroForm";
import Group3d from "./utilities/Group3d";
import {Header} from "./Header";


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

        return ()=>{

            if(!isMobile) window.removeEventListener('scroll', handleScroll)

        }
    },[isMobile])




  const getBgColorHero= (init, end, windowHeight, scrollPosition) => {

    const windowPosStart = windowHeight / 2.4
    // const changeInitStart = init - windowPosStart
    // const changeEndEnd = end - windowPosStart
    const hero = document.getElementById('hero')

    if(scrollPosition >= windowPosStart) {
      hero.classList.add('my-black')
    } else {
      hero.classList.remove('my-black')
    }
  }
  const getBgColorSteps= (init, end, windowHeight, scrollPosition) => {

    const changeInitStart = init * 1.9
    const steps = document.getElementById('stepsSection')
    if(scrollPosition >= changeInitStart) {
      steps.classList.add('my-black')
    } else {
      steps.classList.remove('my-black')
    }
  }

    return(
        <section className="overflow-hidden relative pt-24 sm:flex sm:pb-24 lg:py-0 bg-blue-third duration-200 lg:pt-10" id="hero">
            <Header />
              <Group3d />
            <HeroInfo />
            <div className="mt-10 relative my-index sm:ml-5 md:ml-0">
              <h4 className="text-bold semibig hidden lg:block mb-8 px-16">Solicita más información</h4>
              <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md" buttonId="hero-formButton"/>
            </div>
        </section>
    )
}

export default Hero;
