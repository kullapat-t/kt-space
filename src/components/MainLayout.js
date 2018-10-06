import React from 'react';
import Footer from './footer/Footer';
import './mainlayout.scss';

function MainLayout({ children }) {
  return (
    <div className="MainLayout">
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;