import React from 'react'
import Navbar from '../Components/Web/Navbar/Navbar'
import Footer from '../Components/Web/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CopyRights from '../Components/Web/Footer/CopyRights.jsx'

export default function WebLayout() {
  return (
    <>
        <Navbar />
        <div className='mt-5 '>
        <Outlet/>
        </div>
        <Footer/>
        <CopyRights/>
    </>
  )
}
