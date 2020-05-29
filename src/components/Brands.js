import React from 'react';


const BrandImages = ({src, index})=>{


    return(
        <div className="min-w-0 mx-2 my-4 md:w-1/3 relative">
            <img src={src} alt="brand" className={"brand brand-" + index}/>
        </div>
    )
}


const Brands = ()=>{

    const data = [

        {
            src:"images/nubiz.png"
        },
        {
            src:"images/toulou.png"
        },
        {
            src:"images/infomatica.png"
        },
        {
            src:"images/dohja.png"
        },
        {
            src:"images/svitzer.png"
        },
        {
            src:"images/ford.png"
        },
        {
            src:"images/pckapp.png"
        },
        {
            src:"images/mapit.png"
        },
        {
            src:"images/egemsa.png"
        },
    ]

    const brands = data.map((img,index) => <BrandImages src={img.src} key={index} index={index}/>)


    if(window.innerWidth >= 640){
      return (
          <section className="md:flex md:flex-wrap h-screen mx-10">
              <div className="flex flex-wrap md:w-8/12">
                  {brands}
              </div>
              <div className="w-full md:w-3/12 md:ml-auto">
                  <h2 className="md:text-6xl text-semibig my-10 md:mt-56 md:mb-0">Nuestros aliados</h2>
              </div>
          </section>
      )

    }else{

        return(

          <section className="md:flex md:flex-wrap h-screen mx-4">
            <div className="w-full my-10 md:w-3/12 md:ml-auto">
                <h2 className="md:text-6xl text-center text-semibig my-10 md:mt-56 md:mb-0">Nuestros aliados</h2>
            </div>
            <div className="flex flex-wrap w-full md:w-8/12">
                {brands}
            </div>
        </section>
      )
    }
  }

export default Brands;
