import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import './header.scss';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kt-theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'auto') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('kt-theme', theme);
  }, [theme]);

  const isDark =
    theme === 'dark' ||
    (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      className="ThemeToggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <i className={`fa ${isDark ? 'fa-sun-o' : 'fa-moon-o'}`} />
    </button>
  );
};

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="Header">
      <div className="Header-inner Header-bar">
        {isAuthenticated && (
          <span className="Header-user">{user.name} ({user.email})</span>
        )}
        <NavLink to="/" end className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}>Home</NavLink>
        <NavLink to="/experience" className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}>Experience</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}>Contact</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
};
