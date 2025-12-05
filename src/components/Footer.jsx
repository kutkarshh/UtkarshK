import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-section-title">{personal.name}</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{personal.title}</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Connect</h3>
          <div className="footer-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} {personal.name}. Built with <FaHeart style={{ color: 'var(--accent-cyan)' }} /> using React & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;
