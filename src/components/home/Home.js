import React from 'react';
import avatar from '../../assets/images/nitch-profile.PNG';
import './home.scss';

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home-hero">
        <div className="Home-avatar-wrapper">
          <div className="Home-avatar-glow" aria-hidden="true" />
          <div className="Home-avatar-ring">
            <div className="Home-avatar-ring-inner">
              <img src={avatar} className="Home-avatar" alt="Kullapat Theera-Angkananon" />
            </div>
          </div>
          <div className="Home-avatar-orbit" aria-hidden="true">
            <span className="Home-avatar-dot" />
          </div>
        </div>

        <div className="Home-content">
          <p className="Home-eyebrow">Senior Full Stack Developer</p>
          <h1 className="Home-name">
            <span className="Home-name-line">Kullapat</span>
            <span className="Home-name-line Home-name-line--accent">Theera-Angkananon</span>
          </h1>
          <p className="Home-tagline">&lt;<em>𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓</em> /&gt;</p>

          <nav className="Home-social">
            <a
              className="Home-social-link"
              href="https://www.linkedin.com/in/kullapat-t/"
              rel="me noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fa fa-linkedin-square" />
              <span>LinkedIn</span>
            </a>
            <a
              className="Home-social-link"
              href="https://github.com/kullapat-t/"
              rel="me noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fa fa-github" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
