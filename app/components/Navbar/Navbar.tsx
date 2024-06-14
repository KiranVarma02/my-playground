'use client'

import React, { useState } from 'react'
import NavbarHeading from './NavbarHeading'
import MyProjects from './MyProjects'
import NavbarItems from './NavbarItems'
import AddTask from './AddTask'

export const SidebarContext = React.createContext<any>({} as any)

function Navbar() {

  const [showSidebar, setShowSidebar] = useState(true)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const SidebarToggle = () => {
    if (showSidebar) {
      return (
        <div className={showSidebar ? 'bg-red-100 flex-none w-72' : ''}>
        {showSidebar && 
        <div className='flex-row h-screen p-4'>
          <div className='pb-10'>
            <NavbarHeading />
          </div>
          <div className='pb-2'>
            <AddTask />
          </div>
          <div className='pb-10'>
            <NavbarItems />
          </div>
          <div className='flex-1'>
            <MyProjects />
          </div>
        </div>}
      </div>
      )
    } else {
      return (
        <button className="hover:bg-red-200 rounded p-5" onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
      </button>
      )
    }
  }

  return (
    <SidebarContext.Provider value={toggleSidebar}>
      <SidebarToggle />
    </SidebarContext.Provider>
    
  )
}

export default Navbar