import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className='p-4'>
      <Header />
      <Outlet />
      {children}
    </div>
  )
}

export default Layout
