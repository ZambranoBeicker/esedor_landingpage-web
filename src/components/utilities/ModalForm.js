import React, { useContext } from 'react'
import HeroForm from './HeroForm'
import {ShowModal} from '../../App'


const ModalForm = ({display})=>{

  const handleClick = useContext(ShowModal)
  return (
        <div className={display} onClick={()=> handleClick('hide')}>
            <div className="modal-image-container cursor-pointer pt-5 pl-5">
              <img className="modal-image" src="images/close_icon.svg" alt="close" />
            </div>
            <HeroForm formClass="bg-black min-h-0 py-1 px-2 rounded-t-md m-auto" />
        </div>
  )
}

export default ModalForm;
