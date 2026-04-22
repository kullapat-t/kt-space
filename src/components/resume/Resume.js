import React from 'react';
import './resume.scss';

const Skills = () => {
  return (
    <div>
      <div className="Resume-data__header">
        <h2><span>Skills</span></h2>
      </div>
      <div className="Resume-data__content">
        <dl className="Skill">
          <div><strong>Backend:</strong> Kotlin, Java, Node.js</div>
          <div><strong>Frontend:</strong> JavaScript (React)</div>
          <div><strong>Other:</strong> C#, Groovy</div>
        </dl>
      </div>
    </div>
  )
};

const Works = () => {
  return (
    <div>
      <div className="Resume-data__header">
        <h2><span>Work Experience</span></h2>
      </div>
      <div className="Resume-data__content">

        {/* Alef Education */}
        <div className="Data-header">
          <span className="title">Alef Education</span>
          <small className="year">Feb 2018 – present</small>
          <span className="sub-title">Abu Dhabi, United Arab Emirates</span>
        </div>
        <dl className="Data-body">
          <dt>Senior Full Stack Developer (Remote)</dt>
          <dd>- Developed and maintained internal admin platform supporting operational workflows</dd>
          <dd>- Designed and implemented automated API testing to improve system reliability and coverage</dd>
          <dd>- Led development of microservices using Spring Boot (Kotlin, Java) and Node.js</dd>
          <dd>- Integrated authentication and authorization using <a href='https://auth0.com/'>Auth0</a></dd>
          <dd>- Built and maintained CI/CD pipelines (GithubAction, CircleCI, Jenkins, GoCD)</dd>
          <dd>- Worked in Agile environments (Scrum/Kanban)</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* Agoda Services Co., Ltd. */}
        <div className="Data-header">
          <span className="title">Agoda Services Co., Ltd.</span>
          <small className="year">Sep 2015 - Feb 2018</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior Software Engineer</dt>
          <dd>- Developed and optimized property page using React.js</dd>
          <dd>- Conducted A/B testing to improve user experience and conversion</dd>
          <dd>- Collaborated in Agile teams (Scrum/Kanban)</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* True Corporation Public Co., Ltd. */}
        <div className="Data-header">
          <span className="title">True Corporation Public Co., Ltd.</span>
          <small className="year">Feb 2014 – Sep 2015</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior System Analyst</dt>
          <dd>- Delivered prepaid card system (physical and virtual) integrated with global processor <a href='https://www.tutuka.com/'>Tutuka</a></dd>
          <dd>- Contributed to TrueMoney Wallet (mobile and web)</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* Reuters Software (Thailand) Ltd. */}
        <div className="Data-header">
          <span className="title">Reuters Software (Thailand) Ltd.</span>
          <small className="year">Dec 2010 – Jan 2014</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Software Engineer / QA Engineer</dt>
          <dd>- Built regression test automation framework and internal tools</dd>
          <dd>- Supported compliance systems and performance monitoring dashboards</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* Summit Computer Co.,Ltd. */}
        <div className="Data-header">
          <span className="title">Summit Computer Co.,Ltd.</span>
          <small className="year">Oct 2009 – Nov 2010</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Java Programmer</dt>
          <dd>- Developed backend APIs and services for web applications</dd>
        </dl>
      </div>

    </div>
  )
};

const Educations = () => {
  return (
    <div>
      <div className="Resume-data__header">
        <h2><span>Educations</span></h2>
      </div>
      <div className="Resume-data__content">
        <div className="Data-header">
          <span className="title">Chulalongkorn University</span>
          <small className="year">2009 – 2011</small>
        </div>
        <dl className="Data-body">
          <dt>Master of science<br/>
            Major: Computer Science</dt>
          <dd>- Received the scholarship as a research assistant for two years in Master degree</dd>
          <dd>- Published the proceeding “BENPro: A blinding protection method in digital right management” <br/>
            in Computer sciences and Convergence Information Technology (ICCIT), <br/>
            2010 5th International Conference ICCIT, Seoul, South Korea</dd>
        </dl>
      </div>
      <div className="Resume-data__content">
        <div className="Data-header">
          <span className="title">Chulalongkorn University</span>
          <small className="year">2005 – 2009</small>
        </div>
        <dl className="Data-body">
          <dt>Bachelor of science<br/>
            Major: Computer Science</dt>
        </dl>
      </div>
    </div>
  )
};

export class Resume extends React.Component {
  render() {
    return (
      <div className="Resume-container">
        <div className="Resume-data">
          <Skills/>
          <Works/>
          <Educations/>
        </div>
      </div>
    );
  }
}