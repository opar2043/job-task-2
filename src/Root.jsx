import React from 'react'
import Navbar from './Component/Root/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>,
        <Outlet></Outlet>
    </div>
  )
}

export default Root