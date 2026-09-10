import React, { useState } from 'react'
import { ArrowLeft, Calendar1Icon, CheckCircle2, Circle, Mail, Plus, Trash, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectDetails = () => {

  // status controls the pill toggle + progress bar below — visual only for now
  const [status, setStatus] = useState('pending') // 'pending' | 'running' | 'ended'
  const [checkCircle, setCheckCircle] = useState(false)

  return (
    <div className='flex flex-col gap-[30px]'>

      {/* back link */}
      <Link to='/dashboard/projects' className='flex items-center gap-[5px] w-fit text-gray-500 hover:text-orange-600 transition-all duration-300 ease-in-out'>
        <ArrowLeft size={16} />
        <span className='text-xs capitalize font-semibold'>back to projects</span>
      </Link>

      {/* header */}
      <div className="flex max-lg:flex-col max-lg:items-start lg:items-center justify-between gap-[15px]">
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="font-semibold capitalize text-[30px]">national cookathon 1.0</h1>
          <p className="text-[15px] font-light text-gray-500">Festival of Jollof Cookathon</p>
        </div>

        {/* status pill toggle */}
        <div className="flex w-fit items-center rounded-[25px] bg-gray-200 h-fit shrink-0">
          <span
            onClick={() => setStatus('pending')}
            className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'pending' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
          >
            pending
          </span>
          <span
            onClick={() => setStatus('running')}
            className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'running' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
          >
            running
          </span>
          <span
            onClick={() => setStatus('ended')}
            className={`font-semibold capitalize text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${status === 'ended' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
          >
            ended
          </span>
        </div>
      </div>

      {/* progress stepper */}
      <div className="flex flex-col gap-[15px] bg-white border-[0.1px] border-gray-300 rounded-[12px] p-[20px]">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-semibold text-[16px] capitalize">project progress</h3>
          <div className="flex gap-[10px] items-center w-fit bg-orange-200 rounded-[5px] py-[5px] px-[15px]">
            <div className="flex flex-col">
              <span className="text-xs text-gray-600 font-light">Sep 26, 2026 — Oct 1, 2026</span>
            </div>
            <Calendar1Icon size={18} />
          </div>
        </div>

        <div className="flex items-center w-full mt-[10px]">
          {/* pending */}
          <div className="flex flex-col items-center gap-[8px]">
            <CheckCircle2 size={24} className='text-orange-600' />
            <span className="text-xs capitalize font-semibold text-orange-600">pending</span>
          </div>
          <div className={`flex-1 h-[2px] mx-[10px] mb-[20px] ${status === 'running' || status === 'ended' ? 'bg-orange-600' : 'bg-gray-200'}`}></div>

          {/* running */}
          <div className="flex flex-col items-center gap-[8px]">
            {status === 'running' || status === 'ended' ? (
              <CheckCircle2 size={24} className='text-orange-600' />
            ) : (
              <Circle size={24} className='text-gray-300' />
            )}
            <span className={`text-xs capitalize font-semibold ${status === 'running' || status === 'ended' ? 'text-orange-600' : 'text-gray-400'}`}>running</span>
          </div>
          <div className={`flex-1 h-[2px] mx-[10px] mb-[20px] ${status === 'ended' ? 'bg-orange-600' : 'bg-gray-200'}`}></div>

          {/* ended */}
          <div className="flex flex-col items-center gap-[8px]">
            {status === 'ended' ? (
              <CheckCircle2 size={24} className='text-orange-600' />
            ) : (
              <Circle size={24} className='text-gray-300' />
            )}
            <span className={`text-xs capitalize font-semibold ${status === 'ended' ? 'text-orange-600' : 'text-gray-400'}`}>ended</span>
          </div>
        </div>
      </div>

      {/* tasks + collaborators */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-[25px] items-start">

        {/* tasks card */}
        <div className="flex flex-col gap-[20px] bg-white border-[0.1px] border-gray-300 rounded-[12px] p-[20px]">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-semibold text-[16px] capitalize">tasks</h3>
            <span className='text-xs text-gray-500 font-light'>2 of 4 completed</span>
          </div>

          <div className="flex flex-col gap-[15px]">

            {/* task 1 */}
            <div className="flex items-center justify-between gap-[10px] pb-[15px] border-b-[0.1px] border-gray-200">
              <div className="flex items-center gap-[12px]">
                {checkCircle ? <CheckCircle2 size={20} className='text-orange-600 cursor-pointer' />
                  : <Circle
                    onClick={() => {
                      setCheckCircle(true)
                    }}
                    size={20}
                    className='text-gray-300 hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer' />
                }

                <p className={`text-[14px] ${checkCircle ? 'line-through text-gray-400' : 'text-gray-700'}`}>Book the venue for the cookathon</p>
              </div>
              <Trash color='red' className='cursor-pointer shrink-0' size={16} />
            </div>

            {/* task 2 */}
            <div className="flex items-center justify-between gap-[10px] pb-[15px] border-b-[0.1px] border-gray-200">
              <div className="flex items-center gap-[12px]">
                {checkCircle ? <CheckCircle2 size={20} className='text-orange-600 cursor-pointer' />
                  : <Circle
                    onClick={() => {
                      setCheckCircle(true)
                    }}
                    size={20}
                    className='text-gray-300 hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer' />
                }
                <p className={`text-[14px] ${checkCircle ? 'line-through text-gray-400' : 'text-gray-700'}`}>Reach out to sponsors for jollof supplies</p>
              </div>
              <Trash color='red' className='cursor-pointer shrink-0' size={16} />
            </div>

            {/* task 3 */}
            <div className="flex items-center justify-between gap-[10px] pb-[15px] border-b-[0.1px] border-gray-200">
              <div className="flex items-center gap-[12px]">
                {checkCircle ? <CheckCircle2 size={20} className='text-orange-600 cursor-pointer' />
                  : <Circle
                    onClick={() => {
                      setCheckCircle(true)
                    }}
                    size={20}
                    className='text-gray-300 hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer' />
                }
                <p className={`text-[14px] ${checkCircle ? 'line-through text-gray-400' : 'text-gray-700'}`}>Design flyers and share on social media</p>
              </div>
              <Trash color='red' className='cursor-pointer shrink-0' size={16} />
            </div>

            {/* task 4 */}
            <div className="flex items-center justify-between gap-[10px]">
              <div className="flex items-center gap-[12px]">
                {checkCircle ? <CheckCircle2 size={20} className='text-orange-600 cursor-pointer' />
                  : <Circle
                    onClick={() => {
                      setCheckCircle(true)
                    }}
                    size={20}
                    className='text-gray-300 hover:text-orange-400 transition-all duration-300 ease-in-out cursor-pointer' />
                }
                <p className={`text-[14px] ${checkCircle ? 'line-through text-gray-400' : 'text-gray-700'}`}>Confirm judges for the tasting panel</p>
              </div>
              <Trash color='red' className='cursor-pointer shrink-0' size={16} />
            </div>

          </div>
        </div>

        {/* collaborators card */}
        <div className="flex flex-col gap-[20px] bg-white border-[0.1px] border-gray-300 rounded-[12px] p-[20px]">
          <div className="flex justify-between items-center w-full">
            <h3 className="font-semibold text-[16px] capitalize">collaborators</h3>
            <Users size={18} className='text-gray-400' />
          </div>

          {/* add collaborator input — UI only for now */}
          <div className="flex gap-[8px] items-center">
            <div className="flex items-center gap-[8px] w-full py-[7px] px-[12px] border-gray-400 border-[0.1px] rounded-[8px] hover:border-black transition-all duration-500 ease-in-out">
              <Mail size={14} className='text-gray-400' />
              <input type="email" placeholder='Add collaborator by email' className='w-full text-[12px] outline-none text-gray-600' />
            </div>
            <button type='button' className='shrink-0 flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white rounded-[8px] w-[34px] h-[34px] cursor-pointer transition-all duration-300 ease-in-out'>
              <Plus size={16} />
            </button>
          </div>

          {/* collaborators list */}
          <div className="flex flex-col gap-[15px]">

            {/* collaborator 1 */}
            <div className="flex items-center gap-[12px]">
              <span className="w-[35px] h-[35px] shrink-0 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[14px] font-semibold text-orange-600 uppercase">
                k
              </span>
              <p className="text-[13px] text-gray-600 font-light lowercase">kamalmanocha@gmail.com</p>
            </div>

            {/* collaborator 2 */}
            <div className="flex items-center gap-[12px]">
              <span className="w-[35px] h-[35px] shrink-0 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[14px] font-semibold text-orange-600 uppercase">
                d
              </span>
              <p className="text-[13px] text-gray-600 font-light lowercase">divineoke2028@gmail.com</p>
            </div>

            {/* collaborator 3 */}
            <div className="flex items-center gap-[12px]">
              <span className="w-[35px] h-[35px] shrink-0 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-[14px] font-semibold text-orange-600 uppercase">
                c
              </span>
              <p className="text-[13px] text-gray-600 font-light lowercase">cessaprince125@gmail.com</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default ProjectDetails