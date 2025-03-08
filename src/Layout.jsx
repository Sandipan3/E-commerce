import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
    <header>
        <Navbar/>
    </header>
    <Outlet />
    <footer>
      <p>&copy; 2025 E-Commerce Website. All Rights Reserved</p>
    </footer>
    </>

  )
}

export default Layout