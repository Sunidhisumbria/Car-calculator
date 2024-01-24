import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import "../pages/Home.css"

const Layout = ({children}) => {
  return (
    <div className="container">
        <Navbar/>
        <div className="mini_container">
             
        <Sidebar />
        {children}
        </div>
      </div>
  )
}

export default Layout
