import React from 'react';


const Logo = (props) =>{
  const imgInfo = {
    src:props.src,
    alt:props.alt,
  }

  return (
    <div>
      <img src={imgInfo.src} alt={imgInfo.alt}/>
    </div>
  )
}

const Header = () => {
  return(
    <React.Fragment>
      <header>
        <Logo src="images/logo-header.png" alt="Image"/>
      </header>
    </React.Fragment>
  )
}

export {Logo,Header};
