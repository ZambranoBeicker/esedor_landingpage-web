import React from 'react';

const FooterInfo = ({pgraph,title}) =>{

  return(
        <React.Fragment>
          <div className="pb-5 pt-4 pl-4 pr-24 md:p-0 border-b md:border-none md:w-3/12 md:mr-16 md:ml-2">
            <h4 className="text-gray mb-5 ml-auto md:ml-0 w-1/3">{title}</h4>
            {pgraph.map((data,index)=>{

              if(!data.src){

                  return(
                    <p key={index} className={data.textClass}>{data.text}</p>
                    )
              }else{

              return(

                <div className="flex" key={index}>
                  <img src={data.src} alt={title} className="mt-2 h-4 mr-2"/>
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
          textClass: "text-sm md:text-base w-1/3",
          text:"Swiss Tower",
        },
        {
          textClass: "text-sm md:text-base w-9/12",
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
          textClass: "text-sm md:text-base tracking-widest",
          src:"images/email.png",
          text:"hola@esedor.com",
        }
      ],
    },
  ]

    if(window.innerWidth >= 960){

      return (
        <footer className="py-4 pr-32 border-t">
          <div className="ml-20 flex w-full">
            <div>
              <img src="images/logo-header.png" alt="Logo"/>
            </div>
            <div className="flex md:min-w-0 md:w-auto xl:w-8/12 ml-16">
              {info.map((item,index) => <FooterInfo key={index} title={item.title} pgraph={item.pgraph} /> )}
              
            </div>
            <div className="pb-5 pt-4 px-4 lg:w-3/12 lg:px-10 md:p-0 border-b md:border-none">
              <h4 className="text-gray mb-5 ml-auto">Sociales</h4>
              <div className="flex md:block">
                <p className="mr-4">Linkedin</p>
                <p className="mr-4">Instagram</p>
                <p className="">Facebook</p>
              </div>
            </div>
          </div>
          <div className="pl-20 py-4 border-t border-b mb-6 mt-10">
            <p>© 2018 ESEDOR, todos los derechos reservados.</p>
          </div>
        </footer>
      )
    }else{

      return (
        <footer className="py-2 md:py-5 md:px-6">
          <div className="w-full">
            <div className="w-full md:flex md:flex-wrap">
              {info.map((item,index) => <FooterInfo key={index} title={item.title} pgraph={item.pgraph} /> )}
              <div className="pb-5 pt-4 px-4 md:p-0 border-b md:w-3/12">
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
          <div className="text-gray-secondary pl-20 py-4 md:px-0 border-t border-b mb-6 mt-10">
            <p>© 2018 ESEDOR, todos los derechos reservados.</p>
          </div>
        </footer>
      )
    }
}

export default Footer;
