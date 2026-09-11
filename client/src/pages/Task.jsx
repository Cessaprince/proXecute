import React, { useState } from 'react'
import { Trash } from 'lucide-react'
import person1 from '../assets/images/person1.jpeg'
import { Link, useNavigate } from 'react-router-dom'


const Task = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState('all'); // 'pending' | 'running' | 'ended'


  return (
    <div className='flex flex-col gap-[30px]'>

      {/* the heading */}
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize text-[30px]">my tasks</h1>
        <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Explore the details to your latest works, experiements and projects.</p>
      </div>

      {/* filter + search */}
      <div className="flex max-md:flex-col max-md:gap-[15px] justify-between items-center w-full">
        <div className="flex w-fit items-center rounded-[25px] bg-gray-200 h-fit">
          <span
            onClick={() => {
              setStatus('all')
            }}
            className={`font-semibold capitalize text-xs px-[10px] py-[5px] rounded-[25px] ${status === 'all' ? 'bg-orange-600 text-white' : ''}`}>
              all tasks
            </span>            
          <span
            onClick={() => {
              setStatus('running')
            }}
            className={`font-semibold capitalize text-xs px-[10px] py-[5px] rounded-[25px] ${status === 'running' ? 'bg-orange-600 text-white' : ''}`}>running</span>
          <span
            onClick={() => {
              setStatus('ended')
            }}
            className={`font-semibold capitalize text-xs px-[10px] py-[5px] rounded-[25px] ${status === 'ended' ? 'bg-orange-600 text-white' : ''}`}>
              ended
            </span>        
            </div>

      </div>

      {/* the table */}
      <div className="overflow-y-auto no-scrollbar">
        <table className='border-collapse w-full border border-gray-300 tracking-wider text-[12px]'>
          <thead className='bg-orange-600 text-white'>
            <tr className='border border-gray-300'>
              <th scope="col" className='p-[15px] text-left capitalize'>task ID</th>
              <th scope="col" className='p-[15px] text-left capitalize'>task name</th>

              <th scope="col" className='p-[15px] text-left capitalize'>project</th>
              <th scope="col" className='p-[15px] text-left capitalize'>created at</th>
              <th scope="col" className='p-[15px] text-left capitalize'>ended on</th>
              <th scope="col" className='p-[15px] capitalize'>status</th>
            </tr>
          </thead>


          {/* table body*/}
          <tbody className=''>


            {/*task1 */}
            <tr className='text-center bg-white border-b border-gray-300 font-light'>
              <td scope="row" className='p-[15px] text-left'>T01</td>
              <td className='p-[15px] text-left'>Book the venue for the cookathon</td>
              <td className='p-[15px] capitalize text-left'>
                <Link to='/dashboard/projects/details' className='hover:text-orange-600 cursor-pointer'>
                  national cookathon 1.0
                </Link>
              </td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize flex justify-center items-center'>
                <span className='w-fit px-[10px] py-[5px] text-white font-semibold bg-yellow-400 rounded-[25px]'>
                  running
                </span>
              </td>
            </tr>

            {/*task2 */}
            <tr className='text-center bg-white border-b border-gray-300 font-light'>
              <td scope="row" className='p-[15px] text-left'>T02</td>
              <td className='p-[15px] text-left'>Reach out to sponsors for jollof supplies</td>
              <td className='p-[15px] capitalize text-left'>
                <Link to='/dashboard/projects/details' className='hover:text-orange-600 cursor-pointer'>
                  national cookathon 1.0
                </Link>
              </td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize flex justify-center items-center'>
                <span className='w-fit px-[10px] py-[5px] text-white font-semibold bg-green-400 rounded-[25px]'>
                  finished
                </span>
              </td>
            </tr>


            {/*task3 */}
            <tr className='text-center bg-white border-b border-gray-300 font-light'>
              <td scope="row" className='p-[15px] text-left'>T03</td>
              <td className='p-[15px] text-left'>Reach out to sponsors for jollof supplies</td>
              <td className='p-[15px] capitalize text-left'>
                <Link to='/dashboard/projects/details' className='hover:text-orange-600 cursor-pointer'>
                  tonia's dance competition
                </Link>
              </td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize flex justify-center items-center'>
                <span className='w-fit px-[10px] py-[5px] text-white font-semibold bg-green-400 rounded-[25px]'>
                  finished
                </span>
              </td>
            </tr>

            {/*task4 */}
            <tr className='text-center bg-white border-b border-gray-300 font-light'>
              <td scope="row" className='p-[15px] text-left'>T04</td>
              <td className='p-[15px] text-left'>Use my laptop to design 10 pages</td>
              <td className='p-[15px] capitalize text-left'>
                <Link to='/dashboard/projects/details' className='hover:text-orange-600 cursor-pointer'>
                  sovereign tech project
                </Link>
              </td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize text-left'>10/09/2026, 11:17 AM</td>
              <td className='p-[15px] capitalize flex justify-center items-center'>
                <span className='w-fit px-[10px] py-[5px] text-white font-semibold bg-yellow-400 rounded-[25px]'>
                  running
                </span>
              </td>
            </tr>

            {/* tasks (when they do not exist ) */}
            <tr className="bg-white hidden">
              <td colSpan={6} className="h-auto py-[30px]">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center gap-[7px] bg-gray-100 shadow-sm h-auto max-w-[300px] w-[60%] p-[30px]">
                    <Trash color='gray' size={16} />
                    <div className="flex flex-col gap-[2px]">
                      <h3 className="text-[12px] text-gray-500 font-light">Oops! No tasks created yet on a project.</h3>
                      <p onClick={() => {
                        navigate('/dashboard/projects/')
                      }}
                        className='text-gray-500 cursor-pointer text-center hover:text-orange-600 hover:scale-95 transition duration-300 ease-in-out '>Click here to go create one</p>
                    </div>

                  </div>
                </div>
              </td>
            </tr>


          </tbody>


        </table>
      </div>




    </div>
  )
}

export default Task