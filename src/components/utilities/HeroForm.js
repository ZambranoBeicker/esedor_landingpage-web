import React, { useState} from 'react'
import ArrowCta from './ArrowCta'
import {useHistory} from 'react-router'


const HeroForm = ({buttonId,formClass, containerForm = "form-container"}) =>{

  const [failed, setFailed] = useState(false)
  const [loader, setLoader] = useState(false)






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

  const button = <ArrowCta onClick={()=> handleSubmit(data)} id={buttonId} title="CONVERSEMOS" src="images/arrow_meet.png" containerClass={loader + " -ml-1 sm:ml-0 bg-blue py-2 pt-2 p-09-chrome pl-5 sm:w-56 rounded-b-md relative my-index g-reaptcha"}  adapt={true} cta="ml-1" route="base"/>


  const history = useHistory()
  const redirectGracias = ()=>{
    history.push('/gracias')
  }

  const handleSubmit = async (formData) => {

    setLoader(true)
    const endpoint = 'https://esedor.com/send-landing.php'

    const dataSubmit = {
        'name': formData[0].value,
        'email': formData[1].value,
        'phone': formData[2].value,
        'description': formData[3].value
    }

    console.log('dataSubmit', dataSubmit)

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataSubmit)
    };
    fetch(endpoint, requestOptions)
    .then(async response => {
      // console.log('HeroForm.handleSubmit', response)

      if(response == 200) {
        console.log('success')
            return redirectGracias()
          } else {
            setLoader(false)
            console.error('request failed.')
          }
        })
        .catch(error => {
          setLoader(false)
          // console.error('HeroForm.handleSubmit', error)
          setFailed(true)
        });
      }

      return(
        <div className={containerForm} action="?" method="POST" >
          <form className={formClass + " -ml-1 sm:ml-0 sm:w-56 relative"} onSubmit={(e) => e.preventDefault( )}>
        {data.map(({label}, index)=>{

          return(
            <div key={index * (10 * 2)} className="input-container relative container-none my-4">
              <label className="absolute text-xs ">{label}</label>
              <input
                onChange={(e) => {data[index].value = e.target.value} }
                className="block mx-auto rounded-t-md w-full h-12 text-sm pl-2 mt-6 pt-4"/>
            </div>
          )
        })}
        {failed && <h4 className="text-xs text-yellow-700 ml-3 -mt-3 mb-4">Ocurrió un error</h4>}
        <div id="recaptcha_image" className="g-recaptcha" data-sitekey="6LcTh_8UAAAAAOHlUrf8L26iAVs-8AoJR1N4UAkY">
        </div>
      </form>
      {button}
    </div>
  )
  }

export default HeroForm
