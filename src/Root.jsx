import React from 'react'
import Navbar from './Component/Root/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>,
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root