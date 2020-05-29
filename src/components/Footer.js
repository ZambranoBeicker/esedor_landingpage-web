import React from 'react';

const FooterInfo = ({pgraph,title}) =>{

  return(
        <React.Fragment>
          <div className="pb-5 pt-4 pl-4 pr-24 md:p-0 border-b">
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
        </React.Fragment>
  )
}



const Footer = () =>{

  const info = [

    {
      title: "Oficina",
      pgraph: [
        {
          textClass: "text-sm md:text-base",
          text:"Swiss Tower",
        },
        {
          textClass: "text-sm md:text-base",
          text:"Av. Alfredo Benavides #1944 – Piso 9 Miraflores, Lima",
        }
      ],
    },
    {
      title: "Contacto",
      pgraph: [
        {
          textClass: "text-sm md:text-base",
          src:"images/number.png",
          text:"+01 773 8905",
        },
        {
          textClass: "text-sm md:text-base",
          src:"images/email.png",
          text:"hola@esedor.com",
        }
      ],
    },
  ]

    if(window.innerWidth >= 768){

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
    }else{

      return (
        <footer className="py-2">
          <div className="w-full">
            <div className="w-full">
              {info.map((item,index) => <FooterInfo key={index} title={item.title} pgraph={item.pgraph} /> )}
              <div className="pb-5 pt-4 px-4 md:p-0 border-b">
                <h4 className="text-gray mb-5 ml-auto">Sociales</h4>
                <div className="flex md:block">
                  <p className="mr-4">Linkedin</p>
                  <p className="mr-4">Instagram</p>
                  <p className="">Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <img src="images/logo-header.png" alt="Logo"/>
          </div>
          <div className="text-gray-secondary pl-20 py-4 border-t border-b mb-6 mt-10">
            <p>© 2018 ESEDOR, todos los derechos reservados.</p>
          </div>
        </footer>
      )
    }
}

export default Footer;
