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
        <div className='h-fit w-screen flex items-center justify-center mt-[10vh] p-20'>
            <div className='h-full w-full bg-[#090957] rounded-[60px] flex items-center justify-around overflow-hidden'>
                <div ref={heroRef} className=' h-full w-2/3 p-15'>
                    <h1 className={`text-shadow-lg  text-[3rem] hover:underline font-bold mb-10 leading-[80px] Ultra font-light m-0 text-white ${scale110} md:text-3xl leading-relaxed`}>Work Anywhere with Dual Screen Productivity</h1>
                    <p className={`text-lg text-gray-200 mt-[-30px] ${scale110} md:text-xs leading-relaxed`}>Ultra-slim portable monitor with Full HD display. Perfect for work, travel, and gaming.</p>
                    <p className={`text-lg text-gray-200 font-bold ${scale110} md:text-xs leading-relaxed`}>Full HD 1080P  |  USB-C Plug & Play  |  Lightweight & Slim</p>
                    <button className='mt-10 bg-black text-white py-3 px-6 font-bold hover:bg-transparent hover:text-white hover:border-white border-2 border-black relative left-[50%] -translate-x-1/2'>View More</button>
                </div>
                <div className='h-full'>
                    <img ref={imgRef} className={` h-full relative right-0`} src={Hero} alt="Hero" />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
