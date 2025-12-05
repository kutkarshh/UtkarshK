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
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div className="contact-item">
                <FaPhone />
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>{personal.location}</span>
              </div>
            </div>
            <div className="contact-social">
              <a href={personal.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <textarea 
              placeholder="Your Message" 
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
