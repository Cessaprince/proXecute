import React from 'react'
import { Calendar1Icon, Clock, CookingPot, Dot, DotIcon, Ellipsis, MenuSquare, Plus, Trophy } from 'lucide-react'
import zoom from '../assets/images/zoom-logo.png'
import person1 from '../assets/images/person1.jpeg'
import person2 from '../assets/images/person2.jpeg'
import person3 from '../assets/images/person3.jpg'



const Project = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold capitalize text-[30px]">my projects</h1>
          <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Explore your latest work, side projects, and experiments.</p>

        </div>
        <div className="flex max-md:justify-between max-md:w-full items-center gap-[10px]">
          {/* progress bar will be here*/}

          {/* create project button */}
          <button
            className="flex gap-[5px] items-center text-orange-600 border-orange-600 border-1 hover:scale-102 w-fit py-[10px] px-[20px] cursor-pointer rounded-[25px] transition-all ease-in-out duration-300">
            <Plus size={18} />
            <span className="capitalize text-[13px] font-semibold">create a new project</span>
          </button>

        </div>
      </div>

      {/* todays project*/}
      <div className="flex gap-[25px] items-start">
        {/* the left*/}
        <div className="flex flex-col gap-[30px] items-center w-[60%]">
          {/* product bg's at the left*/}
          <div className="grid grid-cols-2 gap-[20px] w-full">
            {/* first image*/}
            <div className="flex flex-col p-[30px] gap-[15px] h-[200px] w-full bg-[url('/src/assets/images/project-bg1.webp')] bg-cover bg-center bg-no-repeat rounded-[15px]">
              <div className="flex justify-between items-center w-full">
                <span className="flex justify-center items-center w-[30px] h-[30px] rounded-[10px] bg-gray-700">
                  <Trophy size={15} className='text-white' />
                </span>
                <span className="text-white text-xs">
                  Sep 26, 2026
                </span>
              </div>
              <div className="flex justify-end">
                <h3 className="font-light text-white text-[15px] w-[50%] capitalize text-right">
                  tonia's dance competeition
                </h3>
              </div>
            </div>

            {/* second image*/}
            <div className="flex flex-col p-[30px] gap-[15px] h-[200px] w-full bg-[url('/src/assets/images/project-bg2.jpg')] bg-cover bg-center bg-no-repeat rounded-[15px]">
              <div className="flex justify-between items-center w-full">
                <span className="flex justify-center items-center w-[30px] h-[30px] rounded-[10px] bg-gray-700">
                  <CookingPot size={15} className='text-white' />
                </span>
                <span className=" text-xs">
                  Oct 1, 2026
                </span>
              </div>
              <div className="flex justify-end">
                <h3 className="font-light text-[15px] w-[50%] capitalize text-right">
                  national cookathon 1.0
                </h3>
              </div>


            </div>
          </div>

          <div className="flex justify-between w-full">
            <h3 className="text-[15px] font-bold capitalize">monthly projects</h3>

            <div className="flex w-fit  items-center rounded-[25px] bg-gray-200 h-fit">
              <span className=" font-semibold capitalize text-xs capitalize bg-orange-600 text-white py-[5px] px-[12px] rounded-[25px]">active</span>
            <span className=" font-semibold capitalize text-xs capitalize px-[10px] py-[5px] rounded-[25px]">pending</span> {/* bg-orange-600 py-[5px] px-[10px] if active text-white*/}

            </div>
          </div>

        </div>


        {/* projects due for that day */}
        <div className="flex-1 flex flex-col gap-[25px] h-auto border-gray-300 border-[0.1px] p-[20px] shadow-sm rounded-[12px]">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[18px] capitalize">today's schedule</h3>
            <div className="flex gap-[10px] items-center w-fit bg-orange-200 rounded-[5px] py-[5px] px-[15px]">
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 font-light">24-09</span>
                <span className="text-xs text-gray-600 font-light">2026</span>
              </div>
              <Calendar1Icon size={18} />
            </div>
          </div>

          {/* all the tasks for the day*/}
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[15px]">
              <div className="flex justify-between w-full">
                <div className="flex flex-col gap-[5px]">
                  <span className="text-red-400 text-xs">30 minutes call with teammates</span>
                  <h3 className="font-semibold text-[16px] capitalize">outfit clariity call</h3>
                </div>
                <div className="w-[50px] h-[30px] overflow-hidden">
                  <img src={zoom} alt="" className='w-full h-full object-cover' />
                </div>

              </div>

              <a
                href="https://zoom.us" // Changed from .com to .us
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-[10px] bg-orange-600 text-center capitalize text-sm text-white rounded-[10px] hover:scale-102 hover:bg-orange-500"
              >
                join here
              </a>
            </div>

            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-[5px]">
                <h3 className="font-semibold text-[17px] capitalize">design project</h3>
                <div className="flex gap-[7px] items-center">
                  <Clock color='gray' size={18} />
                  <span className="text-[14px] text-gray-600 font-light capitalize">in progress</span>

                </div>

              </div>
              <Ellipsis color='gray' className='cursor-pointer' />
            </div>

            <div className="grid grid-cols-3 items-center gap-[30px] w-full">

              {/* tasks and their completed rates*/}
              <div className="flex flex-col gap-[2px]">
                <span className="text-[12px] text-gray-600 font-light capitalize">completed</span>
                <div className="flex items-start gap-[5px]">
                  <h3 className="font-semibold text-[35px]">10</h3>
                  <span className="w-[10px] rounded-full h-[10px] bg-green-500"></span>
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <span className="text-[12px] text-gray-600 font-light capitalize">in progress</span>
                <div className="flex items-start gap-[5px]">
                  <h3 className="font-semibold text-[35px]">14</h3>
                  <span className="w-[10px] rounded-full h-[10px] bg-red-500"></span>

                </div>

              </div>

              <div className="flex flex-col gap-[10px]">
                <span className="text-[12px] text-gray-600 font-light capitalize">collaborators</span>
                <div className="flex gap-[10px] items-center">
                  <span className="w-[35px] h-[35px] overflow-hidden rounded-full">
                    <img src={person1} alt="" className='w-full h-full object-cover' />
                  </span>
                  <span className="w-[35px] h-[35px] -ml-[20px] border-[0.1px] border-gray-200 overflow-hidden rounded-full">
                    <img src={person2} alt="" className='w-full h-full object-cover' />
                  </span>
                  <span className="w-[35px] h-[35px] -ml-[20px] border-[0.1px] border-gray-200 overflow-hidden rounded-full">
                    <img src={person3} alt="" className='w-full h-full object-cover' />
                  </span>

                </div>

              </div>
            </div>
          </div>




        </div>
      </div>

    </div>
  )
}

export default Project