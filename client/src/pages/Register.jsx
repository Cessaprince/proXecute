import React, { useState } from 'react'
import Auth from '../components/Auth'
import { Eye, EyeClosed, SpaceIcon, X } from 'lucide-react';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('')

    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    const handleVisibilityPwd = () => {
        setSeePassword(!seePassword)
    }

    const handleVisibilityConfirmPwd = () => {
        setSeeConfirmPassword(!seeConfirmPassword)
    }

    const navigate = useNavigate()

    const logic = (password.trim().length < 8) && (password !== '');
    const confirmPwdLogic = (password !== confirmPassword) && (confirmPassword !== '')

    const formSubmit = (e) => {
        e.preventDefault()
        if (!password || !confirmPassword || !email) {
            iziToast.warning({
                title: 'Warning',
                message: 'Ensure that all form fields are filled.',
                position: 'topRight',
                backgroundColor: 'red',
                messageColor: 'white',
                titleColor: 'white',
                timeout: 3000,
                iconColor: 'white'
            })

            return

        }

        if (password.trim().length < 8) {
            iziToast.warning({
                title: 'Warning',
                message: 'Ensure that the password characters is 8 or more.',
                position: 'topRight',
                backgroundColor: 'red',
                messageColor: 'white',
                titleColor: 'white',
                timeout: 3000,
                iconColor: 'white'
            })

            return
        }

        iziToast.success({
            title: 'Succesful!',
            message: 'You have successfully logged in.',
            position: 'topRight',
        })
        navigate('/')
    }

    return (
        <div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="flex max-md:flex-col items-stretch max-md:items-center max-w-[1000px] w-[90%] h-auto gap-[20px] max-md:gap-[7px] shadow-lg p-[50px] max-md:px-[35px] max-md:py-[40px] border-[0.1px] border-gray-300 rounded-[25px] max-md:rounded-[10px]">
                    <Auth className={`w-[50%] flex-shrink-0`} />
                    <div className="flex-1 flex flex-col gap-[20px] max-md:gap-[22px] h-auto p-[20px] max-md:p-[0px] max-md:w-full">
                        <div className="flex flex-col gap-[2px] max-md:gap-[0px] max-md:text-center">
                            <h1 className='text-[22px] font-bold max-md:text-[20px]'>Welcome to ProXecute!</h1>
                            <p className="font-light text-[14px] max-md:text-[11px]">We are glad to have you here! Please, fill in your details</p>
                        </div>

                        <form action="" className="flex flex-col gap-[15px] w-full">

                            {/* Email */}
                            <input
                                type="text"
                                id='email'
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                value={email}
                                className='w-full text-[14px] max-md:text-[12px] font-light py-[7px] border-b-[0.1px] border-b-gray-500 outline-none' placeholder='Email' />

                            {/* Password */}
                            <div className="flex flex-col gap-[3px]">
                                <div className="flex justify-between items-center w-full py-[7px] border-b-[0.1px] border-b-gray-500 ">
                                    <input
                                        type={seePassword ? `text` : `password`}
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        value={password}
                                        id='password'
                                        className='text-[14px] max-md:text-[12px] font-light outline-none w-full' placeholder='Password' />

                                    {seePassword ? <Eye color='gray' className='hover:cursor-pointer h-[18px] max-md:h-[15px]' onClick={handleVisibilityPwd} /> : <EyeClosed color='gray' className='hover:cursor-pointer h-[18px] max-md:h-[15px]' size={20} onClick={handleVisibilityPwd} />}
                                </div>

                                {logic &&
                                    <span className="text-red-500 text-xs font-light">Password should be 8 characters or more.</span>
                                }

                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col gap-[3px]">
                                <div className="flex justify-between items-center w-full py-[7px] border-b-[0.1px] border-b-gray-500 ">
                                    <input
                                        type={seeConfirmPassword ? `text` : `password`}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value)
                                        }}
                                        value={confirmPassword}
                                        id='confirmPassword'
                                        className='text-[14px] max-md:text-[12px] font-light outline-none w-full'
                                        placeholder='Confirm Password' />

                                    {seeConfirmPassword ? <Eye color='gray' className='hover:cursor-pointer h-[18px] max-md:h-[15px]' onClick={handleVisibilityConfirmPwd} /> : <EyeClosed color='gray' className='hover:cursor-pointer h-[18px] max-md:h-[15px]' size={20} onClick={handleVisibilityConfirmPwd} />}
                                </div>

                                {confirmPwdLogic &&
                                    <span className="text-red-500 text-xs font-light">Password is not similar</span>
                                }

                            </div>

                            {/* terms and conditions */}
                            <div className="flex justify-between w-full items-center">
                                <div className="flex gap-[5px] items-center group">
                                    <input type="checkbox" name="terms_check" id="terms_check" className='w-[15px] max-md:w-[10px] h-[30px] max-md:h-[20px] group-hover:cursor-pointer bg-red' />
                                    <label htmlFor="" className="text-xs capitalize max-md:text-[11px]">terms & condition</label>
                                </div>
                                <Link to='#' className='text-xs hover:text-red-400 border-b-[0.1px] border-b-black max-md:text-[11px]'>Forgot password</Link>

                            </div>

                            {/* button */}
                            <button
                                type="submit"
                                onClick={(e) => {
                                    formSubmit(e)
                                }}
                                className='w-full bg-black text-white font-normal max-md:text-[14px] py-[10px] max-md:py-[7px] rounded-[10px] hover:cursor-pointer hover:bg-gray-600'
                            >Register
                            </button>
                            <p className="text-sm text-center max-md:text-[12px]">Have an account? <Link to='/' className="text-sm  hover:text-red-500 max-md:text-[12px] border-b-[0.1px] border-b-black">Login here</Link></p>

                        </form>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Register