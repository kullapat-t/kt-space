import React from 'react';
import avatar from '../../assets/images/avatar-gym.jpg';
import './profile.scss';

const Contact = () => {
  return (
    <div className="social expanded">
      <a rel="me" target="_blank" href="https://www.linkedin.com/in/kullapat-theera-angkananon-4905b874/" title="LinkedIn">
        <i className="Profile-icon fa fa-linkedin-square" />
      </a>
      <a rel="me" target="_blank" href="https://github.com/kullapat-t" title="Github">
        <i className="Profile-icon fa fa-github"></i>
      </a>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="Profile">
      <img src={avatar} className="Profile-avatar" alt="logo" />
      <div className="Profile-title">Kullapat Theera-angkananon</div>
      <hr className="bar"/>
      <span>Developer</span>
      <hr className="bar"/>
      <div className="profile contact">
        <nav className="navigation right">
          <Contact/>
        </nav>
      </div>
    </div>
  )
};

export default Profile;