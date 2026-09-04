import React from 'react'
import logo from '../assets/images/proXecute.png'
import { BellDotIcon, LucideBell, LucideBellDot, SearchIcon } from 'lucide-react'
import profilePic from '../assets/images/default-profile-pic.jpeg'

const Navbar = () => {
    return (
        <div className="w-full h-[60px] fixed top-0 left-0 z-10 px-[30px] py-[10px] shadow-lg flex justify-between bg-white">
            <div className="w-[150px] h-[30px] overflow-hidden">
                <img
                    src={logo}
                    alt="ProXecute"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* everything on the right side */}

            <div className="flex gap-[20px] items-center">
                {/* search bar*/}
                <div className="flex items-center gap-[15px] w-[300px] border-[0.1px] border-gray-400 shadow-xs w-[5px] py-[7px] px-[12px] rounded-[25px]">
                    <SearchIcon size={18} color='gray' />
                    <input placeholder='Search for anything...' type="search" name="search" id="search" className='w-full outline-none text-xs text-gray-500 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none' />
                </div>

                {/* notification bell that changes on notification*/}
                <LucideBell color='gray'/>

                {/* profile area */}
                <div className="flex gap-[10px] items-center">
                    <div className="flex flex-col items-right">
                        <h3 className='text-gray-600 font-bold text-[14px]'>Aisha Rakeem</h3>
                        <p className='text-gray-500 text-[12px]'>Lagos, Nigeria.</p>
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                        <img src={profilePic} alt="" className="w-full h-full object-cover" />
                    </div>
            

                </div>
            </div>
        </div>
    )
}

export default Navbar