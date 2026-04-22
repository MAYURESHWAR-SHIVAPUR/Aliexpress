import React from 'react'
import { scale105 } from '../../data/Effects'

const FooterComp = ({ title, info }) => {
    return (
        <>
            <h4 className={`${scale105} font-bold text-xl leading-relaxed`}>{title}</h4>
            <p className={`${scale105} text-gray-500 mb-10 leading-relaxed`}>{info}</p>
        </>
    )
}

export default FooterComp
