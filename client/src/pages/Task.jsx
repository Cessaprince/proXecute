import React from 'react'
import { Trash } from 'lucide-react'
import person1 from '../assets/images/person1.jpeg'


const Task = () => {
  return (
    <div className='flex flex-col gap-[30px]'>
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize text-[30px]">my tasks</h1>
        <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Explore the details to your latest works, experiements and projects.</p>

      </div>

      <div className="flex flex-col gap-[10px] w-full">
        <div className="flex justify-between w-full border-b-[0.1px] border-gray-300">
          <div className="flex gap-[30px] items-center">
            <p className="text-gray-500 font-semibold text-[13px] capitalize border-b-[2px] border-b-orange-600 cursor-pointer pb-[15px]">active projects</p>
            <p className="text-gray-500 font-semibold text-[13px] capitalize cursor-pointer pb-[15px]">completed</p>
          </div>
          <input type="search" name="" id="" className='h-full outline-none border border-gray-300 rounded-[15px] px-[10px] py-[5px] text-xs [&::-webkit-search-cancel-button]:appearance-none' placeholder='Search here' />
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="text-xs text-gray-500 capitalize font-light">today</p>
          {/* projects (when they exist )*/}
          <div className="flex flex-col gap-[10px]">


            {/* project1 */}
            <div className="flex justify-between max-md:gap-[30px] items-center w-full">
              <div className="flex items-center gap-[10px]">
                <span className="w-[40px] h-[40px] overflow-hidden rounded-[5px]">
                  <img src={person1} alt="" className="w-full h-full object-cover" />
                </span>
                <p className="text-[14px] max-md:text-[12px] text-gray-500 font-light">Preparing Adeyemi for his mathematics olympiad </p>
              </div>
              <div className="flex items-center">
                <span className="w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
                <span className="-ml-[10px] w-[35px] max-md:w-[25px] max-md:h-[25px] h-[35px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
              </div>

            </div>

            {/* project2 */}
            <div className="flex justify-between max-md:gap-[30px] items-center w-full">
              <div className="flex items-center gap-[10px]">
                <span className="w-[40px] h-[40px] overflow-hidden rounded-[5px]">
                  <img src={person1} alt="" className="w-full h-full object-cover" />
                </span>
                <p className="text-[14px] max-md:text-[12px] text-gray-500 font-light">Preparing Adeyemi for his mathematics olympiad </p>
              </div>
              <div className="flex items-center">
                <span className="w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
                <span className="-ml-[10px] w-[35px] max-md:w-[25px] max-md:h-[25px] h-[35px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
              </div>

            </div>

            {/* project3 */}
            <div className="flex justify-between max-md:gap-[30px] items-center w-full">
              <div className="flex items-center gap-[10px]">
                <span className="w-[40px] h-[40px] overflow-hidden rounded-[5px]">
                  <img src={person1} alt="" className="w-full h-full object-cover" />
                </span>
                <p className="text-[14px] max-md:text-[12px] text-gray-500 font-light">Preparing Adeyemi for his mathematics olympiad </p>
              </div>
              <div className="flex items-center">
                <span className="w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
                <span className="-ml-[10px] w-[35px] max-md:w-[25px] max-md:h-[25px] h-[35px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
              </div>

            </div>

            {/* project4 */}
            <div className="flex justify-between max-md:gap-[30px] items-center w-full">
              <div className="flex items-center gap-[10px]">
                <span className="w-[40px] h-[40px] overflow-hidden rounded-[5px]">
                  <img src={person1} alt="" className="w-full h-full object-cover" />
                </span>
                <p className="text-[14px] max-md:text-[12px] text-gray-500 font-light">Preparing Adeyemi for his mathematics olympiad </p>
              </div>
              <div className="flex items-center">
                <span className="w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
                <span className="-ml-[10px] w-[35px] max-md:w-[25px] max-md:h-[25px] h-[35px] rounded-full bg-white border border-gray-300 flex items-center justify-center text-[16px] text-purple-500 ">
                  c
                </span>
              </div>

            </div>
          </div>

          {/* projects (when they do not exist )*/}
          <div className="hidden flex justify-center items-center h-auto py-[30px]">
            <div className="flex flex-col justify-center items-center gap-[7px] bg-gray-100 shadow-sm h-auto max-w-[300px] w-[60%] p-[30px]">
              <Trash color='gray' size={16} />
              <h3 className="text-[18px] text-gray-500 font-light">oops! No projects today</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task