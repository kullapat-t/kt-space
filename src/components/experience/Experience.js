import React from 'react';
import './experience.scss';

const skills = ['Kotlin', 'Java', 'JavaScript', 'TypeScript', 'C#', 'Groovy', 'Spring Boot', 'Node.js', 'React', 'Auth0', 'CI/CD', 'Agile'];

const jobs = [
  {
    company: 'Alef Education',
    location: 'Abu Dhabi, UAE',
    period: '2018 – present',
    role: 'Senior Full Stack Developer (Remote)',
    bullets: [
      'Developed and maintained internal admin platform supporting operational workflows',
      'Designed and implemented automated API testing to improve system reliability and coverage',
      'Led development of microservices using Spring Boot (Kotlin, Java) and Node.js',
      'Integrated authentication and authorization using Auth0',
      'Built and maintained CI/CD pipelines (GitHub Actions, CircleCI, Jenkins, GoCD)',
      'Worked in Agile environments (Scrum/Kanban)',
    ],
  },
  {
    company: 'Agoda Services Co., Ltd.',
    location: 'Bangkok, Thailand',
    period: '2015 – 2018',
    role: 'Senior Software Engineer',
    bullets: [
      'Developed and optimized property page using React.js',
      'Conducted A/B testing to improve user experience and conversion',
      'Collaborated in Agile teams (Scrum/Kanban)',
    ],
  },
  {
    company: 'True Corporation Public Co., Ltd.',
    location: 'Bangkok, Thailand',
    period: '2014 – 2015',
    role: 'Senior System Analyst',
    bullets: [
      'Delivered prepaid card system (physical and virtual) integrated with global processor Tutuka',
      'Contributed to TrueMoney Wallet (mobile and web)',
    ],
  },
  {
    company: 'Reuters Software (Thailand) Ltd.',
    location: 'Bangkok, Thailand',
    period: '2010 – 2014',
    role: 'Software Engineer / QA Engineer',
    bullets: [
      'Built regression test automation framework and internal tools',
      'Supported compliance systems and performance monitoring dashboards',
    ],
  },
  {
    company: 'Summit Computer Co., Ltd.',
    location: 'Bangkok, Thailand',
    period: '2009 – 2010',
    role: 'Java Programmer',
    bullets: [
      'Developed backend APIs and services for web applications',
    ],
  },
];

const education = [
  {
    school: 'Chulalongkorn University',
    period: '2009 – 2011',
    degree: 'Master of Science — Computer Science',
    note: 'Research assistant scholarship · Published "BENPro: A blinding protection method in DRM" at ICCIT 2010, Seoul',
  },
  {
    school: 'Chulalongkorn University',
    period: '2005 – 2009',
    degree: 'Bachelor of Science — Computer Science',
    note: '',
  },
];

export class Experience extends React.Component {
  render() {
    return (
      <div className="Experience">

        <header className="Experience-header">
          <span className="Experience-eyebrow">Career</span>
          <h1 className="Experience-title">Experience</h1>
        </header>

        <section className="Experience-skills">
          <h2 className="Experience-section-label">Skills</h2>
          <div className="Experience-skill-chips">
            {skills.map(s => (
              <span key={s} className="Experience-chip">{s}</span>
            ))}
          </div>
        </section>

        <section className="Experience-timeline">
          <h2 className="Experience-section-label">Work</h2>
          <div className="Experience-jobs">
            {jobs.map((job, i) => (
              <div key={i} className="Experience-job">
                <div className="Experience-job-meta">
                  <span className="Experience-job-period">{job.period}</span>
                  <span className="Experience-job-location">{job.location}</span>
                </div>
                <div className="Experience-job-body">
                  <div className="Experience-job-connector" aria-hidden="true" />
                  <div className="Experience-job-card">
                    <div className="Experience-job-header">
                      <span className="Experience-job-company">{job.company}</span>
                      <span className="Experience-job-role">{job.role}</span>
                    </div>
                    <ul className="Experience-job-bullets">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="Experience-education">
          <h2 className="Experience-section-label">Education</h2>
          <div className="Experience-edu-cards">
            {education.map((ed, i) => (
              <div key={i} className="Experience-edu-card">
                <span className="Experience-edu-period">{ed.period}</span>
                <span className="Experience-edu-school">{ed.school}</span>
                <span className="Experience-edu-degree">{ed.degree}</span>
                {ed.note && <p className="Experience-edu-note">{ed.note}</p>}
              </div>
            ))}
          </div>
        </section>

      </div>
    );
  }
}
