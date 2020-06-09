import React, { useState} from 'react'

import { Redirect } from 'react-router-dom';

import ArrowCta from './ArrowCta'
// import { ClickHandler } from './ModalForm';

const HeroForm = ({buttonId,formClass, containerForm = "form-container"}) =>{

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

    const endpoint = 'https://esedor.com/send-landing.php'

    const dataSubmit = {
        'name': formData[0].value,
        'email': formData[1].value,
        'phone': formData[2].value,
        'description': formData[3].value
    }

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(dataSubmit)
        };

        // this.setState({ isLoading: true })

        fetch(endpoint, requestOptions)
          .then(async response => {
            console.log('HeroForm.handleSubmit', response)

            if(respose == 200) {
              console.log('success')
              return
            } else {
              console.error('request failed.')
              return
            }
          })
          .catch(error => {
              // setState({ isLoading: false })
              console.error('HeroForm.handleSubmit', error)
              setFailed(true)
          });
      }

      return(
        <div className={ containerForm} action="?" method="POST" >
      <form className={formClass + " -ml-1 sm:ml-0 sm:w-56 relative"} onSubmit={(e) => e.preventDefault( )}>
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
      <ArrowCta onClick={()=> handleSubmit(data)} id={buttonId} title="CONVERSEMOS" src="images/arrow_meet.png" containerClass="-ml-1 sm:ml-0 bg-blue py-2 pt-2 pl-5 sm:w-56 rounded-b-md" adapt={true} cta="ml-1" route={ruta}/>
    </div>
  )
  }

export default HeroForm
