import React, { useState } from 'react'
import HeroForm from './HeroForm'


const ModalForm = ()=>{
  const [active, setActive] = useState('hidden')

  const handleClick = ()=>{

    setActive('fixed')

  }

  return (
        <div className={"inset-0 pt-24 " + active}>
          <HeroForm arrowProp={handleClick} formClass="bg-black min-h-0 sm:mx-4 py-1 px-2 rounded-t-md m-auto" />
        </div>  
  )
}

export default ModalForm;