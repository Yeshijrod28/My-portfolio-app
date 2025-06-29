
import React from 'react';
import './Hero.css';
import { href } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Kuzu, I'm <span className="hero-name">Yeshi Dorji</span>
          </h1>
          <p className="hero-subtitle">
            Software Developer & ML Enthusiast
          </p>
          <p className="hero-description">
           I don't just write code — I build digital experiences that work, scale and matter.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-btn hero-btn-secondary"
            >
              Get In Touch
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
