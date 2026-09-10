import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { Bot, X, Send } from 'lucide-react'

const Dashboard = () => {
    const [chatOpen, setChatOpen] = useState(false)

    return (
        <div>
            <Sidebar />
            <Navbar />

            <main className="ml-[250px] max-lg:ml-0 mt-[60px] py-[30px] px-[50px] max-lg:px-[30px] bg-gray-100 h-[calc(100vh-60px)] overflow-y-auto no-scrollbar">
                <Outlet />
            </main>

            {/* floating ai button — fixed to viewport, always visible regardless of scroll */}
            <button
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-[30px] right-[30px] z-30 rounded-full h-[55px] w-[55px] bg-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out border-[0.1px] border-gray-200"
            >
                {chatOpen ? <X size={22} className='text-orange-600' /> : <Bot size={24} className='text-orange-600' />}
            </button>

            {/* chat panel that appears above the button when open */}
            {chatOpen && (
                <div className="fixed transition-all duration-500 ease-in-out bottom-[95px] right-[30px] z-30 w-[320px] max-lg:w-[65vw] h-[420px] bg-white rounded-[15px] shadow-lg border-[0.1px] border-gray-200 flex flex-col overflow-hidden">

                    {/* header */}
                    <div className="flex items-center gap-[10px] bg-orange-600 text-white px-[20px] py-[15px]">
                        <Bot size={20} />
                        <h3 className="font-semibold text-[14px] capitalize">proXecute assistant</h3>
                    </div>

                    {/* messages area */}
                    <div className="flex-1 flex flex-col gap-[10px] p-[15px] overflow-y-auto no-scrollbar">
                        <div className="bg-gray-100 text-gray-700 text-[13px] rounded-[10px] px-[12px] py-[8px] w-fit max-w-[80%]">
                            Hi! I'm your proXecute assistant, Stacie. Ask me anything about your projects or tasks.
                        </div>
                    </div>

                    {/* input area */}
                    <div className="flex items-center gap-[8px] border-t-[0.1px] border-gray-200 p-[10px]">
                        <input
                            type="text"
                            placeholder="Ask something..."
                            className="flex-1 text-[13px] outline-none px-[10px] py-[8px] border-[0.1px] border-gray-300 rounded-[20px]"
                        />
                        <button
                            type="button"
                            className="shrink-0 flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white rounded-full w-[36px] h-[36px] cursor-pointer transition-all duration-300 ease-in-out"
                        >
                            <Send size={16} />
                        </button>
                    </div>

                </div>
            )}

        </div>
    )
}

export default Dashboard