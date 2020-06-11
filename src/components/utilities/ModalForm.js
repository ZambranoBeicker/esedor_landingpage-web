import React, {useContext} from 'react'
import HeroForm from './HeroForm'
import {ShowModal} from '../../App'


const ModalForm = ({display, displayDiv})=>{

  const click = useContext(ShowModal)
  return (
        <div className={display}>
          <div className={displayDiv} onClick={()=>{
            click.active('hide')
            click.activeDiv('hidden')
            click.app('')
          }}></div>
          <div className="max-w-sm mx-auto">
            <div className="modal-image-container cursor-pointer md:pt-5 md:pl-5 circle-background" onClick={()=>{
            click.active('hide')
            click.activeDiv('hidden')
            click.app('')
          }}>
              <img className="modal-image" src="images/close_icon.svg" alt="close" />
            </div>
            <HeroForm containerForm="form-container" formClass="bg-black min-h-0 py-1 px-2 rounded-t-md m-auto" />
          </div>
        </div>
  )
}

export default ModalForm;
