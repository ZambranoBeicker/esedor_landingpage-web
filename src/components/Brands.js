import React from 'react';


const BrandImages = ({src, index})=>{


    return(
        <div className="h-24 brand-item min-w-0 my-4 relative lg:w-3/12">
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


      return (
          <section className="almost-screen flex flex-wrap w-full lg:pt-10 lg:px-8 xl:px-16 max-h-screen">
              <div className="hidden lg:flex flex-wrap w-8/12">
              {brands}
              </div>
              <div className="hidden lg:block w-full md:w-3/12 ml-auto">
              <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-semibig my-10 md:mt-40 md:mb-0">Nuestros aliados</h2>
              </div>
              <div className="lg:hidden w-full my-10">
              <h2 className="brands-title md:text-6xl text-center text-semibig my-10 ">Nuestros aliados</h2>
              </div>
              <div className="lg:hidden brands-container flex flex-wrap mx-auto justify-around">
              {brands}
              </div>
          </section>

      )
  }

export default Brands;
