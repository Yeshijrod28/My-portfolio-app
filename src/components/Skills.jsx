
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'React', level: 70 },
        { name: 'VueJS', level: 70},
        { name: 'JavaScript', level: 70 },
        { name: 'CSS', level: 90 },
        { name: 'HTML5',level: 95 },
        { name: 'Python', level: 78 },
        { name: 'C/C++',level:85 },
        { name: 'MySQL', level:70},
        { name: 'ML/AI', level:60 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'VsCode',level:90 },
        { name: 'Figma',level:94 },
        { name: 'Netlify',level:95 },
        { name: 'Canva', level: 95 },
        { name: 'Git & Github', level:70 },
        { name: 'npm/pip/yarn', level:70},
        { name: 'Photoshop',level:60 },
        

      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', level:75},
        { name: 'Team Work',level:77 },
        { name: 'Problem-solving',level:78 },
        { name: 'Time management',level:82 },
        { name: 'Self-Learning', level:90},
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-content">
          <h2 className="skills-title">Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h3 className="category-title">{category.title}</h3>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-footer">
            <p className="skills-description">
              I'm always eager to learn new technologies and expand my skill set. 
              Currently exploring AI/ML integration and backend frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
