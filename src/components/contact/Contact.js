import React from 'react';
import './contact.scss';

const links = [
  {
    icon: 'fa-envelope-o',
    label: 'Email',
    value: 'kullapat.t@hotmail.com',
    href: 'mailto:kullapat.t@hotmail.com',
  },
  {
    icon: 'fa-linkedin-square',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kullapat-t',
    href: 'https://www.linkedin.com/in/kullapat-t/',
    external: true,
  },
  {
    icon: 'fa-github',
    label: 'GitHub',
    value: 'github.com/kullapat-t',
    href: 'https://github.com/kullapat-t/',
    external: true,
  },
  {
    icon: 'fa-instagram',
    label: 'Instagram',
    value: 'nixon.kt.th',
    href: 'https://www.instagram.com/nixon.kt.th/',
    external: true,
  },
];

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-bg-text" aria-hidden="true">HELLO</div>

      <div className="Contact-body">
        <header className="Contact-header">
          <span className="Contact-eyebrow">Get in touch</span>
          <h1 className="Contact-title">
            Say<br />
            <span className="Contact-title-accent">Hello</span>
          </h1>
          <p className="Contact-intro">
            Feel free to follow along or reach out directly
          </p>
        </header>

        <ul className="Contact-links" role="list">
          {links.map((link) => (
            <li key={link.label} className="Contact-link-item">
              <a
                className="Contact-link"
                href={link.href}
                aria-label={link.label}
                {...(link.external ? { rel: 'me noopener noreferrer', target: '_blank' } : {})}
              >
                <span className="Contact-link-left">
                  <i className={`fa ${link.icon} Contact-link-icon`} aria-hidden="true" />
                  <span className="Contact-link-label">{link.label}</span>
                </span>
                <span className="Contact-link-value">{link.value}</span>
                <i className="fa fa-long-arrow-right Contact-link-arrow" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
