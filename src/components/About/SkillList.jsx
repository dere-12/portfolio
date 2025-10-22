import { allSkills } from "./skillsData";

const SkillList = ({ category }) => {
  const filteredSkills = allSkills.filter(
    (skill) => skill.category === category
  );

  return (
    <ul>
      {filteredSkills.map((skill) => (
        <li key={skill.name} className="skill-item">
          <skill.icon className="skill-icon" size={24} />
          {skill.name}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
