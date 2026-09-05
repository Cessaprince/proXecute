import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import logo from '../assets/images/proXecute.png'
import { ChevronUp, MoveUpRight, Plus } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { BarChart } from '@mui/x-charts/BarChart';
import ProjectAnalytics from '../components/ProjectAnalytics'
import person1 from '../assets/images/person1.jpeg'
import person2 from '../assets/images/person2.jpeg'
import person3 from '../assets/images/person3.jpg'
import person4 from '../assets/images/person4.avif'
import { } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-[22px] max-md:gap-[25px] max-lg:w-full'>

            <div className="flex max-md:flex-col max-md:items-start max-md:gap-[20px] justify-between items-center w-full">
                <div className="flex flex-col">
                    <h1 className="font-semibold capitalize text-[30px]">dashboard</h1>
                    <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Plan, prioritize, and accomplish your tasks with ease.</p>

                </div>

                {/* buttons */}
                <div className="flex max-md:justify-between max-md:w-full items-center gap-[10px]">
                    <button 
                    onClick={()=>{
                        navigate('projects')
                    }}
                    className="flex gap-[5px] text-white items-center bg-orange-600 w-fit py-[12px] px-[20px] cursor-pointer rounded-[25px] hover:bg-orange-500  transition-all ease-in-out duration-300 hover:-translate-y-1">
                        <Plus size={18} />
                        <span className="capitalize text-[13px]">add project</span>
                    </button>

                    <button className="font-bold text-orange-600 items-center border-[1px] border-orange-600 w-fit py-[9px] px-[20px] cursor-pointer rounded-[25px] transition-all ease-in-out duration-300 hover:-translate-y-1">
                        <span className="capitalize text-[13px]">import data</span>
                    </button>

                </div>
            </div>

            <div className="grid grid-cols-4 gap-[20px] max-md:grid-cols-1 max-lg:grid-cols-2">
                {/* total projects */}
                <Link to='projects' className="flex flex-col shadow-lg gap-[10px] group hover:scale-97 cursor-pointer transition-all ease-in-out duration-400 p-[20px] bg-linear-to-b from-orange-600 to-orange-400 rounded-[18px] border-[0.1px] h-auto border-gray-100">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="text-white capitalize text-[14px]">total projects</h3>
                        <span className='h-[30px] w-[30px] rounded-full flex items-center justify-center bg-white group-hover:rotate-50'>
                            <MoveUpRight size={15} />
                        </span>
                    </div>
                    <h1 className="text-[42px] text-white font-bold">24</h1>
                    <div className="flex gap-[10px] items-center ">
                        <div className="flex gap-[1px] px-[3px] items-center border-[1px] rounded-[5px] border-white w-fit text-white">
                            <span className='text-xs'>5</span>
                            <ChevronUp size={12} />

                        </div>
                        <span className="text-xs text-gray-100">Increased from last month</span>
                    </div>

                </Link>

                {/* ended projects */}
                <Link to='projects' className="flex flex-col shadow-lg gap-[10px] group hover:scale-97 cursor-pointer transition-all ease-in-out duration-400 p-[20px]  rounded-[18px] border-[0.1px] h-auto border-gray-300">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="capitalize text-[14px]">ended projects</h3>
                        <span className='h-[30px] w-[30px] rounded-full border-[0.1px] flex items-center justify-center bg-white group-hover:rotate-50'>
                            <MoveUpRight size={15} />
                        </span>
                    </div>
                    <h1 className="text-[42px] font-bold">10</h1>
                    <div className="flex gap-[10px] items-center ">
                        <div className="flex gap-[1px] px-[3px] items-center border-[1px] rounded-[5px] border-gray-400 w-fit">
                            <span className='text-xs'>6</span>
                            <ChevronUp size={12} />

                        </div>
                        <span className="text-xs text-gray-500">Increased from last month</span>
                    </div>

                </Link>

                {/* running projects */}
                <Link to='projects' className="flex flex-col shadow-lg gap-[10px] group hover:scale-97 cursor-pointer transition-all ease-in-out duration-400 p-[20px]  rounded-[18px] border-[0.1px] h-auto border-gray-300">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="capitalize text-[14px]">running projects</h3>
                        <span className='h-[30px] w-[30px] rounded-full border-[0.1px] flex items-center justify-center bg-white group-hover:rotate-50'>
                            <MoveUpRight size={15} />
                        </span>
                    </div>
                    <h1 className="text-[42px] font-bold">12</h1>
                    <div className="flex gap-[10px] items-center ">
                        <div className="flex gap-[1px] px-[3px] items-center border-[1px] rounded-[5px] border-gray-400 w-fit">
                            <span className='text-xs'>2</span>
                            <ChevronUp size={12} />

                        </div>
                        <span className="text-xs text-gray-500">Increased from last month</span>
                    </div>

                </Link>

                {/* pending projects */}
                <Link to='projects' className="flex flex-col shadow-lg gap-[10px] group hover:scale-97 cursor-pointer transition-all ease-in-out duration-400 p-[20px]  rounded-[18px] border-[0.1px] h-auto border-gray-300">
                    <div className="flex justify-between items-center w-full">
                        <h3 className="capitalize text-[14px]">pending projects</h3>
                        <span className='h-[30px] w-[30px] rounded-full border-[0.1px] flex items-center justify-center bg-white group-hover:rotate-50'>
                            <MoveUpRight size={15} />
                        </span>
                    </div>
                    <h1 className="text-[42px] font-bold">2</h1>
                    <span className="text-xs text-gray-500">On Discuss</span>



                </Link>
            </div>

            <div className="flex gap-[15px] items-stretch max-lg:flex-col">

                {/* the chart */}
                <div className="w-[50%] max-lg:w-full h-[300px] flex flex-col gap-[10px] bg-white rounded-[10px] border-[0.1px] border-gray-300 p-[20px]">
                    <h3 className="text-[16px] capitalize font-semibold">project analytics (weekly)</h3>
                    <ProjectAnalytics />
                </div>

                {/* reminders */}
                <div className="w-[25%] max-lg:w-full h-auto flex flex-col gap-[10px] bg-white rounded-[10px] border-[0.1px] border-gray-200 p-[20px]">
                    <h3 className="text-[14px] capitalize font-semibold">reminders</h3>
                    <h1 className="text-[26px] font-semi-bold capitalize">meeting with mr. thomson</h1>
                    <span className="text-gray-500 text-xs font-light uppercase">2:00pm to 3:00pm</span>
                    <a href="#" target="_blank" rel="noopener noreferrer" className='mt-[10px] capitalize text-white text-xs w-fit font-semibold bg-orange-600 hover:bg-orange-500 py-[10px] px-[20px] rounded-[25px]'>join meet now</a>
                </div>

                {/* top collaborators */}
                <div className="w-[25%] max-lg:w-full h-auto flex flex-col gap-[10px] bg-white rounded-[10px] border-[0.1px] border-gray-200 p-[20px]">
                    <h3 className="text-[14px] capitalize font-semibold">top collaborators</h3>
                    {/* collaborators div */}
                    <div className="flex flex-col gap-[15px]">
                        {/*person 1 */}
                        <div className="flex gap-[15px] items-center">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img src={person1} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[14px] capitalize font-semibold">kamal manocha</p>
                                <span className="text-gray-500 text-xs font-light lowercase">kamalmanocha@gmail.com</span>

                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img src={person2} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[14px] capitalize font-semibold">divine okechukwu</p>
                                <span className="text-gray-500 text-xs font-light lowercase">divineoke2028@gmail.com</span>

                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img src={person3} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[14px] capitalize font-semibold">cessa prince</p>
                                <span className="text-gray-500 text-xs font-light lowercase">cessaprince125@gmail.com</span>

                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center">
                            <div className="w-[50px] h-[50px] overflow-hidden rounded-full">
                                <img src={person4} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[14px] capitalize font-semibold">jeffery bade</p>
                                <span className="text-gray-500 text-xs font-light lowercase">jeffthebadboy@gmail.com</span>

                            </div>
                        </div>


                    </div>
                </div>

            </div>




        </div>
    )
}

export default Home