import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;

  const renderSkillCategory = (title, skillList) => (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div className="skill-progress" style={{width: `${skill.level}%`}}>
                <span>{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {renderSkillCategory('Frontend', skills.frontend)}
          {renderSkillCategory('Backend', skills.backend)}
          {renderSkillCategory('Database', skills.database)}
          {renderSkillCategory('DevOps & Cloud', skills.devops)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
