import { Component } from 'react';
import Menu from '../menu/Menu';
import Profile from '../profile/Profile';
import React from 'react';
import './home.scss';

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Profile/>
        <Menu/>
      </div>
    );
  }
}