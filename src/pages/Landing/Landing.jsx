import React from 'react'
import Style from "./Landing.module.css"
import NavBar from '../../components/NavBar_1/NavBar'
import HeroContent from '../../components/HeroContent/HeroContent'
import Product from '../../components/Product/Product'
import Footer from '../../components/footer/footer'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar />
      <hr className='text-gray-300' />
      <HeroContent />
      <div className=''>
        <h4 className='text-2xl font-bold p-5'>More to love</h4>
        <div className='w-screen md:px-15 md:mb-10 flex flex-wrap items-center gap-5 justify-between overflow-x-hidden px-5'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <button className='bg-black text-white py-3 px-6 font-bold hover:bg-white hover:text-black border-2 border-black relative left-[50%] -translate-x-1/2'>View More</button>
      </div>
      <hr className='text-gray-300 mt-10' />
      <Footer />
    </div>
  )
}


export default Landing
