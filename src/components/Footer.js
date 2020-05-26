import React from 'react';

const FooterInfo = ({pgraph,title}) =>{

  return(
        <div>
          <h4 className="text-gray mb-5 ml-auto">{title}</h4>
          {pgraph.map((data,index)=>{

            if(!data.src){

                return(
                  <p key={index} className={data.textClass}>{data.text}</p>
                  )
            }else{

            return(

              <div className="flex" key={index}>
                <img src={data.src} alt={title} className="mt-2 w-2 h-4 mr-2"/>
                <p className={data.textClass}>{data.text}</p>
              </div>
              )
          }
          })}
        </div>
  )
}

// Swiss Tower


const Footer = () =>{

  const info = [

    {
      title: "Oficina",
      pgraph: [
        {
          textClass: "",
          text:"Swiss Tower",
        },
        {
          textClass: "",
          text:"Av. Alfredo Benavides #1944 – Piso 9 Miraflores, Lima",
        }
      ],
    },
    {
      title: "Contacto",
      pgraph: [
        {
          textClass: "",
          src:"images/number.png",
          text:"+01 773 8905",
        },
        {
          textClass: "",
          src:"images/email.png",
          text:"hola@esedor.com",
        }
      ],
    },
    {
      title: "Sociales",
      pgraph: [
        {
          textClass: "",
          text:"Linkedin",
        },
        {
          textClass: "",
          text:"Instagram",
        },
        {
          textClass: "",
          text:"Facebook",
        }
      ],
    },
  ]

  return (
    <footer className="py-4 pr-32 border-t">
      <div className="ml-20 flex w-full">
        <div>
          <img src="images/logo-header.png" alt="Logo"/>
        </div>
        <div className="flex w-full justify-around">
          {info.map((item,index) => <FooterInfo key={index} title={item.title} pgraph={item.pgraph} /> )}
        </div>
      </div>
      <div className="pl-20 py-4 border-t border-b mb-6 mt-10">
        <p>© 2018 ESEDOR, todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
