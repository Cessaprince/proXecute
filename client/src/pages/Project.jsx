import React from 'react'
import { CookingPot, Plus, Trophy } from 'lucide-react'




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
      <div className="flex gap-[25px] items-center">
        {/* product bg's at the left*/}
        <div className="grid grid-cols-2 gap-[20px] w-[60%]">
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

        {/* projects due for that day */}
        <div className="flex-1 flex flex-col gap-[15px] h-auto">
          <h3 className="font-semibold text-[18px] capitalize">today's schedule</h3>
        </div>
      </div>

    </div>
  )
}

export default Project