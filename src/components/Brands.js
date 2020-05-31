import React from 'react';


const BrandImages = ({src, index})=>{


    return(
        <div className="brand-item min-w-0 mx-2 my-4 relative lg:w-3/12">
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


    if(window.innerWidth >= 1024){
      return (
          <section className="flex flex-wrap h-screen w-full px-16">
              <div className="flex flex-wrap w-8/12">
                  {brands}
              </div>
              <div className="w-full md:w-3/12 ml-auto">
                  <h2 className="lg:text-6xl sm:text-4xl text-semibig my-10 md:mt-32 md:mb-0">Nuestros aliados</h2>
              </div>
          </section>
      )

    }else{

        return(

          <section className="h-screen mx-4">
            <div className="w-full my-10">
                <h2 className="brands-title md:text-6xl text-center text-semibig my-10 ">Nuestros aliados</h2>
            </div>
            <div className="brands-container flex flex-wrap mx-auto justify-around">
                {brands}
            </div>
        </section>
      )
    }
  }

export default Brands;
