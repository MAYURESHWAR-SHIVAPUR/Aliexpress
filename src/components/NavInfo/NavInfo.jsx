import React from 'react'

const NavInfo = ({img, title, description}) => {
    return (
        <div className='text-xs flex hover:scale-110 transition-all transition-duration-1000 cursor-pointer'>
            <h6 className='text-2xl mr-2'>{img}</h6>
            <div>
                <h6>{title}</h6>
                <h6>{description}</h6>
            </div>
        </div>
    )
}

export default NavInfo
