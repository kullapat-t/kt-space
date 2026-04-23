import React from 'react';
import avatar from '../../assets/images/avatar-gym.jpg';
import './about.scss';

const About = () => {
  return (
    <article className="About">

      <section className="About-hero">
        <div className="About-hero__text">
          <span className="About-eyebrow">About</span>
          <h1 className="About-headline">
            Programmer<br />
            <em>&amp; Endurance</em><br />
            Runner.
          </h1>
          <p className="About-intro">
            Focused on steady progress and measurable results — in code,
            in training, and in everything else worth doing.
          </p>
        </div>
        <div className="About-hero__photo">
          <img src={avatar} alt="Kullapat training at the gym" />
          <span className="About-photo-caption">💻 ᴀs ʏᴏᴜ sᴏᴡ, sᴏ sʜᴀʟʟ ʏᴏᴜ ʀᴇᴀᴘ</span>
        </div>
      </section>

      <section className="About-stats" aria-label="Quick stats">
        <div className="About-stats__item">
          <span className="About-stats__value">50</span>
          <span className="About-stats__label">KM / WEEK</span>
        </div>
        <div className="About-stats__item">
          <span className="About-stats__value">15+</span>
          <span className="About-stats__label">YRS EXP</span>
        </div>
        <div className="About-stats__item">
          <span className="About-stats__value">Thailand</span>
          <span className="About-stats__label">BASED</span>
        </div>
        <div className="About-stats__item">
          <span className="About-stats__value">ISFJ</span>
          <span className="About-stats__label">TYPE</span>
        </div>
      </section>

      <section className="About-narrative">
        <div className="About-narrative__item">
          <span className="About-narrative__num">01</span>
          <div className="About-narrative__body">
            <h3>The Work</h3>
            <p>
              Works primarily in software development, with experience building
              and refining backend systems, authentication flows, and overall
              application structure. Values clear logic, practical solutions,
              and well-reasoned decisions.
            </p>
          </div>
        </div>
        <div className="About-narrative__item">
          <span className="About-narrative__num">02</span>
          <div className="About-narrative__body">
            <h3>The Training</h3>
            <p>
              Trains consistently — running around 50 km per week alongside
              strength training. Sets specific goals and tracks progress over
              time, aiming to improve performance while maintaining overall
              fitness and health.
            </p>
          </div>
        </div>
        <div className="About-narrative__item">
          <span className="About-narrative__num">03</span>
          <div className="About-narrative__body">
            <h3>The Approach</h3>
            <p>
              Evaluates options carefully, understands how things work, and makes decisions
              based on evidence. Discipline and consistency over shortcuts. Balances long-term goals in fitness, work,
              and investing with day-to-day constraints.
            </p>
          </div>
        </div>
      </section>

    </article>
  );
};

export default About;
