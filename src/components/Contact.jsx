
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's Talk</h3>
              <p className="contact-description">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>✉️</span>
                  </div>
                  <div className="contact-item-content">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">yeshijrod99@gmail.com</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📞</span>
                  </div>
                  <div className="contact-item-content">
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">+975 17346842</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-item-content">
                    <div className="contact-label">Location</div>
                    <div className="contact-value">Taba, Thimphu</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-textarea"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
