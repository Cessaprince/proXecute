import React from 'react'
import { Trash } from 'lucide-react'
import person1 from '../assets/images/person1.jpeg'
import { Link, useNavigate } from 'react-router-dom'


const Task = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-[30px]'>

      {/* the heading */}
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize text-[30px]">my tasks</h1>
        <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Explore the details to your latest works, experiements and projects.</p>
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
          <tbody>


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
          </tbody>
        </table>
      </div>




    </div>
  )
}

export default Task