import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{personal.name}</h3>
            <p>{personal.title}</p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
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
        <div className="footer-bottom">
          <p>© {currentYear} {personal.name}. Built with <FaHeart className="heart" /> using React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
