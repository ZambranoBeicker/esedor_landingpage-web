import React from 'react'

const Group3d = () => {
  return (
    <React.Fragment>
      <div className='hidden lg:block absolute cart top-0 w-4/12 send-backward'>
        <img src="images/carrito_3d.gif" alt="cart3d"/>
      </div>
      <div className='hidden mushroom lg:block absolute top-0 right-0 w-3/12 send-backward'>
        <img src="images/Puntero_3d.gif" alt="cart3d"/>
      </div>
      <div className='hidden polygon lg:block absolute bottom right-0 w-2/12 send-backward'>
        <img src="images/polygon_3d.gif" alt="cart3d"/>
      </div>
      <div className='hidden box lg:block absolute bottom right-0 w-2/12 send-backward'>
        <img src="images/Box_3d.gif" alt="cart3d"/>
      </div>
      <div className='hidden tonus lg:block absolute bottom right-0 w-3/12 send-backward'>
        <img src="images/dona_3d.gif" alt="cart3d"/>
      </div>
    </React.Fragment>
  )
}

export default Group3d
