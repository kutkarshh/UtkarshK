import { FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="section about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-summary">{about.summary}</p>
          <div className="highlights">
            {about.highlights.map((highlight, index) => (
              <div key={index} className="highlight-item glass-card">
                <FaCheckCircle className="check-icon" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
          <div className="about-info">
            <div className="info-item glass-card">
              <strong>Location:</strong> {personal.location}
            </div>
            <div className="info-item glass-card">
              <strong>Email:</strong> 
              <a href={`mailto:${personal.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {personal.email}
              </a>
            </div>
            <div className="info-item glass-card">
              <strong>Phone:</strong> 
              <a href={`tel:${personal.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {personal.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
