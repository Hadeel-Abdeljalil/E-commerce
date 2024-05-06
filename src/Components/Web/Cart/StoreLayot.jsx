import React from 'react'
import { Outlet } from 'react-router-dom'
import StoreNav from './StoreNav.jsx'
import Footer from './../Footer/Footer';
import CopyRights from './../Footer/CopyRights';
import StoreFooter from './StoreFooter.jsx';
import Navbar from '../Navbar/Navbar.jsx';
export default function StoreLayout() {
  return (
    <div className='store bg-white'>
        <Navbar/>
    <div className=''>
    <Outlet /> 
    </div>   
    <Footer/>
    <CopyRights/>
    </div>
  )
}
