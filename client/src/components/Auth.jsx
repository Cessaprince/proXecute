import React from 'react'
import authImg from '../assets/images/auth-form-img.avif'

const Auth = ({ className }) => {
    return (
        <div className={`overflow-hidden h-[400px] max-md:h-[60px] max-md:flex max-md:justify-center ${className}`}>
            <img src={authImg} alt="" className='w-full h-full object-cover max-md:object-contain'/>
        </div>
    )
}

export default Auth