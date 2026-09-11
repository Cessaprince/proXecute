import { FileQuestionMark, Search, ShieldQuestionMark } from 'lucide-react'
import React from 'react'
import questionMark from '../assets/images/questionMark.png'
import featuresAndFunc from '../assets/images/featuresAndFunc.jpeg'
import usersAndCollab from '../assets/images/usersAndCollab.png'
import analyticsAndAdvice from '../assets/images/analyticsAndAdvice.jpeg'

const Help = () => {
  return (
    <div className='flex flex-col gap-[30px]'>

      {/* the heading */}
      <div className="flex max-md:flex-col max-md:gap-[20px] justify-between w-full items-center">
        <div className="flex flex-col max-md:w-full">
          <h1 className="font-semibold capitalize text-[30px]">help center</h1>
          <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Have questions? Search through our Help Center.</p>
        </div>

        <form action="" className='max-md:w-full gap-[5px] bg-white px-[15px] py-[10px] w-[40%] flex justify-between rounded-[25px]'>
          <div className="flex gap-[7px] items-center text-xs text-gray-500 w-[75%]">
            <Search color='gray' size={18} />
            <input type="search" name="searchHelp" id="searchHelp" placeholder='Search for questions or topics...' className=' outline-none [&::-webkit-search-cancel-button]:appearance-none w-full' />

          </div>
          <button type="submit" className='flex-1 capitalize text-white bg-orange-600 py-[5px] text-xs px-[15px] rounded-[25px] hover:scale-102 hover:bg-orange-400 cursor-pointer'>search</button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-[20px]">
        {/* faq*/}
        <div className="bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex max-md:flex-col gap-[20px] items-start">

          <div className="w-[70px] h-[70px] bg-orange-200 p-[15px] rounded-full flex justify-center items-center gap-[20px]">
            <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
              <img src={questionMark} alt="" className='w-full h-full object-cover' />
            </div>

          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className='text-[16px] font-semibold capitalize text-orange-600'>frequently asked questions</h3>

            <div className="flex flex-col gap-[12px]">
              {/* each faq */}
              <div className="flex flex-col">
                <h3 className='text-[14px] font-semibold'>1. Can I send my tasks/project to only ProXecute users?</h3>
                <p className="text-[13px] font-light text-gray-500 leading-[25px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto sequi consequuntur similique officiis quasi alias velit ratione laudantium. Ipsa, temporibus. Fuga quam libero nesciunt impedit incidunt nostrum quidem labore!
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className='text-[14px] font-semibold'>2. What does the ProXecute Ai (Stacie) do?</h3>
                <p className="text-[13px] font-light text-gray-500 leading-[25px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto sequi consequuntur similique officiis quasi alias velit ratione laudantium. Ipsa, temporibus. Fuga quam libero nesciunt impedit incidunt nostrum quidem labore!
                </p>
              </div>


            </div>

          </div>
        </div>

        {/* features and functionalities */}

        <div className="max-md:flex-col bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex gap-[20px] items-start">

          <div className="w-[70px] h-[70px] bg-orange-200 p-[15px] rounded-full flex justify-center items-center gap-[20px]">
            <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
              <img src={featuresAndFunc} alt="" className='w-full h-full object-cover' />
            </div>

          </div>

          <div className="flex flex-col gap-[7px]">
            <h3 className='text-[16px] font-semibold capitalize text-orange-600'>features and functionalities</h3>
            <p className="text-[13px] font-light text-gray-500 leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto sequi consequuntur similique officiis quasi alias velit ratione laudantium. Ipsa, temporibus. Fuga quam libero nesciunt impedit incidunt nostrum quidem labore!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, tempora?
            </p>

          </div>
        </div>

        {/* users and collaboration */}

        <div className="max-md:flex-col bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex gap-[20px] items-start">

          <div className="w-[70px] h-[70px] bg-orange-200 p-[15px] rounded-full flex justify-center items-center gap-[20px]">
            <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
              <img src={usersAndCollab} alt="" className='w-full h-full object-cover' />
            </div>

          </div>

          <div className="flex flex-col gap-[7px]">
            <h3 className='text-[16px] font-semibold capitalize text-orange-600'>users and collaboration</h3>
            <p className="text-[13px] font-light text-gray-500 leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto sequi consequuntur similique officiis quasi alias velit ratione laudantium. Ipsa, temporibus. Fuga quam libero nesciunt impedit incidunt nostrum quidem labore!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, tempora?
            </p>

          </div>
        </div>

        {/* analytics and advice */}

        <div className="max-md:flex-col bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex gap-[20px] items-start">

          <div className="w-[70px] h-[70px] bg-orange-200 p-[15px] rounded-full flex justify-center items-center gap-[20px]">
            <div className="w-[45px] h-[45px] overflow-hidden rounded-full">
              <img src={analyticsAndAdvice} alt="" className='w-full h-full object-cover' />
            </div>

          </div>

          <div className="flex flex-col gap-[7px]">
            <h3 className='text-[16px] font-semibold capitalize text-orange-600'>analytics and advice</h3>
            <p className="text-[13px] font-light text-gray-500 leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iusto sequi consequuntur similique officiis quasi alias velit ratione laudantium. Ipsa, temporibus. Fuga quam libero nesciunt impedit incidunt nostrum quidem labore!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, tempora?
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Help