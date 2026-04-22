import React, { useEffect } from 'react'
import Hero from "../../assets/imgs/Hero.png"
import { fadeInUp, imgSlider } from '../../animation/Hero';
import { scale110 } from '../../data/Effects';

const HeroContent = () => {
    const heroRef = React.useRef(null);
    const imgRef = React.useRef(null);
    useEffect(() => {
        fadeInUp(heroRef.current);
        imgSlider(imgRef.current);
    }, []);
    return (
        <div className='h-fit w-screen flex items-center justify-center md:mt-[10vh] md:p-20 md:px-10 overflow-hidden xl:px-40'>
            <div className='h-full w-full bg-[#090957] md:rounded-[60px] md:flex items-center justify-around overflow-hidden md:mt-0 mt-10 block p-10 md:p-0'>
                <div ref={heroRef} className=' h-full md:w-2/3 w-full md:p-15'>
                    <h1 className={`text-shadow-lg  lg:text-[3rem] hover:underline font-bold mb-10 leading-[80px] Ultra font-light m-0 text-white ${scale110} leading-relaxed text-3xl`}>Work Anywhere with Dual Screen Productivity</h1>
                    <p className={`lg:text-lg text-gray-200 mt-[-30px] ${scale110}  text-xs leading-relaxed`}>Ultra-slim portable monitor with Full HD display. Perfect for work, travel, and gaming.</p>
                    <p className={`lg:text-lg text-gray-200 font-bold ${scale110} text-xs leading-relaxed`}>Full HD 1080P  |  USB-C Plug & Play  |  Lightweight & Slim</p>
                    <button className='mt-10 bg-black text-white py-3 px-6 font-bold hover:bg-transparent hover:text-white hover:border-white border-2 border-black relative left-[50%] -translate-x-1/2 mb-10 md:mb-0'>View More</button>
                </div>
                <div className='h-full'>
                    <img ref={imgRef} className={` h-full relative right-0 md:scale-1 scale-120 bottom-0`} src={Hero} alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
