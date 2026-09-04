import { LucideHome, Folder, CheckSquare, BarChart2, Settings, HelpCircle, LogOut } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="max-lg:hidden w-[250px] mt-[60px] py-[30px] px-[20px] bg-white h-screen fixed top-0 left-0 flex flex-col gap-[40px]">
            {/* Sidebar links */}

            <div className="flex flex-col gap-[15px] mt-[20px]">
                <span className="text uppercase px-[30px] text-sm text-gray-500">menu</span>
                <div className="flex flex-col w-full gap-[12px]">
                    {/* 1 */}
                    <NavLink
                        to='/dashboard'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <LucideHome className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>Home</span>
                            </>
                        )}
                    </NavLink>

                    {/* 2 */}
                    <NavLink
                        to='projects'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Folder className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>projects</span>
                            </>
                        )}
                    </NavLink>

                    {/* 3 */}
                    <NavLink
                        to='tasks'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <CheckSquare className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>tasks</span>
                            </>
                        )}
                    </NavLink>

                    {/* 4 */}
                    <NavLink
                        to='analytics'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <BarChart2 className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>analytics</span>
                            </>
                        )}
                    </NavLink>

                </div>
            </div>

            {/* General */}
            <div className="flex flex-col gap-[15px] mt-[20px]">
                <span className="text uppercase px-[30px] text-sm text-gray-500">general</span>
                <div className="flex flex-col w-full gap-[12px]">
                    {/* 1 */}

                    <NavLink
                        to='settings'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Settings className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>settings</span>
                            </>
                        )}
                    </NavLink>

                    {/* 2 */}
                    <NavLink
                        to='help'
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <HelpCircle className={`${isActive ? 'text-orange-600' : 'text-gray-500'} group-hover:text-orange-500`} size={19} />
                                <span className={`font-semibold capitalize text-[15px] group-hover:text-orange-600 ${isActive ? 'text-orange-600' : 'text-gray-500'}`}>help</span>
                            </>
                        )}
                    </NavLink>

                    {/* 3 */}
                    <button
                        className='flex items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 w-full'
                    >
                        <LogOut className='text-gray-500 group-hover:text-orange-500' size={19} />
                        <span className='font-semibold capitalize text-[15px] text-gray-500 group-hover:text-orange-600'>logout</span>
                    </button>


                </div>
            </div>


        </div>
    )
}

export default Sidebar
