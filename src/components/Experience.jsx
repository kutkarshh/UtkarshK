import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span><FaCalendar /> {exp.duration}</span>
                    <span><FaMapMarkerAlt /> {exp.location}</span>
                  </div>
                </div>
                <p className="exp-description">{exp.description}</p>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
