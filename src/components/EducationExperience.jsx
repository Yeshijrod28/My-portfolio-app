
import React from 'react';
import './EducationExperience.css';

const EducationExperience = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Software Engineering',
      school: 'Delhi Technological University',
      year: '2021-2025',
      description: 'CGPA: 8.15 '
    },
    {
      degree: 'BHSEC',      school: 'Rangjung Central School',
      year: '2019',
      description: '83.75%'
    },
     {
      degree: 'BCSEA',      school: 'Rangjung Central School',
      year: '2017',
      description: '89.8%'
    }
  ];

  const experience = [
    {
      position: 'Web Developer',
      company: 'DrukSmart Pvt. Ltd.',
      year: '2024',
      description: 'Created interactive components with Vue.js and created UI/UX designs using Canva and Figma.'
    },
    {
      position: 'Tutor',
      company: 'Desh Ka Mentor Programme',
      year: '2021',
      description: 'Mentored students across academic levels in STEM subjects, enhancing student performance and confidence.'
    }
  ];

  return (
    <section id="education-experience" className="education-experience-section">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="content-grid">
          <div className="education-column">
            <h3 className="column-title">Education</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{item.degree}</h4>
                    <h5 className="item-subtitle">{item.school}</h5>
                    <span className="item-year">{item.year}</span>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <h3 className="column-title">Experience</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="item-title">{item.position}</h4>
                    <h5 className="item-subtitle">{item.company}</h5>
                    <span className="item-year">{item.year}</span>
                    <p className="item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
