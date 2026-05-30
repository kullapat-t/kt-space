import React from 'react';
import './projects.scss';

const projects = [
  {
    tag: 'Personal Site',
    title: 'kt-space',
    description: 'This portfolio — a React SPA deployed on GitHub Pages. Features light/dark theming, Auth0 integration, and a clean editorial design system built from scratch with SCSS.',
    stack: ['React', 'SCSS', 'Auth0', 'GitHub Actions'],
    link: 'https://github.com/kullapat-t/kt-space',
  },
  {
    tag: 'Side Project',
    title: 'More coming soon',
    description: 'Open source contributions, tooling experiments, and side projects are in progress. Follow on GitHub for updates.',
    stack: [],
    link: 'https://github.com/kullapat-t/',
    placeholder: true,
  },
];

const Projects = () => {
  return (
    <div className="Projects">
      <header className="Projects-header">
        <span className="Projects-eyebrow">Selected Work</span>
        <h1 className="Projects-title">Projects</h1>
      </header>

      <div className="Projects-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            className={`Projects-card${p.placeholder ? ' Projects-card--placeholder' : ''}`}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="Projects-card-top">
              <span className="Projects-card-tag">{p.tag}</span>
              <i className="fa fa-arrow-right Projects-card-arrow" aria-hidden="true" />
            </div>
            <h2 className="Projects-card-title">{p.title}</h2>
            <p className="Projects-card-desc">{p.description}</p>
            {p.stack.length > 0 && (
              <div className="Projects-card-stack">
                {p.stack.map(s => (
                  <span key={s} className="Projects-card-chip">{s}</span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>

      <div className="Projects-cta">
        <p className="Projects-cta-text">
          Interested in collaborating?
        </p>
        <a href="#/contact" className="Projects-cta-link">
          Let's talk <i className="fa fa-long-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
