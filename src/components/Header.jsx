import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="logo"><span>UK</span></div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
