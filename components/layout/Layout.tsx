import React from 'react'
import Sidebar from '../sidebar'

const Layout = () => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="bg-red-800 flex-1 p-4 text-black">
        Andy Marriott - Software Engineer
      </div>
    </div>
  )
}

export default Layout;