import React, { useEffect, useState } from 'react'
import { Calendar1Icon, Clock, CookingPot, Dot, DotIcon, Ellipsis, ImageUp, MenuSquare, Plus, PlusIcon, SearchIcon, Trash, Trash2, Trophy, X } from 'lucide-react'
import zoom from '../assets/images/zoom-logo.png'
import person1 from '../assets/images/person1.jpeg'
import person2 from '../assets/images/person2.jpeg'
import person3 from '../assets/images/person3.jpg'
import projects from '../data/projects'
import { useNavigate } from 'react-router-dom' // new: needed to navigate on click



const Project = () => {

  const navigate = useNavigate() // new: hook to programmatically navigate

  const [createClick, setCreateClick] = useState(false);

  //the function to handle the click on the 'create a new project' button
  const clickButton = () => {
    setCreateClick(true)
  }
  //the function to handle the click on the form 
  const clickX = () => {
    setCreateClick(false)
  }

  useEffect(() => {
    document.body.style.overflow = createClick ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  },
    [createClick]
  )

  //the function to run anytime i click on 'add new tasks'
  const [newTask, setNewTask] = useState(false);
  const addTask = () => {
    setNewTask(true)
  }

  const removeTask = () => {

  }

  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  // new: handles click on the national cookathon card, navigates to project details for now
  const goToProjectDetails = () => {
    navigate('/dashboard/projects/details')
  }

  const [status, setStatus] = useState('running') // 'pending' | 'running' | 'ended'


  return (
    <div className='flex flex-col gap-[30px]'>
      <div className="flex max-lg:flex-col max-lg:items-start lg:items-center justify-between gap-[15px]">
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="font-semibold capitalize text-[30px]">my projects</h1>
          <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Explore your latest work, side projects, and experiments.</p>

        </div>
        <div className="flex max-lg:w-full max-lg:justify-between items-center gap-[10px] shrink-0">
          {/* progress bar will be here*/}
          <div className="">

          </div>

          {/* create project button */}
          <button
            onClick={clickButton}
            className="flex gap-[5px] items-center text-orange-600 border-orange-600 border-1 hover:scale-102 w-fit py-[10px] px-[20px] cursor-pointer rounded-[25px] transition-all ease-in-out duration-300">
            <Plus size={18} />
            <span className="capitalize text-[13px] font-semibold">create a new project</span>
          </button>

        </div>
      </div>

      {/* todays project*/}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-[25px] items-start [grid-template-areas:'images'_'schedule'_'table'] lg:[grid-template-areas:'images_schedule'_'table_schedule']">
        {/* the left*/}
        <div className="[grid-area:images] max-lg:mt-[20px] flex flex-col gap-[30px] items-center w-full">
          {/* product bg's at the left*/}
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[20px] w-full">
            {/* first image*/}
            <div className="flex flex-col p-[30px] gap-[15px] h-[200px] w-full bg-[url('/src/assets/images/project-bg1.webp')] bg-cover bg-center bg-no-repeat rounded-[15px]">
              <div className="flex justify-between items-center w-full">
                <span className="flex justify-center items-center w-[30px] h-[30px] rounded-[10px] bg-gray-700">
                  <Trophy size={15} className='text-white animate-bounce' />
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
            <div
              onClick={goToProjectDetails} // new: click triggers navigation
              className="flex flex-col p-[30px] gap-[15px] h-[200px] w-full bg-[url('/src/assets/images/project-bg2.jpg')] bg-cover bg-center bg-no-repeat rounded-[15px] cursor-pointer"> {/* new: cursor-pointer added to signal it's clickable */}
              <div className="flex justify-between items-center w-full">
                <span className="flex justify-center items-center w-[30px] h-[30px] rounded-[10px] bg-gray-700">
                  <CookingPot size={15} className='text-white animate-bounce' />
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
        </div>

        {/* projects due for that day */}
        <div className="[grid-area:schedule] bg-white max-lg:mt-[40px] flex-1 w-full flex flex-col gap-[25px] h-auto border-gray-300 border-[0.1px] p-[20px] shadow-sm rounded-[12px]">
          {/* the heading */}
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

        {/* heading, the div or table of completed and active projects*/}
        <div className="[grid-area:table] max-lg:mt-[40px] flex flex-col gap-[30px] w-full">

          {/* the heading*/}
          <div className="flex justify-between w-full">
            <h3 className="text-[17px] font-bold capitalize">monthly projects</h3>

            <div className="flex w-fit items-center rounded-[25px] bg-gray-200 h-fit shrink-0">
              <span
                onClick={() => setStatus('running')}
                className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'running' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
              >
                active
              </span>
              <span
                onClick={() => setStatus('pending')}
                className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'pending' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
              >
                pending
              </span>
              <span
                onClick={() => setStatus('ended')}
                className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'ended' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
              >
                ended
              </span>
            </div>
          </div>
          {/* the table */}

          <div className="flex flex-col gap-[10px] w-full">
            <div className="flex justify-between w-full border-b-[0.1px] border-gray-300">
              <div className="flex gap-[30px] items-center">
                <p
                  onClick={() => setStatus('running')}
                  className={`text-gray-500 font-semibold text-[13px] capitalize ${status === 'running' ? 'border-b-[2px] border-b-orange-600' : ''} cursor-pointer pb-[15px]`}
                >
                  active projects
                </p>
                <p
                  onClick={() => setStatus('pending')}
                  className={`text-gray-500 font-semibold text-[13px] capitalize ${status === 'pending' ? 'border-b-[2px] border-b-orange-600' : ''} cursor-pointer pb-[15px]`}
                >
                  pending
                </p>
                <p
                  onClick={() => setStatus('ended')}
                  className={`text-gray-500 font-semibold text-[13px] capitalize ${status === 'ended' ? 'border-b-[2px] border-b-orange-600' : ''} cursor-pointer pb-[15px]`}
                >
                  completed
                </p>              
                </div>
              <input type="search" name="" id="" className='h-full max-md:hidden outline-none border border-gray-300 rounded-[15px] px-[10px] py-[5px] text-xs [&::-webkit-search-cancel-button]:appearance-none' placeholder='Search here' />
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
      </div>

      {createClick && (
        <div
          className="fixed inset-0 bg-black/50 z-20 h-screen">
          <div className="fixed max-lg:w-full inset-y-0 right-0 z-20 h-screen w-[400px] bg-white flex flex-col gap-[20px] py-[10px]">
            <div className="flex justify-between w-full px-[25px] py-[5px] border-b-[0.1px] border-gray-300">
              <h3 className="font-semibold capitalize">create a new project</h3>
              <X
                onClick={clickX}
                className='cursor-pointer'
                color="grey"
                size={18}
              />
            </div>
            <form className="flex flex-col gap-[10px] px-[30px] flex-1 overflow-y-auto no-scrollbar">

              {/* project id*/}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="projectId" className='font-semibold capitalize text-[14px]'>project id</label>
                <input type="text" name="projectId" id="projectId" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Project ID' value={'P01'} readOnly />
              </div>

              {/* project name*/}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="projectName" className='font-semibold capitalize text-[14px]'>project name</label>
                <input type="text" name="projectName" id="projectName" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Cookathon' />
              </div>

              {/* project description*/}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="projectDesc" className='font-semibold capitalize text-[14px]'>project description</label>
                <input type="text" name="projectDesc" id="projectDesc" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Festival of Jollof Cookathon' />
              </div>

              {/* tasks for this project*/}
              <div className="flex flex-col gap-[10px] mt-[20px]">
                <div className="flex justify-between items-center w-full">
                  <p className='font-semibold capitalize text-[15px]'>tasks for the project</p>
                  <button
                    onClick={addTask}
                    type="button"
                    className='capitalize text-white font-semibold w-fit px-[10px] py-[7px] rounded-[25px] cursor-pointer hover:bg-orange-500 hover:scale-102 transition-all duration-500 ease-in-out text-xs flex gap-[5px] items-center bg-orange-600'><PlusIcon size={15} /><span>add new</span></button>
                </div>
                {/* the first tasks by default*/}
                <div className="flex justify-between items-center gap-[5px]">
                  <div className="flex flex-col gap-[5px] w-[45%]">

                    <label htmlFor="taskId" className='font-semibold capitalize text-[14px]'>Task ID</label>
                    <input type="text" name="taskId" id="taskId" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Cookathon' value={'T01'} readOnly />

                  </div>
                  <div className="flex flex-col gap-[5px] w-[45%]">
                    <label htmlFor="taskName" className='font-semibold capitalize text-[14px]'>task name</label>
                    <input type="text" name="taskName" id="taskName" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Cookathon' />
                  </div>

                  <Trash color='red' className='flex-1 items-start cursor-pointer' size={18} />
                </div>


                {newTask && (
                  <div className="flex justify-between items-center gap-[5px]">
                    <div className="flex flex-col gap-[5px] w-[45%]">

                      <label htmlFor="taskId" className='font-semibold capitalize text-[14px]'>Task ID</label>
                      <input type="text" name="taskId" id="taskId" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Cookathon' value={'T02'} readOnly />

                    </div>
                    <div className="flex flex-col gap-[5px] w-[45%]">
                      <label htmlFor="taskName" className='font-semibold capitalize text-[14px]'>task name</label>
                      <input type="text" name="taskName" id="taskName" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' placeholder='Cookathon' />
                    </div>

                    <Trash color='red' className='flex-1 items-start cursor-pointer' size={18} />
                  </div>
                )}



              </div>

              {/* div for date/time*/}
              <div className="flex flex-col mt-[10px] gap-[15px]">
                {/* time created */}
                <div className="flex flex-col gap-[5px]">
                  <label htmlFor="timeCreated" className='font-semibold capitalize text-[14px]'>date & time created</label>
                  <input type='datetime-local' name="timeCreated" id="timeCreated" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' />
                </div>

                {/* start and end date */}
                <div className="grid grid-cols-2 gap-[10px]">

                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="startDateTime" className='font-semibold capitalize text-[14px]'>start on</label>
                    <input type='datetime-local' name="startDateTime" id="startDateTime" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' />
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <label htmlFor="startDateTime" className='font-semibold capitalize text-[14px]'>end on</label>
                    <input type='datetime-local' name="startDateTime" id="startDateTime" className='py-[5px] px-[15px] text-[12px] text-gray-500 border-gray-400 border-[0.1px] rounded-[5px] outline-none hover:border-black transition-all duration-500 ease-in-out' />
                  </div>
                </div>

              </div>

              {/* upload image */}
              <div className="flex flex-col gap-[10px] mt-[15px]"></div>
              <p className='font-semibold capitalize text-[14px]'>supporting image <span className="text-gray-500 text-xs font-light"> (optional) </span></p>

              <div class="max-w-[200px] w-[60%] mx-auto my-[10px]">
                <label for="projectImage" class="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 hover:border-blue-500 bg-gray-50 hover:bg-blue-50/50 rounded-[15px] cursor-pointer transition-all duration-200 group">

                  <input
                    type="file"
                    name="projectImage"
                    id="projectImage"
                    class="hidden"
                    onChange={handleFileChange}
                  />

                  <div class="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                    <ImageUp className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <p class="mb-1 text-sm text-gray-700 font-semibold group-hover:text-blue-600 transition-colors">
                      {fileName ? fileName : 'Click to upload project image'}
                    </p>
                    <p class="text-xs text-gray-500">PNG, JPG or WEBP (Max 5MB)</p>
                  </div>
                </label>
              </div>

              {/* the button */}
              <div className="my-[20px]">
                <button type="submit" className='w-full border-[0.1px] border-gray-300 py-[7px] text-sm capitalize text-white bg-orange-600 font-semibold rounded-[15px] cursor-pointer hover:bg-orange-500 hover:scale-98 transition-all ease duration-500'>create the project</button>

              </div>


            </form>


          </div>

        </div>
      )}

    </div>
  )
}

export default Project