import React from 'react';


const Logo = (props) =>{
  const imgInfo = {
    src:props.src,
    alt:props.alt,
  }

    return (
        <div className="header__logo-container ml-1 sm:ml-4 md:ml-16 md:min-w-0">
            <img src={imgInfo.src} alt={imgInfo.alt}/>
        </div>
    )
}

const Header = ()=>{


    return(
          <React.Fragment>
              <header className="header py-4 lg:py-10 bg-blue-third">
                <Logo src="images/logo-header.png" alt="Image"/>
              </header>
          </React.Fragment>
      )
  }
  export {Logo,Header};

