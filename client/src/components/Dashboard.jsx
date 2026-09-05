import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />

            <main className="ml-[250px] max-lg:ml-0 mt-[60px] py-[30px] px-[50px] max-lg:px-[30px] bg-gray-50 h-[calc(100vh-60px)] overflow-y-auto no-scrollbar">
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard