import React from 'react'
import { footerData } from '../../data/footer'

const footer2 = () => {
  return (
    <div className='h-20 w-screen bg-black'>
      <p className='text-white text-center text-xs py-4 md:text-[0.6rem]'>{footerData}</p>
    </div>
  )
}

export default footer2
