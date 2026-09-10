import React from 'react'
import ProjectAnalytics from '../components/ProjectAnalytics'
import TaskAnalytics from '../components/TaskAnalytics'
import LineGraph from '../components/LineGraph'

const Analytics = () => {
  return (
    <div className='flex flex-col gap-[30px]'>

      {/* the heading */}
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize text-[30px]">Analytics</h1>
        <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Your key metrics at a glance. Track your numbers and see the growth.</p>
      </div>

      <div className="flex flex-col gap-[50px]">
        {/* line graph*/}
        <div className="w-full h-[400px] max-md:h-[]">
          <LineGraph />
        </div>


        {/* the chart */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[20px] h-[400px] items-center">
          <div className="max-md:w-full h-full flex flex-col gap-[10px] bg-white rounded-[10px] border-[0.1px] border-gray-300 p-[20px]">
            <h3 className="text-[16px] capitalize font-semibold">project analytics (weekly)</h3>
            <ProjectAnalytics />
          </div>

          <div className="max-md:w-full h-[400px] flex flex-col gap-[10px] bg-white rounded-[10px] border-[0.1px] border-gray-300 p-[20px]">
            <h3 className="text-[16px] capitalize font-semibold">tasks analytics (weekly)</h3>
            <TaskAnalytics />
          </div>
        </div>

        {/* summary */}
        <div className="flex flex-col gap-[15px]">
          <h3 className='capitalize font-semibold text-center'>summary of the weekly analytics & yearly analytics for both projects and tasks</h3>
          <div className="flex flex-col gap-[5px]">
            <p className='text-sm capitalize font-semibold'>weekly analytics summary </p>
            <p className="text-[13px] font-light text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum sint voluptate tempore illum ut, libero accusamus, ipsa, temporibus animi porro provident aliquid saepe. A ducimus nisi, placeat quae totam magni, ad enim veniam vel quidem vero? Nulla natus sunt nostrum doloribus reprehenderit aperiam placeat. Corrupti voluptates doloribus hic distinctio!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat quo excepturi aliquid labore error corporis saepe sapiente dicta quibusdam vel vero ratione et laborum debitis, cumque sunt accusantium commodi neque maiores expedita. Aperiam tenetur, sed ex officiis repellat maiores, quod excepturi magnam quaerat eum eligendi nulla, voluptates assumenda quidem.
            </p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <p className='text-sm capitalize font-semibold'>yearly analytics summary </p>
            <p className="text-[13px] font-light text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laborum sint voluptate tempore illum ut, libero accusamus, ipsa, temporibus animi porro provident aliquid saepe. A ducimus nisi, placeat quae totam magni, ad enim veniam vel quidem vero? Nulla natus sunt nostrum doloribus reprehenderit aperiam placeat. Corrupti voluptates doloribus hic distinctio!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quaerat quo excepturi aliquid labore error corporis saepe sapiente dicta quibusdam vel vero ratione et laborum debitis, cumque sunt accusantium commodi neque maiores expedita. Aperiam tenetur, sed ex officiis repellat maiores, quod excepturi magnam quaerat eum eligendi nulla, voluptates assumenda quidem.
            </p>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Analytics