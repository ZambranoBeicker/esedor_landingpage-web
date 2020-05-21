import React from 'react';


const Logo = (props) =>{
    const imgInfo = {
        src:"images/logo-header.png",
        alt:props.alt,
    }

    return (
        <div>
            <img src={imgInfo.src} alt={imgInfo.alt}/>
        </div>
    )
}

const Header = ()=>{
     
    
    return(
          <React.Fragment>
              <header>
                <Logo alt="Image"/>
              </header>
          </React.Fragment>
      )
  }
  export default Header;
    
