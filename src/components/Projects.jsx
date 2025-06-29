
import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Projects = () => {
  const projects = [
    {
      title: 'Hand Gesture Recognition',
      description: 'Hand gesture recognition system using computer Vision and MediaPipe',
      image:project1,
      technologies: ['OpenCV', 'MediaPipe', 'Tensorflow', 'Numpy','Scikit-learn','Matplotlib'],
      liveUrl: 'https://drive.google.com/file/d/1NdPz_-Bkr3fchtDG7XSSbD_2wU13-_ID/view?usp=sharing',
      githubUrl: 'https://github.com/Yeshijrod28/hand-gesture-recognition-using-computerVision-and-MediaPipe',
    },
    {
      title: 'Laptop Price Predictor',
      description: 'A machine learning project that predicts the price of a laptop based on its specifications such as brand, processor, RAM, storage, GPU, operating system, and more.',
      image: project2,
      technologies: ['Python', 'Pandas', 'Numpy', 'Scikit-learn','Streamlit'],
      liveUrl: 'https://laptoppricepredictor4.streamlit.app/',
      githubUrl: 'https://github.com/Yeshijrod28/laptop-price-predictor',
    },
    {
      title: 'Travel Website',
      description: 'A responsive travel and tourism website built with ReactJS featuring destination sliders, packages, user login/registration and contact sections based on Bhutan as the destination.',
      image: project3,
      technologies: ['React', 'CSS', 'React Router DOM'],
      liveUrl: 'https://tashel.netlify.app/',
      githubUrl: 'https://github.com/Yeshijrod28/react-frontend-travel-website',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          <h2 className="projects-title">Featured Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image-container">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay"></div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-buttons">
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <button className="project-btn project-btn-primary" disabled>
                        Live Demo
                      </button>
                    )}

                    {project.githubUrl && project.githubUrl !== '' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-secondary"
                      >
                        GitHub
                      </a>
                    ) : (
                      <button className="project-btn project-btn-secondary" disabled>
                        GitHub
                      </button>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
          
          <div className="projects-footer">
            <a
              href="https://github.com/Yeshijrod28?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="view-all-btn"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
