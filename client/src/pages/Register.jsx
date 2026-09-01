import React from 'react'
import Auth from '../components/Auth'


const Register = () => {
    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="flex items-stretch w-[1000px] h-[500px] gap-[30px] shadow-lg p-[50px] border-[0.1px] border-gray-300 rounded-[25px]">
                    <Auth className={`w-[60%]`} />
                    <div className="flex-1 flex flex-col gap-[20px] h-auto p-[30px]">
                        <div className="flex flex-col gap-[2px]">
                            <h1 className='text-[22px] font-bold '>Welcome to ProXecute!</h1>
                            <p className="font-light text-[14px]">We are glad to have you here! Please, fill in your details</p>
                        </div>

                        <form action="" className="flex flex-col gap-[15px]">
                            <input type="text" id='email' className='text-[14px] font-light py-[10px] border-b-[0.1px] border-b-gray-500 outline-none' placeholder='Email' />
                            {/* Password */}
                            <div className="flex flex-col gap-[2px]">
                                <div className="flex justify-between w-full py-[10px] border-b-[0.1px] border-b-gray-500 ">
                                    <input type="password" id='password' className='text-[14px] font-light outline-none' placeholder='Password' />
                                    <Eye />
                                </div>
                            </div>


                        </form>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Register