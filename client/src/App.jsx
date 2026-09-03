import React from 'react'
import Register from './pages/Register'
import Auth from './components/Auth'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Project from './pages/Project'
import Dashboard from './components/Dashboard'
import Task from './pages/Task'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Project />} />
          <Route path="tasks" element={<Task />} />
          <Route path="analytics" element={< Analytics />} />
          <Route path="settings" element={< Settings />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App