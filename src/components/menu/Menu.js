import React from 'react';
import './menu.scss';
import LoginButton from '../auth0/Login';
import LogoutButton from '../auth0/Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Menu = () => {

  const { isAuthenticated } = useAuth0();

  const loginButton = <><LoginButton/><span className='text'> &lt;- Login here to see more features</span></>

  return (
      <nav id="navigation" className="Menu">
        <div className="menu">
          <a className="button" href="#/resume">kt - resume</a> | {!isAuthenticated ? loginButton : <LogoutButton/> }
        </div>
      </nav>
  )
}
export default Menu;