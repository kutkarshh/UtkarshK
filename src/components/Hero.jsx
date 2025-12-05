import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <h2 className="hero-subtitle">{personal.title}</h2>
          <p className="hero-tagline">{personal.tagline}</p>
          
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope /> Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-social">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personal.email}`}>
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="image-background"></div>
            <img src={personal.image} alt={personal.name} />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
