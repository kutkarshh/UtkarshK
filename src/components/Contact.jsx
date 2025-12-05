import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
            Let's Connect!
          </h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <FaEnvelope className="contact-info-item-icon" />
              <div className="contact-info-item-content">
                <span className="contact-info-label">Email</span>
                <a href={`mailto:${personal.email}`} className="contact-info-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {personal.email}
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <FaPhone className="contact-info-item-icon" />
              <div className="contact-info-item-content">
                <span className="contact-info-label">Phone</span>
                <a href={`tel:${personal.phone}`} className="contact-info-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                  {personal.phone}
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-info-item-icon" />
              <div className="contact-info-item-content">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">{personal.location}</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: 'var(--accent-cyan)', transition: 'all 0.3s ease' }}>
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontSize: '24px', color: 'var(--accent-cyan)', transition: 'all 0.3s ease' }}>
              <FaLinkedin />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input 
              type="text" 
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input 
              type="email" 
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Your Message</label>
            <textarea 
              className="form-textarea"
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
