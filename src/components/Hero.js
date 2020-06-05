import React from 'react';
import { useState, useEffect } from 'react'
import HeroInfo from "./utilities/HeroInfo";
import HeroForm from "./utilities/HeroForm";

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(()=>{

        //  if(process.client) {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                setIsMobile(true)
                console('It is: ' + isMobile)
            }

            if(!isMobile) window.addEventListener('scroll', handleScroll)
        // }

        console.log('Hook is ready: \n' + isMobile)

        return ()=>{

            if(!isMobile) window.removeEventListener('scroll', handleScroll)

        }
    },[isMobile])

    const handleScroll = ()=>{
        console.log('Scrolling');
        
    }

    return(
        <section className="min-h-0 sm:flex sm:pt-16 sm:pb-24 lg:py-0 lg:min-h-screen bg-blue-third">
            <HeroInfo />
            <div className="mt-10">
              <h4 className="text-bold semibig hidden lg:block mb-8 px-16">Solicita más información</h4>
              <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md"/>
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
