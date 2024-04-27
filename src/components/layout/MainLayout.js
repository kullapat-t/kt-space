import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Flip, ToastContainer } from 'react-toastify'
import './mainlayout.scss'

export const MainLayout = ({children}) => {
  return (
    <div className="MainLayout">
      <Header/>
      <div>{children}</div>
      <ToastContainer
          id='mainContainerId'
          theme="light"
          transition={ Flip }
          closeOnClick
          draggable
      />
      <Footer/>
    </div>
  )
}