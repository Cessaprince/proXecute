import { LucideHome, Folder, CheckSquare, BarChart2, Settings } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="w-[250px] mt-[60px] py-[30px] px-[20px] bg-white h-screen fixed top-0 left-0">
            {/* Sidebar links */}
            <div className="flex flex-col w-full gap-[15px]">
                {/* 1 */}
                <NavLink
                    to='/dashboard/'
                    end //to stop it here
                    className={({ isActive }) =>
                        `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-blue-50 ${isActive ? 'bg-blue-50' : ''
                        }`
                    }
                >
                    <LucideHome className='text-gray-500' size={19} />
                    <span className='font-semibold capitalize text-gray-600 text-[15px]'>home</span>
                </NavLink>

                {/* 2 - FIXED PATHS TO BE ABSOLUTE AND UPDATED ICONS */}
                <NavLink
                    to='projects'
                    className={({ isActive }) =>
                        `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-blue-50 ${isActive ? 'bg-blue-50' : ''
                        }`
                    }
                >
                    <Folder className='text-gray-500' size={19} />
                    <span className='font-semibold capitalize text-gray-600 text-[15px]'>projects</span>
                </NavLink>

                {/* 3 */}
                <NavLink
                    to='tasks'
                    className={({ isActive }) =>
                        `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-blue-50 ${isActive ? 'bg-blue-50' : ''
                        }`
                    }
                >
                    <CheckSquare className='text-gray-500' size={19} />
                    <span className='font-semibold capitalize text-gray-600 text-[15px]'>tasks</span>
                </NavLink>

                {/* 4 */}
                <NavLink
                    to='analytics'
                    className={({ isActive }) =>
                        `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-blue-50 ${isActive ? 'bg-blue-50' : ''
                        }`
                    }
                >
                    <BarChart2 className='text-gray-500' size={19} />
                    <span className='font-semibold capitalize text-gray-600 text-[15px]'>analytics</span>
                </NavLink>

                {/* 5 */}
                <NavLink
                    to='settings'
                    className={({ isActive }) =>
                        `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-blue-50 ${isActive ? 'bg-blue-50' : ''
                        }`
                    }
                >
                    <Settings className='text-gray-500' size={19} />
                    <span className='font-semibold capitalize text-gray-600 text-[15px]'>settings</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
