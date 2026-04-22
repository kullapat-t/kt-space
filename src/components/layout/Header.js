import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './header.scss'

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="Header">
      <div className="Header-inner Header-bar">
        {isAuthenticated && (<>{user.name} ({user.email}) |</>)}
        <a href='#/'>Home</a>
        <a href='#/about'>About me</a>
        <a href='#/cv'>CV</a>
        <a href='#/contact' className='Header-under-construct'>Contact</a>
      </div>
    </nav>
  )
};