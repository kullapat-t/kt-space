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
          <div>Kotlin</div>
          <div>Java</div>
          <div>JavaScript</div>
          <div>C#</div>
          <div>Groovy</div>
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
          <dt>Fullstack developer</dt>
          <dd>- Implemented microservices with Spring boot (Kotlin, Java) and Node.JS</dd>
          <dd>- Implemented admin system for internal users</dd>
          <dd>- Integrated authentication and authorization system with <a href='https://auth0.com/'>Auth0</a></dd>
          <dd>- Agile methodology (using Scrum/Kanban)</dd>
          <dd>- CI/CD: CircleCI, Jenkins, and GoCD</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* Agoda Services Co., Ltd. */}
        <div className="Data-header">
          <span className="title">Agoda Services Co., Ltd.</span>
          <small className="year">Sep 2015 - Feb 2018</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior software engineer</dt>
          <dd>- Implemented Property page with JavaScript (react)</dd>
          <dd>- Agile methodology (using Scrum/Kanban)</dd>
          <dd>- A/B testing</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* True Corporation Public Co., Ltd. */}
        <div className="Data-header">
          <span className="title">True Corporation Public Co., Ltd.</span>
          <small className="year">Feb 2014 – Sep 2015</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior system analyst</dt>
          <dd>- Product: WeCard by True Money</dd>
          <dd>Implemented Physical and virtual prepaid card <br></br>
            by coordinating with global prepaid card processor <a href='https://www.tutuka.com/'>Tutuka</a> from South Africa</dd>
          <dd>- Product: True money wallet mobile and web application</dd>
        </dl>
        <hr className="Data-separate-line"/>

        {/* Reuters Software (Thailand) Ltd. */}
        <div className="Data-header">
          <span className="title">Reuters Software (Thailand) Ltd.</span>
          <small className="year">Dec 2010 – Jan 2014</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Software Engineer</dt>
          <dd>- Regression Test Automation (RTA) Framework</dd>
          <dd>- Automated tools</dd>
          <dd>- Transition Regression Test Automation (RTA) in Moscow, Russia</dd>
          <dd>- Reuters Messaging Compliance</dd>
          <dt>Quality Assurance Engineer</dt>
          <dd>- Performance Counter Monitoring System</dd>
          <dd>- Quality and Progress Dashboard</dd>
          <dd>- Sense Framework</dd>
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
          <dd>- Developed Java APIs and backend services for web application</dd>
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