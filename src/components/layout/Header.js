import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './header.scss'

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="Header">
      <div className="Header-inner Header-bar">
        {isAuthenticated && (<>{user.name} ({user.email}) |</>)}
        <a href='#/'>HOME</a>
        <a href='#/about' className='Header-under-construct'>about</a>
        <a href='#/resume'>kt - resume</a>
        <a href='#/contact' className='Header-under-construct'>contact</a>
      </div>
    </nav>
  )
};