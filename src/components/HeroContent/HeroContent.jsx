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
        <div className='w-screen h-fit flex items-center justify-center overflow-hidden md:mt-[10vh] md:p-20 md:px-10 xl:px-40'>
            
            <div className='w-full h-full bg-[#090957] overflow-hidden flex items-center justify-around block p-10 md:p-0 md:rounded-[60px] md:mt-0 mt-10 md:flex'>
                
                <div ref={heroRef} className='w-full h-full md:w-2/3 md:p-15'>
                    
                    <h1 className={`m-0 mb-10 text-white text-3xl lg:text-[3rem] leading-[80px] leading-relaxed font-light font-bold Ultra text-shadow-lg hover:underline ${scale110}`}>
                        Work Anywhere with Dual Screen Productivity
                    </h1>

                    <p className={`mt-[-30px] text-xs lg:text-lg text-gray-200 leading-relaxed ${scale110}`}>
                        Ultra-slim portable monitor with Full HD display. Perfect for work, travel, and gaming.
                    </p>

                    <p className={`text-xs lg:text-lg text-gray-200 font-bold leading-relaxed ${scale110}`}>
                        Full HD 1080P  |  USB-C Plug & Play  |  Lightweight & Slim
                    </p>

                    <button className='mt-10 mb-10 md:mb-0 relative left-[50%] -translate-x-1/2 px-6 py-3 font-bold text-white bg-black border-2 border-black hover:bg-transparent hover:text-white hover:border-white'>
                        View More
                    </button>

                </div>

                <div className='h-full'>
                    <img 
                        ref={imgRef} 
                        src={Hero} 
                        alt="Hero"
                        className='h-full relative right-0 bottom-0 '
                    />
                </div>

            </div>

        </div>
    )
}

export default HeroContent