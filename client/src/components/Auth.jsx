import React from 'react'
import authImg from '../assets/images/auth-form-img.avif'

const Auth = ({ className }) => {
    return (
        <div>
            <div className="{`overflow-hidden h-[400px] ${className}`}">
                <img src={authImg} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default Auth