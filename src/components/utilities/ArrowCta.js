import React, {useContext} from 'react';
import { ShowModal } from "../../App";
import { Link } from 'react-router-dom';


const ArrowCta = ({title,adapt,ctaClass = '',src,containerClass = 'bg-black rounded-md',textClass = '', route = "form", onClick, id})=>{

  const obj = useContext(ShowModal)
  const handleClick = () =>{
    const body = document.querySelector('body')
    body.classList.add('overflow-y-hidden')
    obj.active('appear')
    obj.app('blur')
    obj.activeDiv('block absolute inset-0 overflow-auto')

  }




  let titleImg;
    const titulo = <h4 className={"mr-0 font-bold text-xl my-auto arrow-text " + ctaClass}> {title}</h4>


    if(adapt){

      titleImg = (
            <div className="flex disable">
            {titulo}
                <img className="arrow-cta__container ml-5 my-auto mr-5" src={src} alt={src && "Arrow"}/>
            </div>
      )
    }else{
      titleImg = (
        <div className="flex disable">
                <img className="arrow-cta__container ml-5 my-auto mr-5" src={src} alt={src && "Arrow"}/>
            {titulo}
            </div>
      )
      
    }
    
    if(route === "llamada"){
      return (
        
        <a href="https://calendly.com/s/DOl5ecSE" id={id} className={"cursor-pointer flex max-w-full arrow-container text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
          <div className="flex disable">
            <img className="h-8 ml-5 my-auto mr-6" src="images/llamada.png" alt="Call icon"/>
            <h4 className={"mr-0 text-lg font-bold my-auto arrow-text " + ctaClass}> {title}</h4>
            <img className="h-8 ml-6 my-auto mr-3" src="images/google-hangouts.svg" alt="Hangouts icon"/>
            <img className="h-8 my-auto" src="images/zoom.svg" alt="Zoom icon"/>
          </div>
        </a>
        )

    }else if(route === "base"){

    return (
          <button onClick={onClick} id={id} className={"flex max-w-full arrow-container pt-2 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
            {titleImg}
          </button>
        )
    }else if(route === "gracias"){
      return (
            <Link onClick={onClick} to={'/'} id={id} className={"flex max-w-full arrow-container pl-16 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </Link>
        )


    }else if(route === "form"){

      return (
            <button onClick={handleClick} id={id} className={"flex max-w-full arrow-container pt-2 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </button>
        )


    }else if(route === "skip"){
          return(

            <a href="#brands" id={id} className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </a>
            )

    }
}

export default ArrowCta;
