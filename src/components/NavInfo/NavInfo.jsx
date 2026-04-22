import React from 'react'

const NavInfo = ({img, title, description}) => {
    return (
        <div className='text-xs flex hover:scale-110 transition-all transition-duration-1000 cursor-pointer md:text-[0.5rem]'>
            <h6 className='lg:text-2xl md:mr-2 md:text-lg  text-md'>{img}</h6>
            <div className='hidden md:block'>
                <h6>{title}</h6>
                <h6>{description}</h6>
            </div>
        </div>
    )
}

export default NavInfo
