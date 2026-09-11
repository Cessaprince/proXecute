import React, { useState, useEffect } from 'react'
import logo from '../assets/images/proXecute.png'
import { BellDotIcon, HamburgerIcon, LucideBell, LucideBellDot, MenuIcon, SearchIcon, LucideHome, Folder, CheckSquare, BarChart2, Settings, HelpCircle, LogOut, X } from 'lucide-react'

import profilePic from '../assets/images/default-profile-pic.jpeg'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [menuVisible, setMenuVisible] = useState(false) // new: tracks whether the panel is still mounted, stays true briefly after menuOpen goes false so the exit animation can play

    const handleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    //you want this to occur once the menuOpen is True
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    },
        [menuOpen])

    // new: syncs menuVisible with menuOpen — opening shows the panel instantly, closing waits for the slide-out animation to finish before unmounting
    useEffect(() => {
        if (menuOpen) {
            setMenuVisible(true)
        } else {
            const timer = setTimeout(() => {
                setMenuVisible(false)
            }, 350) // new: must match the animation duration below (0.35s)
            return () => clearTimeout(timer)
        }
    }, [menuOpen])

    const [profileOpen, setProfileOpen] = useState(false);

    const openingProfile = () => {
        setProfileOpen(!profileOpen)
    }

    const navigate = useNavigate();

    return (
        <div className="w-full max-lg:flex-col max-lg:flex max-lg:gap-[10px] h-[60px] max-lg:h-auto max-lg:h-auto fixed top-0 left-0 z-10 px-[30px] max-lg:px-[10px] py-[10px] shadow-lg bg-white">
            <div className="w-full flex justify-between px-[20px] items-center">

                {menuOpen ?

                    < X
                        size={18}
                        className='lg:hidden'
                        onClick={handleMenu} />
                    : <MenuIcon
                        size={18}
                        className='lg:hidden'
                        onClick={handleMenu} />
                }


                <div className="w-[150px] h-[30px] overflow-hidden">
                    <img
                        src={logo}
                        alt="ProXecute"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* everything on the right side */}

                <div className="flex gap-[18px] items-center max-md:gap-[10px]">
                    {/* search bar*/}
                    <div className="flex max-lg:hidden items-center gap-[15px] w-[300px] border-[0.1px] border-gray-400 shadow-xs w-[5px] py-[7px] px-[12px] rounded-[25px]">
                        <SearchIcon size={18} color='gray' />
                        <input placeholder='Search for anything...' type="search" name="search" id="search" className='w-full outline-none text-xs text-gray-500 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none' />
                    </div>



                    {/* notification bell that changes on notification*/}
                    <LucideBell color='gray' />

                    {/* profile area */}
                    <div className="flex gap-[10px] items-center">
                        <div className="flex flex-col items-right max-lg:hidden">
                            <h3 className='text-gray-600 font-bold text-[14px]'>Aisha Rakeem</h3>
                            <p className='text-gray-500 text-[12px]'>Lagos, Nigeria.</p>
                        </div>
                        <div
                            onClick={openingProfile}
                            className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <img src={profilePic} alt="" className="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>

            </div>


            {menuVisible && ( // new: was menuOpen — now checks menuVisible so the panel stays mounted long enough for the exit animation
                <div
                    onClick={() => {
                        setMenuOpen(false)
                    }}
                    className="fixed inset-0 bg-black/30 top-[60px]">
                    <div className={`lg:hidden w-[50%] px-[5px] fixed inset-0 top-[60px] z-20 bg-white flex flex-col gap-[10px] ${menuOpen ? 'animate-[slide-in-right_0.35s_ease-in-out]' : 'animate-[slide-out-right_0.35s_ease-in-out]'}`}> {/* new: swaps between slide-in and slide-out based on menuOpen */}
                        {/* 1 */}
                        <NavLink
                            to='/dashboard'
                            end
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
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

                        <NavLink to='settings'
                            end
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => setMenuOpen(false)}
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
                            onClick={() => {
                                navigate('/')
                            }}
                            className='flex cursor-pointer items-center gap-[5px] px-[30px] py-[10px] group transition-all duration-300 ease-in-out hover:bg-gray-50 w-full'
                        >
                            <LogOut className='text-gray-500 group-hover:text-orange-500' size={19} />
                            <span className='font-semibold capitalize text-[15px] text-gray-500 group-hover:text-orange-600'>logout</span>
                        </button>

                    </div>
                </div>

            )}

            {profileOpen && (
                <div
                    onClick={() => {
                        setProfileOpen(false)
                    }}
                    className="fixed bg-black/50 inset-0 z-[1000] h-screen w-full px-[30px] flex justify-center items-center min-h-screen">

                    <div
                        className="w-[500px] h-[500px] max-w-[350px] max-h-[350px] rounded-full overflow-hidden">
                        <img src={profilePic} alt="" className="w-full h-full object-cover" />

                    </div>
                </div>

            )}


        </div>
    )
}

export default Navbar