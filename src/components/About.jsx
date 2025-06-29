
import React from 'react';
import './About.css';
import heroImage from '../assets/HERO.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          
          <div className="about-grid">
            <div className="about-text">
              <p className="about-paragraph">
                I'm a recent Software Engineering graduate with a strong passion for frontend 
                development and a keen interest in machine learning. I love turning ideas into 
                interactive, user-friendly web experiences. 
              </p>
              
              <p className="about-paragraph">
                I am driven by the desire to continuously learn and improve constantly seeking 
                out new challenges that broaden my knowledge.
              </p>
              <div className="hero-buttons">
              <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-btn hero-btn-primary"
            >
              View My Work
            </button>
            <button
                        onClick={() => {window.location.href='https://in.docworkspace.com/d/sIBr_sa6pAceA6sIG'}}
                        className='hero-btn hero-btn-secondary'>Download CV</button>
            </div>

            </div>
            
            <div className="about-image-container">
              <div className="about-image-wrapper">
                <img 
                  src={heroImage}
                  alt="Profile"
                  className="about-image"
                />
              </div>
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;