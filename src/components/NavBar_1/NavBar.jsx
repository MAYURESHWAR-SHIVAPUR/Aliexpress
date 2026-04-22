import React, { useEffect } from 'react'
import Style from "./NavBar.module.css"
import NavInfo from '../NavInfo/NavInfo'

import { fadeInUp } from '../../animation/nav'

const NavBar = () => {
  const boxRef = React.useRef(null);
  useEffect(() => {
    fadeInUp(boxRef.current);
  }, []);

  return (
    <div ref={boxRef} className='h-fit w-screen flex items-center justify-between text-4xl font-bold p-5 bg-[#f0f1f3] fixed top-0 z-50'>
      <div className='flex items-center transition-all transition-duration-1000 cursor-pointer'>
        <h1 className='Goldman hover:scale-110'>AliExpress</h1>
        <i className="fa-solid fa-bars ml-5 text-xl hover:scale-110"></i>
      </div>
      <div className="w-1/2 md:w-1/3 rounded-full border-2 border-black overflow-hidden flex items-center justify-between h-fit">
        <input
          type="text"
          className='w-[80%] text-lg px-4 focus:outline-none md:text-sm'
          placeholder='Search products...'
        />
        <button className='w-[10%] h-10 text-lg cursor-pointer'><i class="fa-brands fa-algolia"></i></button>
        <button className='w-[10%] h-10 bg-black text-white text-lg cursor-pointer md:w-[10%]'><i className="fa-solid fa-search"></i></button>
      </div>

      <NavInfo img="" title="Download the" description="AliExpress app" />
      <NavInfo img="🌐" title="EN/" description="INR" />
      <NavInfo img="👤" title="Welcome" description="Sign in / Register" />
      <NavInfo img="🛒" title="0" description="Cart" />
    </div>


    // Welcome
    // Sign in / Register
    // 0
    // Cart

  )
}

export default NavBar
