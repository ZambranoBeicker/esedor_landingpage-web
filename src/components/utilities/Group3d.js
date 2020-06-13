import React from 'react'

const Group3d = ({cart = 'cart', mushroom = 'mushroom', polygon = 'polygon', box = 'box', tonus = 'tonus'}) => {
  return (
    <React.Fragment>
      <div className={'hidden lg:block absolute top-0 w-4/12 send-backward ' + cart}>
        <img src="images/carrito_3d.gif" alt="cart3d"/>
      </div>
      <div className={'hidden lg:block absolute top-0 right-0 w-3/12 send-backward ' + mushroom}>
        <img src="images/Puntero_3d.gif" alt="cart3d"/>
      </div>
      <div className={'hidden lg:block absolute bottom right-0 w-2/12 send-backward ' + polygon}>
        <img src="images/polygon_3d.gif" alt="cart3d"/>
      </div>
      <div className={'hidden lg:block absolute bottom right-0 w-2/12 send-backward ' + box}>
        <img src="images/Box_3d.gif" alt="cart3d"/>
      </div>
      <div className={'hidden lg:block absolute bottom right-0 w-3/12 send-backward ' + tonus}>
        <img src="images/dona_3d.gif" alt="cart3d"/>
      </div>
    </React.Fragment>
  )
}

export default Group3d
