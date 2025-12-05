import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Awards</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p className="achievement-org">{achievement.organization}</p>
              <span className="achievement-year">{achievement.year}</span>
              <p className="achievement-desc">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
