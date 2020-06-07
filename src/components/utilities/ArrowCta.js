import React, {useContext} from 'react';
import { ShowModal } from "../../App";
import { Link } from 'react-router-dom';


const ArrowCta = ({title,adapt,ctaClass = '',src,containerClass = 'bg-black rounded-md',textClass = '', route = "form", onClick, id})=>{

  const handleClick = useContext(ShowModal)

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

        <a href={"tel:" + cel[0]} id={id} className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
            {titleImg}
        </a>
        )

    }else if(route === "base"){

    return (
            <Link onClick={onClick } to="/" id={id} className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </Link>
        )
    }else if(route === "gracias"){
      return (
            <Link onClick={onClick} to={ route} id={id} className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
                {titleImg}
            </Link>
        )


    }else if(route === "form"){

      return (
            <button onClick={() => {handleClick.active('appear');handleClick.app('blur')}} id={id} className={"flex max-w-full arrow-container pt-3 text-white sm:mx-auto text-shadow cursor-pointer hover-bg-blue " + containerClass}>
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
