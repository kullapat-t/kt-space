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
        <h2><span>Works</span></h2>
      </div>
      <div className="Resume-data__content">

        {/* Alef Education */}
        <div className="Data-header">
          <span>Alef Education</span>
          <small>Feb 2018 – present</small>
          <span className="sub-title">Abu Dhabi, United Arab Emirates</span>
        </div>
        <dl className="Data-body">
          <dt>Fullstack developer</dt>
          <dd>- Implement backend services with Spring boot (Kotlin, Java) and NodeJs</dd>
          <dd>- Integrate authentication and authorization system with Auth0</dd>
          <dd>- Build docker image and configure kubernates to run/test feature in some specific environment</dd>
          <dd>- Work in Agile methodology (using Scrum/Kanban)</dd>
          <dd>- Use CircleCI and Jenkins for CI/CD</dd>
        </dl>

        {/* Agoda Services Co., Ltd. */}
        <div className="Data-header">
          <span>Agoda Services Co., Ltd.</span>
          <small>Sep 2015 - Feb 2018</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior software engineer</dt>
          <dd>- Implement features on Property page with JavaScript (react)</dd>
          <dd>- Work in Agile methodology (using Scrum/Kanban)</dd>
          <dd>- Use TeamCity for CI/CD</dd>
          <dd>- A/B testing</dd>
        </dl>

        {/* True Corporation Public Co., Ltd. */}
        <div className="Data-header">
          <span>True Corporation Public Co., Ltd.</span>
          <small>Feb 2014 – Sep 2015</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Senior system analyst</dt>
          <dd>- Work in Agile methodology (using Scrum)</dd>
          <dd>- Use Jenkins tool for CI/CD</dd>
        </dl>

        {/* Reuters Software (Thailand) Ltd. */}
        <div className="Data-header">
          <span>Reuters Software (Thailand) Ltd.</span>
          <small>Dec 2010 – Jan 2014</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Software Engineer</dt>
          <dt>Quality Assurance Engineer</dt>
        </dl>

        {/* Summit Computer Co.,Ltd. */}
        <div className="Data-header">
          <span>Summit Computer Co.,Ltd.</span>
          <small>Oct 2009 – Nov 2010</small>
          <span className="sub-title">Bangkok, Thailand</span>
        </div>
        <dl className="Data-body">
          <dt>Java Programmer</dt>
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
          <span>Chulalongkorn University</span>
          <small>2009 – 2011</small>
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
          <span>Chulalongkorn University</span>
          <small>2005 – 2009</small>
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