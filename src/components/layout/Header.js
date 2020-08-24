import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './header.scss'

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="Header">
      <div className="Header-inner Header-bar">
        {isAuthenticated && (
          <p>Hi {user.name} ({user.email})</p>
        )}
        {/* <a href='#/'>HOME</a> */}
        {/*<a href='#/about'>about</a>*/}
        {/* <a href='#/resume'>resume</a> */}
        {/*<a href='#/contact'>contact</a>*/}
      </div>
    </nav>
  )
};