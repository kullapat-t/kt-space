import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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

const navLink = (to, label, end, onClick) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) => isActive ? 'Header-link Header-link--active' : 'Header-link'}
    onClick={onClick}
  >
    {label}
  </NavLink>
);

export const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <nav className="Header">
      <div className="Header-inner Header-bar">
        {isAuthenticated && (
          <span className="Header-user">{user.name} ({user.email})</span>
        )}

        {/* Desktop nav */}
        <div className="Header-nav Header-nav--desktop">
          {navLink('/', 'Home', true)}
          {navLink('/experience', 'Experience')}
          {navLink('/projects', 'Projects')}
          {navLink('/about', 'About')}
          {navLink('/contact', 'Contact')}
        </div>

        <ThemeToggle />

        {/* Hamburger */}
        <button
          className={`Header-hamburger ${menuOpen ? 'Header-hamburger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`Header-drawer ${menuOpen ? 'Header-drawer--open' : ''}`} aria-hidden={!menuOpen}>
        {navLink('/', 'Home', true, close)}
        {navLink('/experience', 'Experience', false, close)}
        {navLink('/projects', 'Projects', false, close)}
        {navLink('/about', 'About', false, close)}
        {navLink('/contact', 'Contact', false, close)}
      </div>
    </nav>
  );
};
