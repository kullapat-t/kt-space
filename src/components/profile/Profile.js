import React from 'react';
import avatar from '../../assets/images/nitch-logo.jpg';
import './profile.scss';

const Contact = () => {
  return (
    <nav>
      <a
        rel="me"
        target="_blank"
        href="https://www.linkedin.com/in/kullapat-t/"
        title="Go to -> LinkedIn"
      >
        <i className="Profile-icon fa fa-linkedin-square" />
      </a>
      <a
        rel="me"
        target="_blank"
        href="https://github.com/kullapat-t/"
        title="Go to -> Github"
      >
        <i className="Profile-icon fa fa-github"></i>
      </a>
    </nav>
  );
};

const Profile = () => {
  return (
    <div className="Profile">
      <img src={avatar} className="Profile-avatar" alt="logo" />
      <div className="Profile-title">ᴋᴜʟʟᴀᴘᴀᴛ ᴛʜᴇᴇʀᴀ-ᴀɴɢᴋᴀɴᴀɴᴏɴ</div>
      <hr className="bar"/>
      <span>&lt;𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓/&gt;</span>
      <hr className="bar"/>
      <Contact/>
    </div>
  )
};

export default Profile;