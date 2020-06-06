import React from 'react';


const Logo = (props) =>{
  const imgInfo = {
    src:props.src,
    alt:props.alt,
  }

    return (
        <div className="header__logo-container ml-1 sm:ml-4 md:ml-10 lg:ml-16">
            <img src={imgInfo.src} alt={imgInfo.alt}/>
        </div>
    )
}

const Header = ()=>{


    return(
          <React.Fragment>
              <div className="absolute top-0">
                <header className="header pt-4 lg:pt-5">
                  <Logo src="images/logo-header.png" alt="Image"/>
                </header>
              </div>
          </React.Fragment>
      )
  }
  export {Logo,Header};

