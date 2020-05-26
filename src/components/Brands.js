import React from 'react';


const BrandImages = ({src, index})=>{


    return(
        <div className="w-1/3">
            <img src={src} alt="brand" className={"brand-" + index}/>
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
        <section className="flex flex-wrap h-screen mx-10">
            <div className="flex flex-wrap w-8/12">
                {brands}
            </div>
            <div className="w-3/12 ml-auto">
                <h2 className="text-6xl mt-56">Nuestros aliados</h2>
            </div>
        </section>
    )
}

export default Brands;