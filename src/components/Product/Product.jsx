import React from 'react'

const Product = () => {
    return (
        <div className='h-[65vh] lg:w-[15vw] mb-30 hover:scale-105 transition-all duration-300 cursor-pointer leading-loose md:w-[30vw] w-[40vw] '>
            <img className='h-[70%] w-full bg-black' src="" alt="" />
            <h4 className='line-clamp-1'>Double -headed High -speed Steel Buddha Bead Car Knife / Woodworking Tools / Round Lathe Tool</h4>
            <h4 className='text-xl font-bold'>Rs.1,622.88 <span className='text-sm text-gray-500 line-through'>Rs.2,318.42</span></h4>
            <h4 className='px-'>5 ⭐<span>|</span> 29 sold</h4>

            <div>
                <button className='bg-black text-white w-full py-3 font-bold text-xs mb-2  border-2 border-black hover:bg-white hover:text-black'>Similar Product</button>
                <button className='w-full py-3 font-bold text-xs border-2 border-black hover:bg-black hover:text-white'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
