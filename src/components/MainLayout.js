import React from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import './mainlayout.scss';

export const MainLayout = ({children}) => {
  return (
    <div className="MainLayout">
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
};