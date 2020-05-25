import React from 'react';


const Logo = (props) =>{
    const imgInfo = {
        src:props.src,
        alt:props.alt,
    }

    return (
        <div className="ml-16 min-w-0">
            <img src={imgInfo.src} alt={imgInfo.alt}/>
        </div>
    )
}

const Header = ()=>{
     
    
    return(
          <React.Fragment>
              <header className="my-10">
                <Logo src="images/logo-header.png" alt="Image"/>
              </header>
          </React.Fragment>
      )
  }
  export {Logo,Header};
    
