import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const renderSkillCategory = (title, skillList) => (
    <div className="skill-category">
      <h3 className="skill-category-title">{title}</h3>
      {skillList.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-name">
            <span>{skill.name}</span>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {renderSkillCategory('Frontend', skills.frontend)}
        {renderSkillCategory('Backend', skills.backend)}
        {renderSkillCategory('Database', skills.database)}
        {renderSkillCategory('DevOps & Cloud', skills.devops)}
      </div>
    </section>
  );
};

export default Skills;