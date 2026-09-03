import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <Navbar />

            <main className="ml-[250px] mt-[60px] p-[30px] bg-blue-50 h-[calc(100vh-60px)] overflow-y-auto no-scrollbar">
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard