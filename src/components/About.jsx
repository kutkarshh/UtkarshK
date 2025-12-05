import { FaCheckCircle } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-summary">{about.summary}</p>
            <div className="highlights">
              {about.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <FaCheckCircle className="check-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="about-info">
              <div className="info-item">
                <strong>Location:</strong> {personal.location}
              </div>
              <div className="info-item">
                <strong>Email:</strong> {personal.email}
              </div>
              <div className="info-item">
                <strong>Phone:</strong> {personal.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
