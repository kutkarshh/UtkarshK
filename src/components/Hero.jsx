import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = `$ Hello World // I'm a Code Artisan`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content glass-card">
          <div className="code-block hero-code">
            <pre>
{`import React from 'react';

const UtkarshKumar = () => {
  return (
    <Developer 
      passion="Obsessed with clean code"
      skills={['React', 'Node.js', 'AWS']}
      moto="Building excellence every day"
    />
  );
};

export default UtkarshKumar;`}
            </pre>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="glow-text">{displayText}</span>
              {isTyping && <span className="cursor">|</span>}
            </h1>
            <h2 className="hero-subtitle">{personal.title}</h2>
            <p className="hero-desc">{personal.tagline}</p>
            
            <div className="hero-stats">
              <div className="stat glass-card">
                <span className="stat-value">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat glass-card">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat glass-card">
                <span className="stat-value">100%</span>
                <span className="stat-label">Code Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding-top: 80px;
          overflow: hidden;
        }
        
        .hero-container {
          width: 100%;
          max-width: 1200px;
          padding: 0 40px;
          margin: 0 auto;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .hero-code {
          background: rgba(10, 14, 39, 0.9) !important;
          border: 2px solid var(--accent-cyan) !important;
          overflow-x: auto;
          max-height: 500px;
          animation: slideInLeft 0.8s ease-out;
        }
        
        .hero-code pre {
          color: var(--accent-cyan);
          font-size: 13px;
          line-height: 1.8;
          margin: 0 !important;
          padding: 20px !important;
        }
        
        .hero-text {
          animation: slideInRight 0.8s ease-out;
        }
        
        .hero-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 16px;
          letter-spacing: -2px;
          line-height: 1.2;
        }
        
        .cursor {
          display: inline-block;
          width: 2px;
          height: 48px;
          background: var(--accent-cyan);
          margin-left: 4px;
          animation: blink 0.7s infinite;
          vertical-align: middle;
        }
        
        .hero-subtitle {
          font-size: 24px;
          color: var(--accent-purple);
          margin-bottom: 12px;
          font-weight: 600;
        }
        
        .hero-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px !important;
          text-align: center;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 900;
          color: var(--accent-cyan);
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: auto;
            padding-top: 100px;
            padding-bottom: 40px;
          }
          
          .hero-container {
            padding: 0 20px;
          }
          
          .hero-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .hero-title {
            font-size: 32px;
          }
          
          .hero-subtitle {
            font-size: 18px;
          }
          
          .hero-stats {
            grid-template-columns: 1fr;
          }
          
          .hero-code {
            max-height: 300px;
          }
          
          .hero-code pre {
            font-size: 11px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;