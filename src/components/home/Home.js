import { Component } from 'react';
import Profile from '../profile/Profile';
import React from 'react';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Profile/>
      </div>
    );
  }
}

export default Home;