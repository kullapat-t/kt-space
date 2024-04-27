import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { ToastContainer } from 'react-toastify'
import './mainlayout.scss'

export const MainLayout = ({children}) => {
  return (
    <div className="MainLayout">
      <Header/>
      <div>{children}</div>
      <ToastContainer />
      <Footer/>
    </div>
  )
}