import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item glass-card">
            <div className="experience-header">
              <div className="experience-title-info">
                <h3 className="experience-title">{exp.position}</h3>
                <h4 className="experience-company">{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="experience-period">
                  <FaCalendar style={{ marginRight: '6px', fontSize: '12px' }} />
                  {exp.duration}
                </span>
                <span className="experience-location">
                  <FaMapMarkerAlt style={{ marginRight: '6px', fontSize: '12px' }} />
                  {exp.location}
                </span>
              </div>
            </div>
            <p className="experience-desc">{exp.description}</p>
            <ul className="experience-highlights">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="experience-highlight">{achievement}</li>
              ))}
            </ul>
            <div className="experience-tech">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="experience-tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
